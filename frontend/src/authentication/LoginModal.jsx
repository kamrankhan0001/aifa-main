
// "use client";

// import { useState } from "react";
// import { useGoogleLogin } from '@react-oauth/google';

// export default function LoginModal({ onClose, onSwitchToSignup, onSwitchToLogin }) {
//   // --- VIEW CONTROL ---
//   // Possible views: "email", "phone", "forgot-password"
//   const [view, setView] = useState("email");

//   // --- FORM STATES ---
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showOtpField, setShowOtpField] = useState(false);

//   // --- STATUS STATES ---
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: "", text: "" }); // { type: 'error' | 'success', text: '' }

//   // Helper to show messages
//   const setFeedback = (type, text) => setMessage({ type, text });
//   const clearFeedback = () => setMessage({ type: "", text: "" });


//   const googleLogin = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       console.log("Token Response:", tokenResponse); // Debugging ke liye check karein
//       setLoading(true);
//       try {
//         const res = await fetch("http://localhost:5000/api/auth/google", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           // useGoogleLogin by default 'access_token' deta hai
//           body: JSON.stringify({ token: tokenResponse.access_token }), 
//         });
        
//         const data = await res.json();
//         if (res.ok) {
//   setFeedback("success", data.message); // This will show "Welcome back!" or "Account created!"
//   localStorage.setItem("token", data.token);
//   setTimeout(() => onClose(), 1500);
// } else {
//            setFeedback("error", data.message || "Backend verification failed");
//         }
//       } catch (err) {
//         setFeedback("error", "Server is not responding");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // --- 2. EMAIL LOGIN LOGIC ---
//   const handleEmailLogin = async (e) => {
//     e.preventDefault();
//     clearFeedback();
//     if (!email || !password) return setFeedback("error", "Email and Password are required.");

//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         setFeedback("success", "Login Successful! Redirecting...");
//         setTimeout(() => onClose(), 1500);
//       } else {
//         setFeedback("error", data.message || "Invalid credentials.");
//       }
//     } catch (err) {
//       setFeedback("error", "Server error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- 3. FORGOT PASSWORD LOGIC ---
//   const handleResetRequest = async (e) => {
//     e.preventDefault();
//     clearFeedback();
//     if (!email) return setFeedback("error", "Please enter your email to receive a reset link.");

//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setFeedback("success", "Reset link sent! Please check your inbox.");
//       } else {
//         setFeedback("error", data.message || "Email not found.");
//       }
//     } catch (err) {
//       setFeedback("error", "Server error. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- 4. PHONE LOGIN LOGIC (UI Placeholder) ---
//   const handleSendOtp = () => {
//     clearFeedback();
//     if (!phoneNumber) return setFeedback("error", "Enter a valid phone number.");
//     setShowOtpField(true);
//     setFeedback("success", "OTP sent successfully!");
//   };

//   return (
//     <div onClick={onClose} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
//       <div 
//         onClick={(e) => e.stopPropagation()} 
//         className="w-full max-w-lg bg-[#0B0F10] rounded-2xl p-6 md:p-8 relative border border-white/10"
//       >
//         <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl hover:opacity-70 transition-opacity">✕</button>

//         <p className="text-gray-400 text-sm">Step 1 Of 2</p>
//         <h2 className="text-white text-3xl font-semibold mb-6">
//           {view === "forgot-password" ? "Reset Password" : "Login"}
//         </h2>

//         {/* FEEDBACK ALERT */}
//         {message.text && (
//           <div className={`mb-4 p-3 rounded-lg border text-sm text-center ${
//             message.type === "success" 
//             ? "bg-green-500/10 border-green-500/50 text-green-500" 
//             : "bg-red-500/10 border-red-500/50 text-red-500"
//           }`}>
//             {message.text}
//           </div>
//         )}

//         {/* --- DYNAMIC VIEW RENDERING --- */}
//         {view === "forgot-password" ? (
//           /* FORGOT PASSWORD FORM */
//           <form onSubmit={handleResetRequest} className="space-y-4">
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Enter the email address associated with your account and we'll send you a link to reset your password.
//             </p>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-[#C7E36B]"
//               required
//             />
//             <button 
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#C7E36B] text-black py-3 rounded-md font-semibold hover:bg-[#b8d45a] transition-all disabled:opacity-50"
//             >
//               {loading ? "SENDING..." : "SEND RESET LINK"}
//             </button>
//             <p 
//               onClick={() => {setView("email"); clearFeedback();}} 
//               className="text-center text-sm text-gray-400 cursor-pointer hover:text-white"
//             >
//               Back to Login
//             </p>
//           </form>
//         ) : (
//           /* LOGIN VIEWS (EMAIL / PHONE) */
//           <>
//             {view === "email" ? (
//               <form onSubmit={handleEmailLogin}>
//                 <input
//                   type="email"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white mb-4 outline-none focus:border-[#C7E36B]"
//                 />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter Your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white mb-3 outline-none focus:border-[#C7E36B]"
//                 />
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex items-center gap-2">
//                     <input 
//                       type="checkbox" 
//                       id="showPass"
//                       checked={showPassword} 
//                       onChange={() => setShowPassword(!showPassword)} 
//                       className="cursor-pointer accent-[#C7E36B]"
//                     />
//                     <label htmlFor="showPass" className="text-gray-400 text-sm cursor-pointer">Show password</label>
//                   </div>
//                   <span 
//                     onClick={() => {setView("forgot-password"); clearFeedback();}}
//                     className="text-blue-400 text-sm cursor-pointer hover:underline"
//                   >
//                     Forgot password?
//                   </span>
//                 </div>
//                  {/* CAPTCHA */}
//          <div className="bg-[#1a1f22] border border-white/10 rounded-lg p-4 flex justify-between items-center mb-6">
//           <span className="text-green-400 text-sm">✔ Success!</span>
//           <span className="text-xs text-gray-400">Cloudflare</span>
//          </div>
//                 <button 
//                   type="submit"
//                   disabled={loading || message.type === "success"}
//                   className="w-full bg-[#C7E36B] text-black py-3 rounded-md font-semibold mb-4 hover:bg-[#b8d45a] transition-all disabled:opacity-50 cursor-pointer"
//                 >
//                   {loading ? "VERIFYING..." : "+ VERIFY AND LOGIN"}
//                 </button>
//               </form>
//             ) : (
//               /* PHONE VIEW */
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Enter Phone Number"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-[#C7E36B]"
//                 />
//                 {showOtpField && (
//                   <input
//                     type="text"
//                     placeholder="Enter 6-digit OTP"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-[#C7E36B]"
//                   />
//                 )}
//                 <button 
//                   onClick={showOtpField ? () => setFeedback("success", "Verifying...") : handleSendOtp} 
//                   className="w-full bg-[#C7E36B] text-black py-3 rounded-md font-semibold mb-2"
//                 >
//                   {showOtpField ? "VERIFY OTP" : "SEND OTP"}
//                 </button>
//                 <p 
//                   onClick={() => {setView("email"); clearFeedback();}} 
//                   className="text-center text-sm text-gray-400 cursor-pointer mb-4 hover:text-white"
//                 >
//                   Back to Email Login
//                 </p>
//               </div>
//             )}

//             {/* OR SEPARATOR */}
//             <div className="flex items-center gap-3 my-6">
//               <div className="flex-1 h-[1px] bg-white/10"></div>
//               <span className="text-gray-500 text-xs">OR</span>
//               <div className="flex-1 h-[1px] bg-white/10"></div>
//             </div>

//             {/* SECONDARY LOGIN OPTIONS */}
//             <button 
//               onClick={() => {setView("phone"); clearFeedback();}}
//               className="w-full border border-white/20 text-white py-3 rounded-md mb-4 hover:bg-white/5 transition-colors cursor-pointer"
//             >
//               Login Via Phone Number
//             </button>

//             <button 
//               onClick={() => googleLogin()}
//               className="w-full border border-white/20 text-white py-3 rounded-md flex justify-center items-center gap-2 hover:bg-white/5 transition-colors cursor-pointer"
//             >
//               <img src="/icons/google.png" alt="G" className="w-4 h-4" />
//               Login Via Google
//             </button>
//           </>
//         )}

//         <p className="text-center text-gray-400 text-sm mt-8">
//           or create an account on Aifa?{" "}
//           <span onClick={onSwitchToSignup} className="text-white underline cursor-pointer hover:text-[#C7E36B] transition-colors">
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { useGoogleLogin } from '@react-oauth/google';

// export default function LoginModal({ onClose, onSwitchToSignup, onSwitchToLogin }) {
//   // --- VIEW CONTROL ---
//   const [view, setView] = useState("email");

//   // --- FORM STATES ---
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showOtpField, setShowOtpField] = useState(false);

//   // --- STATUS STATES ---
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: "", text: "" });

//   const setFeedback = (type, text) => setMessage({ type, text });
//   const clearFeedback = () => setMessage({ type: "", text: "" });

//   const googleLogin = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       setLoading(true);
//       try {
//         const res = await fetch("http://localhost:5000/api/auth/google", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ token: tokenResponse.access_token }), 
//         });
        
//         const data = await res.json();
//         if (res.ok) {
//           setFeedback("success", data.message);
//           localStorage.setItem("token", data.token);
//           setTimeout(() => onClose(), 1500);
//         } else {
//            setFeedback("error", data.message || "Backend verification failed");
//         }
//       } catch (err) {
//         setFeedback("error", "Server is not responding");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   const handleEmailLogin = async (e) => {
//     e.preventDefault();
//     clearFeedback();
//     if (!email || !password) return setFeedback("error", "Email and Password are required.");

//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         setFeedback("success", "Welcome back! Access granted.");
//         setTimeout(() => onClose(), 1500);
//       } else {
//         setFeedback("error", data.message || "Invalid credentials.");
//       }
//     } catch (err) {
//       setFeedback("error", "Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetRequest = async (e) => {
//     e.preventDefault();
//     clearFeedback();
//     if (!email) return setFeedback("error", "Enter email to receive reset link.");

//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
//       if (response.ok) {
//         setFeedback("success", "Reset link sent to your inbox.");
//       } else {
//         setFeedback("error", "Account not found.");
//       }
//     } catch (err) {
//       setFeedback("error", "Server error.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSendOtp = () => {
//     clearFeedback();
//     if (!phoneNumber) return setFeedback("error", "Enter a valid phone number.");
//     setShowOtpField(true);
//     setFeedback("success", "OTP sent successfully!");
//   };

//   return (
//     <div 
//       onClick={onClose} 
//       className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-in fade-in duration-300"
//     >
//       <div 
//         onClick={(e) => e.stopPropagation()} 
//         className="w-full max-w-md bg-[#0B0F10] rounded-3xl p-8 relative border border-white/10 shadow-2xl overflow-hidden"
//       >
//         {/* Glow Effect Background */}
//         <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C7E36B]/10 blur-[100px] rounded-full"></div>
        
//         <button 
//           onClick={onClose} 
//           className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors p-2"
//         >
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
//         </button>

//         <div className="mb-8">
//           <p className="text-[#C7E36B] text-[10px] uppercase tracking-[0.2em] font-bold mb-1">AIFA FILM ACADEMY</p>
//           <h2 className="text-white text-4xl font-bold tracking-tight">
//             {view === "forgot-password" ? "Reset" : "Login"}
//           </h2>
//         </div>

//         {/* FEEDBACK ALERT */}
//         {message.text && (
//           <div className={`mb-6 p-4 rounded-xl border text-xs font-medium flex items-center gap-3 animate-in slide-in-from-top-2 duration-300 ${
//             message.type === "success" 
//             ? "bg-green-500/10 border-green-500/20 text-green-400" 
//             : "bg-red-500/10 border-red-500/20 text-red-400"
//           }`}>
//             <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
//             {message.text}
//           </div>
//         )}

//         {/* --- DYNAMIC VIEW RENDERING --- */}
//         {view === "forgot-password" ? (
//           <form onSubmit={handleResetRequest} className="space-y-5">
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Lost your key? Enter your email and we'll send a recovery link.
//             </p>
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 ring-[#C7E36B]/20 focus:border-[#C7E36B] transition-all"
//               required
//             />
//             <button 
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#C7E36B] text-black py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
//             >
//               {loading ? "SENDING..." : "SEND RECOVERY LINK"}
//             </button>
//             <p 
//               onClick={() => {setView("email"); clearFeedback();}} 
//               className="text-center text-xs text-gray-500 cursor-pointer hover:text-white transition-colors"
//             >
//               Return to Login
//             </p>
//           </form>
//         ) : (
//           <>
//             {view === "email" ? (
//               <form onSubmit={handleEmailLogin} className="space-y-4">
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 ring-[#C7E36B]/20 focus:border-[#C7E36B] transition-all"
//                 />
//                 <div className="relative">
//                     <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 ring-[#C7E36B]/20 focus:border-[#C7E36B] transition-all"
//                     />
//                 </div>
                
//                 <div className="flex items-center justify-between text-xs px-1">
//                   <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
//                     <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${showPassword ? 'bg-[#C7E36B] border-[#C7E36B]' : 'border-white/20'}`}>
//                         {showPassword && <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>}
//                     </div>
//                     <span className="text-gray-400 group-hover:text-gray-200">Show password</span>
//                   </div>
//                   <span 
//                     onClick={() => {setView("forgot-password"); clearFeedback();}}
//                     className="text-gray-500 hover:text-[#C7E36B] cursor-pointer transition-colors"
//                   >
//                     Forgot?
//                   </span>
//                 </div>

//                 <button 
//                   type="submit"
//                   disabled={loading || message.type === "success"}
//                   className="w-full bg-[#C7E36B] text-black py-4 rounded-xl font-bold mt-2 hover:shadow-[0_0_20px_rgba(199,227,107,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
//                 >
//                   {loading ? "AUTHENTICATING..." : "VERIFY & LOGIN"}
//                 </button>
//               </form>
//             ) : (
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#C7E36B] transition-all"
//                 />
//                 {showOtpField && (
//                   <input
//                     type="text"
//                     placeholder="6-digit OTP"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none animate-in slide-in-from-top-2"
//                   />
//                 )}
//                 <button 
//                   onClick={showOtpField ? () => setFeedback("success", "Verifying...") : handleSendOtp} 
//                   className="w-full bg-[#C7E36B] text-black py-4 rounded-xl font-bold transition-all hover:shadow-lg"
//                 >
//                   {showOtpField ? "VERIFY OTP" : "SEND OTP"}
//                 </button>
//                 <p 
//                   onClick={() => {setView("email"); clearFeedback();}} 
//                   className="text-center text-xs text-gray-500 cursor-pointer hover:text-white"
//                 >
//                   Back to Email
//                 </p>
//               </div>
//             )}

//             {/* OR SEPARATOR */}
//             <div className="flex items-center gap-4 my-8">
//               <div className="flex-1 h-[1px] bg-white/5"></div>
//               <span className="text-gray-600 text-[10px] font-bold tracking-widest">OR CONTINUE WITH</span>
//               <div className="flex-1 h-[1px] bg-white/5"></div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//                 <button 
//                 onClick={() => {setView("phone"); clearFeedback();}}
//                 className="flex items-center justify-center gap-2 border border-white/10 text-white py-3 rounded-xl hover:bg-white/5 transition-all text-sm font-medium"
//                 >
//                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
//                 Phone
//                 </button>

//                 <button 
//                 onClick={() => googleLogin()}
//                 className="flex items-center justify-center gap-2 border border-white/10 text-white py-3 rounded-xl hover:bg-white/5 transition-all text-sm font-medium"
//                 >
//                 <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" className="w-4 h-4" />
//                 Google
//                 </button>
//             </div>
//           </>
//         )}

//         <p className="text-center text-gray-500 text-xs mt-10">
//           New to AIFA Academy?{" "}
//           <span onClick={onSwitchToSignup} className="text-white font-bold hover:text-[#C7E36B] cursor-pointer transition-colors ml-1">
//             Create Account
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';

export default function LoginModal({ onClose, onSwitchToSignup, onSwitchToLogin }) {
  // --- VIEW CONTROL ---
  // Added "reset-password" view to handle the OTP and new password input
  const [view, setView] = useState("email");

  // --- FORM STATES ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState(""); // State for the new password
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);

  // --- STATUS STATES ---
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const setFeedback = (type, text) => setMessage({ type, text });
  const clearFeedback = () => setMessage({ type: "", text: "" });

  // Helper to normalize email to lowercase and trim spaces
  const cleanEmail = (val) => val.trim().toLowerCase();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: tokenResponse.access_token }), 
        });
        
        const data = await res.json();
        if (res.ok) {
          setFeedback("success", data.message);
          localStorage.setItem("token", data.token);
          setTimeout(() => onClose(), 1500);
        } else {
           setFeedback("error", data.message || "Backend verification failed");
        }
      } catch (err) {
        setFeedback("error", "Server is not responding");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    clearFeedback();
    if (!email || !password) return setFeedback("error", "Email and Password are required.");

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail(email), password }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setFeedback("success", "Welcome back! Access granted.");
        setTimeout(() => onClose(), 1500);
      } else {
        setFeedback("error", data.message || "Invalid credentials.");
      }
    } catch (err) {
      setFeedback("error", "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 1. REQUEST OTP LOGIC
  const handleResetRequest = async (e) => {
    e.preventDefault();
    clearFeedback();
    if (!email) return setFeedback("error", "Enter email to receive reset link.");

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail(email) }), // Fixed with normalization
      });
      const data = await response.json();
      
      if (response.ok) {
        setFeedback("success", "Code sent! Check your inbox.");
        setTimeout(() => setView("reset-password"), 1500); // Switch to verification view
      } else {
        setFeedback("error", data.message || "Account not found.");
      }
    } catch (err) {
      setFeedback("error", "Server error.");
    } finally {
      setLoading(false);
    }
  };

  // 2. RESET PASSWORD LOGIC
  const handleFinalReset = async (e) => {
    e.preventDefault();
    clearFeedback();
    if (!otp || !newPassword) return setFeedback("error", "OTP and New Password are required.");

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail(email), otp, newPassword }),
      });
      const data = await response.json();

      if (response.ok) {
        setFeedback("success", "Password updated successfully!");
        setTimeout(() => {
          setView("email");
          clearFeedback(); // Send back to login
        }, 2000);
      } else {
        setFeedback("error", data.message || "Reset failed.");
      }
    } catch (err) {
      setFeedback("error", "Server error.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = () => {
    clearFeedback();
    if (!phoneNumber) return setFeedback("error", "Enter a valid phone number.");
    setShowOtpField(true);
    setFeedback("success", "OTP sent successfully!");
  };

  return (
    <div 
      onClick={onClose} 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-in fade-in duration-300"
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="w-full max-w-md bg-[#0B0F10] rounded-3xl p-8 relative border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Glow Effect Background */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C7E36B]/10 blur-[100px] rounded-full"></div>
        
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors p-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="mb-8">
          <p className="text-[#C7E36B] text-[10px] uppercase tracking-[0.2em] font-bold mb-1">AIFA FILM ACADEMY</p>
          <h2 className="text-white text-4xl font-bold tracking-tight">
            {view === "forgot-password" ? "Reset" : view === "reset-password" ? "Verify" : "Login"}
          </h2>
        </div>

        {/* FEEDBACK ALERT */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-xl border text-xs font-medium flex items-center gap-3 animate-in slide-in-from-top-2 duration-300 ${
            message.type === "success" 
            ? "bg-green-500/10 border-green-500/20 text-green-400" 
            : "bg-red-500/10 border-red-500/20 text-red-400"
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            {message.text}
          </div>
        )}

        {/* --- DYNAMIC VIEW RENDERING --- */}
        {view === "forgot-password" && (
          <form onSubmit={handleResetRequest} className="space-y-5">
            <p className="text-gray-400 text-sm leading-relaxed">
              Lost your key? Enter your email and we'll send a recovery code.
            </p>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 ring-[#C7E36B]/20 focus:border-[#C7E36B] transition-all"
              required
            />
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#C7E36B] text-black py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {loading ? "SENDING..." : "GET CODE"}
            </button>
            <p 
              onClick={() => {setView("email"); clearFeedback();}} 
              className="text-center text-xs text-gray-500 cursor-pointer hover:text-white transition-colors"
            >
              Return to Login
            </p>
          </form>
        )}

        {/* --- ADDED VIEW: RESET PASSWORD (OTP INPUT) --- */}
        {view === "reset-password" && (
          <form onSubmit={handleFinalReset} className="space-y-5">
            <p className="text-gray-400 text-sm leading-relaxed">
              Enter the 6-digit code and choose a new password.
            </p>
            <input
              type="text"
              placeholder="6-Digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-center tracking-[1em] font-bold outline-none focus:border-[#C7E36B] transition-all"
              required
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#C7E36B] transition-all"
              required
            />
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#C7E36B] text-black py-4 rounded-xl font-bold transition-all disabled:opacity-50"
            >
              {loading ? "UPDATING..." : "UPDATE PASSWORD"}
            </button>
          </form>
        )}

        {view === "email" && (
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 ring-[#C7E36B]/20 focus:border-[#C7E36B] transition-all"
            />
            <div className="relative">
                <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 ring-[#C7E36B]/20 focus:border-[#C7E36B] transition-all"
                />
            </div>
            
            <div className="flex items-center justify-between text-xs px-1">
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${showPassword ? 'bg-[#C7E36B] border-[#C7E36B]' : 'border-white/20'}`}>
                    {showPassword && <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>}
                </div>
                <span className="text-gray-400 group-hover:text-gray-200">Show password</span>
              </div>
              <span 
                onClick={() => {setView("forgot-password"); clearFeedback();}}
                className="text-gray-500 hover:text-[#C7E36B] cursor-pointer transition-colors"
              >
                Forgot Password?
              </span>
            </div>

            <button 
              type="submit"
              disabled={loading || message.type === "success"}
              className="w-full bg-[#C7E36B] text-black py-4 rounded-xl font-bold mt-2 hover:shadow-[0_0_20px_rgba(199,227,107,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
            >
              {loading ? "AUTHENTICATING..." : "VERIFY & LOGIN"}
            </button>
          </form>
        )}

        {view === "phone" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#C7E36B] transition-all"
            />
            {showOtpField && (
              <input
                type="text"
                placeholder="6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none animate-in slide-in-from-top-2"
              />
            )}
            <button 
              onClick={showOtpField ? () => setFeedback("success", "Verifying...") : handleSendOtp} 
              className="w-full bg-[#C7E36B] text-black py-4 rounded-xl font-bold transition-all hover:shadow-lg"
            >
              {showOtpField ? "VERIFY OTP" : "SEND OTP"}
            </button>
            <p 
              onClick={() => {setView("email"); clearFeedback();}} 
              className="text-center text-xs text-gray-500 cursor-pointer hover:text-white"
            >
              Back to Email
            </p>
          </div>
        )}

        {/* OR SEPARATOR - Hidden during reset password flow to save space */}
        {view !== "reset-password" && (
          <>
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-[1px] bg-white/5"></div>
              <span className="text-gray-600 text-[10px] font-bold tracking-widest">OR CONTINUE WITH</span>
              <div className="flex-1 h-[1px] bg-white/5"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button 
                onClick={() => {setView("phone"); clearFeedback();}}
                className="flex items-center justify-center gap-2 border border-white/10 text-white py-3 rounded-xl hover:bg-white/5 transition-all text-sm font-medium"
                >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Phone
                </button>

                <button 
                onClick={() => googleLogin()}
                className="flex items-center justify-center gap-2 border border-white/10 text-white py-3 rounded-xl hover:bg-white/5 transition-all text-sm font-medium"
                >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" className="w-4 h-4" />
                Google
                </button>
            </div>
          </>
        )}

        <p className="text-center text-gray-500 text-xs mt-10">
          New to AIFA Academy?{" "}
          <span onClick={onSwitchToSignup} className="text-white font-bold hover:text-[#C7E36B] cursor-pointer transition-colors ml-1">
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}