




// "use client";
// import { useState } from "react";

// export default function SignUpModal({ onClose, onSwitchToLogin }) {
//   // 1. Track which step we are on
//   const [step, setStep] = useState(1);

//   // 2. State for all form fields
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleNextStep = () => {
//     if (formData.name && formData.email && formData.phone) {
//       setStep(2);
//     } else {
//       alert("Please fill in all fields");
//     }
//   };

//   const handleSignUp = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token); // Store JWT
//         alert("Account created successfully!");
//         onClose();
//       } else {
//         alert(data.message || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Signup Error:", error);
//       alert("Server is not responding");
//     }
//   };

//   return (
//     <div
//       onClick={onClose}
//       className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="w-full max-w-xl bg-[#0B0F10] rounded-[32px] p-6 md:p-10 relative border border-white/10"
//       >
//         <button onClick={onClose} className="absolute top-5 right-5 text-white text-2xl">✕</button>

//         <p className="text-gray-400 text-sm mb-1">Step {step} Of 2</p>
//         <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8">Sign up</h2>

//         {step === 1 ? (
//           <>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white mb-4 outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white mb-4 outline-none"
//             />
//             <div className="flex gap-3 mb-6">
//               <div className="flex items-center gap-2 border border-white/20 rounded-xl px-4 py-3 text-white">+91</div>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Enter Phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="flex-1 bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white outline-none"
//               />
//             </div>
//             <button onClick={handleNextStep} className="w-full bg-[#C7E36B] text-black py-3 rounded-md font-semibold cursor-pointer">
//               CONTINUE
//             </button>
//           </>
//         ) : (
//           <>
//             <input
//               type="password"
//               name="password"
//               placeholder="Create Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white mb-6 outline-none"
//             />
//             <button onClick={handleSignUp} className="w-full bg-[#C7E36B] text-black py-3 rounded-md font-semibold">
//               COMPLETE SIGNUP
//             </button>
//             <button onClick={() => setStep(1)} className="w-full text-gray-400 mt-2 text-sm italic">Go Back</button>
//           </>
//         )}

//         <p className="text-gray-400 text-sm mt-4 text-center">
//           Already have an account?{" "}
//           <span onClick={onSwitchToLogin} className="text-blue-400 cursor-pointer">Click here</span>
//         </p>
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Phone, Lock, Eye, EyeOff, Loader2, ArrowLeft, Check } from "lucide-react";

export default function SignUpModal({ onClose, onSwitchToLogin }) {
  // --- States ---
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // --- Handlers ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name || !emailRegex.test(formData.email) || formData.phone.length < 10) {
      alert("Please enter valid details to continue.");
      return;
    }
    setStep(2);
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        // Show success for 2 seconds then navigate to login
        setTimeout(() => {
          onSwitchToLogin();
        }, 2000);
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Server is not responding. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-[480px] bg-[#0B0F10] rounded-[32px] overflow-hidden relative border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-10">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              /* --- SUCCESS STATE --- */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="w-20 h-20 bg-[#C7E36B] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(199,227,107,0.3)]">
                  <Check size={40} strokeWidth={3} className="text-black" />
                </div>
                <h2 className="text-white text-3xl font-bold mb-2">Success!</h2>
                <p className="text-gray-400 mb-8">Account created successfully.</p>
                <div className="flex items-center gap-2 text-[#C7E36B] font-medium text-sm">
                  <Loader2 className="animate-spin" size={16} />
                  Navigating to Login...
                </div>
              </motion.div>
            ) : (
              /* --- SIGNUP FORM STEPS --- */
              <div className="w-full">
                {/* Progress Indicators */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-[#C7E36B]' : 'bg-gray-800'}`} />
                  <span className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step === 2 ? 'bg-[#C7E36B]' : 'bg-gray-800'}`} />
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest ml-auto font-bold">
                    Step {step} of 2
                  </span>
                </div>
                
                <h2 className="text-white text-3xl font-bold mb-8">Sign up</h2>

                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    className="space-y-4"
                  >
                    <InputField 
                      icon={<User size={18} />} 
                      name="name" 
                      placeholder="Enter Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                    />
                    <InputField 
                      icon={<Mail size={18} />} 
                      type="email" 
                      name="email" 
                      placeholder="Enter Email" 
                      value={formData.email} 
                      onChange={handleChange} 
                    />
                    <div className="flex gap-3">
                      <div className="flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-4 text-white text-sm font-medium">
                        +91
                      </div>
                      <InputField 
                        icon={<Phone size={18} />} 
                        name="phone" 
                        placeholder="Enter Phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                      />
                    </div>
                    <button 
                      onClick={handleNextStep} 
                      className="w-full bg-[#C7E36B] hover:bg-[#d4ed83] text-black py-4 rounded-2xl font-bold transition-all transform active:scale-[0.98] mt-4"
                    >
                      CONTINUE
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="relative">
                      <InputField 
                        icon={<Lock size={18} />} 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        placeholder="Create Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>

                    <button 
                      onClick={handleSignUp} 
                      disabled={loading || formData.password.length < 6}
                      className="w-full bg-[#C7E36B] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d4ed83] text-black py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? <Loader2 className="animate-spin" size={20} /> : "COMPLETE SIGNUP"}
                    </button>

                    <button 
                      onClick={() => setStep(1)} 
                      className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-white text-sm transition-colors mt-2"
                    >
                      <ArrowLeft size={14} /> Go back
                    </button>
                  </motion.div>
                )}

                <p className="text-gray-400 text-sm mt-8 text-center">
                  Already have an account?{" "}
                  <button 
                    onClick={onSwitchToLogin} 
                    className="text-blue-400 font-medium hover:underline transition-all"
                  >
                    Click here
                  </button>
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// Reusable Input Component
function InputField({ icon, ...props }) {
  return (
    <div className="relative group flex-1">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#C7E36B] transition-colors">
        {icon}
      </div>
      <input
        {...props}
        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-gray-600 outline-none focus:border-[#C7E36B]/40 focus:bg-white/[0.08] transition-all"
      />
    </div>
  );
}