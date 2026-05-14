// import React, { useState } from 'react';
// import {
//   LayoutDashboard, Zap, Calendar, PlayCircle,
//   Award, Briefcase, Folder, Users, UserPlus, LogOut
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [activeItem, setActiveItem] = useState("Dashboard");

//   const menuItems = [
//     { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
//     { icon: <Zap size={20} />, label: "Bootcamp" },
//     { icon: <Calendar size={20} />, label: "Workshops" },
//     { icon: <PlayCircle size={20} />, label: "Video Courses" },
//     { icon: <Award size={20} />, label: "Certificates" },
//     { icon: <Briefcase size={20} />, label: "Jobs" },
//     { icon: <Folder size={20} />, label: "Resources" },
//     { icon: <Users size={20} />, label: "Community" },
//     { icon: <UserPlus size={20} />, label: "Hire Talent" },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <aside className="w-64 h-screen bg-gradient-to-b from-[#0B0F10] to-[#111617] text-gray-400 flex flex-col px-5 py-6 sticky top-0 border-r border-gray-800">

//       {/* Logo */}
//       <div className="mb-10 px-2 flex items-center gap-2">
//         <div className="w-9 h-9 rounded-xl bg-[#C7E36B] flex items-center justify-center text-black font-extrabold">
//           A
//         </div>
//         <h1 className="text-[#C7E36B] text-2xl font-extrabold tracking-tight">
//           AIFA
//         </h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar">
//         {menuItems.map((item, index) => {
//           const isActive = activeItem === item.label;

//           return (
//             <div
//               key={index}
//               onClick={() => setActiveItem(item.label)}
//               className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group relative ${
//                 isActive
//                   ? "bg-[#1A1F20] text-white shadow-inner"
//                   : "hover:bg-[#1A1F20] hover:text-white"
//               }`}
//             >
//               {/* Active Indicator */}
//               {isActive && (
//                 <span className="absolute left-0 top-0 h-full w-1 bg-[#C7E36B] rounded-r-full"></span>
//               )}

//               <span
//                 className={`transition ${
//                   isActive ? "text-[#C7E36B]" : "group-hover:text-[#C7E36B]"
//                 }`}
//               >
//                 {item.icon}
//               </span>

//               <span className="text-sm font-medium tracking-wide">
//                 {item.label}
//               </span>
//             </div>
//           );
//         })}
//       </nav>

//       {/* Bottom Section */}
//       <div className="mt-6 space-y-4">
//         {/* Upgrade Card */}
//         <div className="bg-[#1A1F20] p-4 rounded-2xl border border-gray-800">
//           <p className="text-xs text-gray-400 mb-2">Upgrade</p>
//           <h4 className="text-sm font-semibold text-white mb-3">
//             Unlock premium features 🚀
//           </h4>
//           <button className="w-full bg-[#C7E36B] text-black text-xs font-bold py-2 rounded-lg hover:opacity-90 transition">
//             Go Premium
//           </button>
//         </div>

//         {/* Logout */}
//         <button
//           onClick={handleLogout}
//           className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition text-gray-500"
//         >
//           <LogOut size={20} />
//           <span className="text-sm font-semibold">Logout</span>
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


import React from "react";
import {
  LayoutDashboard, Zap, Calendar, PlayCircle,
  Award, Briefcase, Folder, Users, UserPlus, LogOut, X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <Zap size={20} />, label: "Bootcamp" },
    { icon: <Calendar size={20} />, label: "Workshops" },
    { icon: <PlayCircle size={20} />, label: "Video Courses" },
    { icon: <Award size={20} />, label: "Certificates" },
    { icon: <Briefcase size={20} />, label: "Jobs" },
    { icon: <Folder size={20} />, label: "Resources" },
    { icon: <Users size={20} />, label: "Community" },
    { icon: <UserPlus size={20} />, label: "Hire Talent" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-50 top-0 left-0 h-full w-64 bg-[#0B0F10] text-gray-400 p-6 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Close button (mobile) */}
        <div className="flex justify-between items-center mb-8 lg:hidden">

          
          
          <button onClick={() => setIsOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* LOGO */}
        <h1 className="text-xl font-bold flex items-center gap-2 mb-4">
          <Link to="/">
            <img
              src="/logos/aifabetalogo.svg"
              alt="logo"
              className="h-[20px] sm:h-[22px] lg:h-6 cursor-pointer"
            />
          </Link>
          {/* BETA BADGE */}
        </h1>


        {/* Menu */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1A1F20] hover:text-white cursor-pointer"
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-8 flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/10 hover:text-red-500 cursor-pointer"
        >
          <LogOut size={20} />
          <span className="text-sm">Logout</span>
        </button>
      </aside>
    </>
  );
};

export default Sidebar;