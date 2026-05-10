
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import { OAuth2Client } from 'google-auth-library'; // Isse install karein: npm install google-auth-library
// import {sendEmail} from '../utils/emailService.js'; // Yahan aapka email sending logic hoga (e.g., Nodemailer)


// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // Helper to create JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
// };

// // --- REGISTER ---
// export const register = async (req, res) => {
//   const { name, email, phone, password } = req.body;
//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: 'User already exists' });

//     const user = await User.create({ name, email, phone, password });
//     if (user) {
//       res.status(201).json({
//         _id: user._id,
//         name: user.name,
//         token: generateToken(user._id),
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message || 'Server error' });
//   }
// };

// // --- LOGIN (EMAIL/PASSWORD) ---
// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user && (await bcrypt.compare(password, user.password))) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // --- GOOGLE LOGIN ---


// export const googleLogin = async (req, res) => {
//   const { token } = req.body; // This is the access_token from React

//   try {
//     // 1. Fetch user info from Google's UserInfo API using the access_token
//     const googleRes = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`);
//     const payload = await googleRes.json();

//     if (!payload.email) {
//       return res.status(401).json({ message: "Invalid Google Token" });
//     }

//     const { email, name, picture } = payload;

//     // 2. Find or Create User in MongoDB
//     let user = await User.findOne({ email });

//     if (!user) {
//       user = await User.create({
//         name,
//         email,
//         profilePicture: picture,
//         isGoogleUser: true,
//         // Create a random password since it's required in some schemas
//         password: await bcrypt.hash(Math.random().toString(36), 10) 
//       });
//     }

//     // 3. Generate YOUR AIFA JWT
//     const appToken = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.status(200).json({
//       token: appToken,
//       name: user.name,
//       message: "Login Successful"
//     });

//   } catch (error) {
//     console.error("Google Auth Error:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
// // --- FORGOT PASSWORD ---
// //import { sendEmail } from '../utils/sendEmail.js';

// // @desc    Request Password Reset OTP
// // @route   POST /api/auth/forgot-password
// export const forgotPassword = async (req, res) => {
//   const { email } = req.body;
//   try {
//     const user = await User.findOne({ email });
    
//     // For security, don't tell the user if the email doesn't exist 
//     // but for development, we'll keep it clear:
//     if (!user) return res.status(404).json({ message: "User not found" });

//     if (user.isGoogleUser) {
//       return res.status(400).json({ message: "This account uses Google Login. Please sign in with Google." });
//     }

//     // 1. Generate 6-digit OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     // 2. Save OTP and Expiry (10 mins) to DB
//     user.resetPasswordToken = otp;
//     user.resetPasswordExpires = Date.now() + 600000; // 10 minutes
//     await user.save();

//     // 3. Send Email
//     await sendEmail(email, otp);

//     res.status(200).json({ message: "Verification code sent to your email" });
//   } catch (error) {
//     console.error("Forgot Password Error:", error);
//     res.status(500).json({ message: "Failed to send email. Try again later." });
//   }
// };

// // @desc    Reset Password using OTP
// // @route   POST /api/auth/reset-password
// export const resetPassword = async (req, res) => {
//   const { email, otp, newPassword } = req.body;
//   try {
//     const user = await User.findOne({
//       email,
//       resetPasswordToken: otp,
//       resetPasswordExpires: { $gt: Date.now() } // Must be in the future
//     });

//     if (!user) {
//       return res.status(400).json({ message: "Invalid or expired verification code" });
//     }

//     // Update password (pre-save middleware will hash this automatically)
//     user.password = newPassword;
//     user.resetPasswordToken = null;
//     user.resetPasswordExpires = null;
//     await user.save();

//     res.status(200).json({ message: "Password reset successful! You can now login." });
//   } catch (error) {
//     res.status(500).json({ message: "Server error during password reset" });
//   }
// };


import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { OAuth2Client } from 'google-auth-library';
import { sendEmail } from '../utils/sendEmail.js'; // Ensure file name matches exactly

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Helper to create JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// --- REGISTER ---
export const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, phone, password });
    
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message || 'Server error during registration' });
  }
};

// --- LOGIN (EMAIL/PASSWORD) ---
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error during login' });
  }
};

// --- GOOGLE LOGIN ---
export const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    const googleRes = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`);
    const payload = await googleRes.json();

    if (!payload.email) {
      return res.status(401).json({ message: "Invalid Google Token" });
    }

    const { email, name, picture } = payload;
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        profilePicture: picture,
        isGoogleUser: true,
        // Password not required for Google users due to our model logic
      });
    }

    const appToken = generateToken(user._id);

    res.status(200).json({
      token: appToken,
      name: user.name,
      message: "Login Successful"
    });

  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// --- FORGOT PASSWORD (SEND OTP) ---
export const forgotPassword = async (req, res) => {
  try {
    // 1. ALWAYS sanitize the input: trim spaces and convert to lowercase
    const email = req.body.email ? req.body.email.trim().toLowerCase() : "";

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // 2. Search using the sanitized email
    const user = await User.findOne({ email });
    
    if (!user) {
      // DEBUG: Log this to your terminal to see what the server is actually receiving
      console.log(`Failed lookup for: "${email}"`); 
      return res.status(404).json({ message: "No account found with this email" });
    }

    if (user.isGoogleUser) {
      return res.status(400).json({ message: "This account uses Google Login. Please sign in with Google." });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetPasswordToken = otp;
    user.resetPasswordExpires = Date.now() + 600000; 
    await user.save();

    await sendEmail(user.email, otp); // Use user.email from DB to ensure correct casing

    res.status(200).json({ message: "Verification code sent to your email" });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// --- RESET PASSWORD (VERIFY OTP & UPDATE) ---
export const resetPassword = async (req, res) => {
  try {
    const { otp, newPassword } = req.body;
    // Sanitize email here too
    const email = req.body.email ? req.body.email.trim().toLowerCase() : "";

    const user = await User.findOne({
      email,
      resetPasswordToken: otp,
      resetPasswordExpires: { $gt: Date.now() } 
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired verification code" });
    }

    user.password = newPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    
    await user.save();

    res.status(200).json({ message: "Password reset successful! You can now login." });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ message: "Server error during password reset" });
  }
};