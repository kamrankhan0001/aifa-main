

// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const userSchema = new mongoose.Schema({
//   name: { 
//     type: String, 
//     required: [true, "Please add a name"] 
//   },
//   email: { 
//     type: String, 
//     required: [true, "Please add an email"], 
//     unique: true,
//     lowercase: true,
//     trim:true,
//     match: [
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//       "Please add a valid email",
//     ],
//   },
//   // ✅ CHANGE: Made phone optional (not required) for Google users
//   phone: { 
//     type: String, 
//     required: false 
//   },
//   // ✅ CHANGE: Made password optional for Google users
//   password: { 
//     type: String, 
//     required: function() {
//       // Only require password if it's NOT a Google login
//       return !this.isGoogleUser;
//     },
//     minlength: 6,
//   },
//   // ✅ ADDED: Field to track Google users
//   isGoogleUser: {
//     type: Boolean,
//     default: false
//   },
//   // ✅ ADDED: To store the Google profile image
//   profilePicture: {
//     type: String,
//     default: ""
//   },
//   resetPasswordToken: {
//     type: String,
//     default: null
//   },
//   resetPasswordExpires: {
//     type: Date,
//     default: null
//   }
// }, { timestamps: true });

// // Hash password before saving to DB
// userSchema.pre('save', async function (next) {
//   // ✅ IMPORTANT: If there's no password (Google user), skip hashing
//   if (!this.password || !this.isModified('password')) {
//     return next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   // Handle case where Google user tries to login with password but doesn't have one
//   if(!this.password) return false;
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model('User', userSchema);
// export default User;


import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Please add a name"],
    trim: true
  },
  email: { 
    type: String, 
    required: [true, "Please add an email"], 
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  phone: { 
    type: String, 
    required: false 
  },
  password: { 
    type: String, 
    required: function() {
      // Only require password if it's NOT a Google login
      return !this.isGoogleUser;
    },
    minlength: 6,
  },
  isGoogleUser: {
    type: Boolean,
    default: false
  },
  profilePicture: {
    type: String,
    default: ""
  },
  // OTP Fields
  resetPasswordToken: {
    type: String,
    default: null
  },
  resetPasswordExpires: {
    type: Date,
    default: null
  }
}, { timestamps: true });

// --- THE FIX IS HERE ---
// Removed 'next' because we are using an async function
userSchema.pre('save', async function () {
  // 1. If password isn't being changed (e.g. saving an OTP), skip hashing
  if (!this.isModified('password')) {
    return; 
  }

  // 2. Safety check for Google users or empty passwords
  if (!this.password) {
    return;
  }

  // 3. Hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  if(!this.password) return false;
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;