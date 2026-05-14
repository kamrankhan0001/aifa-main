// import React from 'react';
// import Sidebar from './Sidebar';
// import { Search, Bell } from 'lucide-react';

// const UserDashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-[#F3F4F6]">
//       {/* Sidebar - Fixed width */}
//       <Sidebar />

//       {/* Main Content Area */}
//       <div className="flex-1">
//         {/* Top Header */}
//         <header className="bg-white px-8 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
//           <div className="flex items-center gap-2">
//             <span className="text-gray-500 font-medium">Welcome back,</span>
//             <span className="text-gray-900 font-bold">Md Kamran Khan</span>
//           </div>
          
//           <div className="flex items-center gap-6">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//               <input 
//                 type="text" 
//                 placeholder="Search courses..." 
//                 className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-purple-500 transition-all outline-none"
//               />
//             </div>
//             <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
//               <Bell size={20} />
//               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
//             </button>
//             <img 
//               src="https://via.placeholder.com/40" 
//               alt="Profile" 
//               className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer" 
//             />
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="p-8">
//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//             <StatCard icon="📚" count="12" label="Courses Enrolled" color="purple" />
//             <StatCard icon="🎓" count="04" label="Certificates Earned" color="green" />
//             <StatCard icon="🗓️" count="08" label="Workshops Attended" color="orange" />
//           </div>

//           {/* Continue Learning Section */}
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-bold text-[#1F2937]">Continue Learning</h3>
//             <button className="text-purple-600 font-semibold text-sm hover:underline">View My Courses →</button>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <CourseCard 
//               title="Mastering Modern UI" 
//               category="UI Design Basics" 
//               progress={60} 
//               lessons="3/10" 
//               img="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80" 
//             />
//             <CourseCard 
//               title="AI Filmmaking: Future" 
//               category="Bootcamp" 
//               progress={25} 
//               lessons="2/8" 
//               img="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80" 
//             />
//             <CourseCard 
//               title="Advanced React Patterns" 
//               category="Web Development" 
//               progress={80} 
//               lessons="8/10" 
//               img="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80" 
//             />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// // Internal Small Components
// const StatCard = ({ icon, count, label, color }) => (
//   <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 transition-transform hover:scale-[1.02]">
//     <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl
//       ${color === 'purple' ? 'bg-purple-50 text-purple-600' : ''}
//       ${color === 'green' ? 'bg-green-50 text-green-600' : ''}
//       ${color === 'orange' ? 'bg-orange-50 text-orange-600' : ''}
//     `}>
//       {icon}
//     </div>
//     <div>
//       <p className="text-3xl font-black text-gray-800">{count}</p>
//       <p className="text-sm text-gray-500 font-medium">{label}</p>
//     </div>
//   </div>
// );

// const CourseCard = ({ title, category, progress, lessons, img }) => (
//   <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
//     <div className="h-44 relative">
//       <img src={img} alt={title} className="w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
//         <span className="text-[10px] text-white/80 uppercase tracking-widest font-bold mb-1">{category}</span>
//         <h4 className="text-white font-bold text-lg">{title}</h4>
//       </div>
//     </div>
//     <div className="p-6">
//       <div className="flex justify-between text-xs font-semibold text-gray-400 mb-2">
//         <span>{progress}% completed</span>
//         <span>{lessons} lessons</span>
//       </div>
//       <div className="w-full bg-gray-100 h-2.5 rounded-full mb-6 overflow-hidden">
//         <div className="bg-purple-600 h-full rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
//       </div>
//       <button className="w-full bg-purple-600 text-white py-3.5 rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
//         Continue
//       </button>
//     </div>
//   </div>
// );

// export default UserDashboard;

// import React from 'react';
// import Sidebar from './Sidebar';
// import { Search, ChevronRight, Zap } from 'lucide-react';

// const UserDashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#eef1f5] font-sans">
//       <Sidebar />

//       <main className="flex-1 px-6 py-8 lg:px-12">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
//           <div>
//             <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
//               Student Portal
//             </p>
//             <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
//               Welcome back, Kamran 👋
//             </h1>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="relative group">
//               <Search
//                 size={18}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition"
//               />
//               <input
//                 type="text"
//                 placeholder="Search courses..."
//                 className="pl-12 pr-4 py-3 w-64 bg-white border border-gray-200 rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition"
//               />
//             </div>

//             <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-full border shadow-sm">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="Kamran"
//                 className="w-9 h-9 rounded-full object-cover"
//               />
//               <span className="hidden lg:block text-sm font-semibold text-gray-700">
//                 Kamran Khan
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Banner */}
//         <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 mb-10 shadow-lg">
//           <div className="flex items-center gap-3">
//             <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
//             <p className="font-semibold text-sm tracking-wide">
//               NEXT LIVE CLASS:
//               <span className="ml-1 opacity-80 font-normal">
//                 AI Filmmaking Bootcamp
//               </span>
//             </p>
//           </div>

//           <div className="flex items-center gap-5">
//             <p className="text-sm opacity-90">4:30 PM IST</p>
//             <button className="bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[#C7E36B] hover:text-black transition">
//               Join
//             </button>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
//           <StatBox icon="📘" count="12" label="Courses" />
//           <StatBox icon="🏆" count="04" label="Certificates" />
//           <StatBox icon="🔥" count="08" label="Workshops" />
//         </div>

//         {/* Section */}
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-2xl font-bold text-gray-900">
//             Continue Learning
//           </h3>
//           <button className="flex items-center gap-1 text-purple-600 font-semibold hover:gap-2 transition">
//             View All <ChevronRight size={18} />
//           </button>
//         </div>

//         {/* Courses */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <CourseCard
//             title="Mastering Modern UI"
//             tag="Design"
//             progress={65}
//             lessons="3/10"
//             color="bg-purple-600"
//           />
//           <CourseCard
//             title="AI Filmmaking"
//             tag="AI"
//             progress={30}
//             lessons="2/8"
//             color="bg-blue-600"
//           />
//           <CourseCard
//             title="Advanced React"
//             tag="Development"
//             progress={85}
//             lessons="8/10"
//             color="bg-indigo-600"
//           />
//         </div>
//       </main>
//     </div>
//   );
// };

// const StatBox = ({ icon, count, label }) => (
//   <div className="bg-white p-6 rounded-2xl border text-center shadow-sm hover:shadow-md transition">
//     <div className="text-3xl mb-2">{icon}</div>
//     <h4 className="text-3xl font-bold text-gray-900">{count}</h4>
//     <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
//       {label}
//     </p>
//   </div>
// );

// const CourseCard = ({ title, tag, progress, lessons, color }) => (
//   <div className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition group">
//     <div className={`h-40 ${color} p-6 flex flex-col justify-end relative`}>
//       <Zap
//         size={36}
//         className="absolute top-4 right-4 text-white/20"
//       />
//       <p className="text-white/70 text-[10px] uppercase tracking-wider font-bold mb-1">
//         {tag}
//       </p>
//       <h4 className="text-white text-lg font-semibold">{title}</h4>
//     </div>

//     <div className="p-6">
//       <div className="flex justify-between text-xs text-gray-400 font-semibold mb-2">
//         <span>{progress}%</span>
//         <span>{lessons}</span>
//       </div>

//       <div className="w-full bg-gray-100 h-2 rounded-full mb-5 overflow-hidden">
//         <div
//           className={`${color} h-full transition-all duration-500`}
//           style={{ width: `${progress}%` }}
//         />
//       </div>

//       <button
//         className={`w-full ${color} text-white py-3 rounded-xl font-semibold text-sm active:scale-95 transition`}
//       >
//         Continue
//       </button>
//     </div>
//   </div>
// );

// export default UserDashboard;

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu, Search } from "lucide-react";

const UserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F6FA]">


      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />


      {/* Main */}
      <main className="flex-1">

        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white lg:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={22} />
          </button>
          <h1 className="text-sm font-semibold">Dashboard</h1>
          <div></div>
        </div>

           {/* Highlight Banner / Next Class */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 p-2 text-white flex flex-col md:flex-row items-center justify-between mb-0 shadow-xl shadow-purple-200">
           <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="font-bold tracking-wide">NEXT LIVE CLASS: <span className="font-normal opacity-80">AI Filmmaking Bootcamp</span></p>
           </div>
           <div className="flex items-center gap-6">
              <p className="text-sm font-medium opacity-90">Starts at 4:30 PM IST</p>
              <button className="bg-white text-purple-700 px-4 py-1.5 rounded-xl font-bold text-sm hover:bg-[#C7E36B] hover:text-black transition-all">Join Session</button>
           </div>
        </div>

        <div className="p-6 lg:p-10">
          
          


          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, Kamran 👋
            </h1>



            <div className="flex items-center gap-4">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-9 pr-3 py-2 text-sm border rounded-lg outline-none bg-white"
                />
              </div>
              <img
                src="https://via.placeholder.com/35"
                alt="user"
                className="w-9 h-9 rounded-full"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            <StatCard icon="📘" title="Courses Enrolled" value="12" />
            
            <StatCard icon="🏆" title="Certificates Earned" value="04" />
            <StatCard icon="📅" title="Workshops Attended" value="08" />
          </div>
          


          {/* Continue Learning */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Continue Learning
            </h2>
            <button className="text-sm text-purple-600 font-medium">
              View My Courses
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
            <CourseCard
              title="UI Design Basics: Master the Craft"
              progress={60}
              lessons="3/10"
              img="https://images.unsplash.com/photo-1559028012-481c04fa702d"
            />
            <CourseCard
              title="AI Filmmaking: Future of Video"
              progress={25}
              lessons="2/8"
              img="https://images.unsplash.com/photo-1581091870622-3f89e1d7c5a3"
            />
            <CourseCard
              title="Advanced React Patterns"
              progress={80}
              lessons="8/10"
              img="https://images.unsplash.com/photo-1587620962725-abab7fe55159"
            />
          </div>

          {/* Upcoming Section */}
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Upcoming Bootcamps & Workshops
          </h2>

          <div className="space-y-4">
            <UpcomingCard
              title="UX Research: Deep Dive into User Interviews"
              date="Aug 24, 2024"
            />
            <UpcomingCard
              title="Full-Stack Career Accelerator: Intensive"
              date="Sept 10, 2024"
            />
          </div>

        </div>
      </main>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-5 rounded-xl border shadow-sm flex items-center gap-4 hover:shadow-md transition">
    
    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
      {icon}
    </div>

    <div>
      <h3 className="text-lg font-bold text-gray-900">{value}</h3>
      <p className="text-sm text-gray-500">{title}</p>
    </div>

  </div>
);

/* Course Card */
const CourseCard = ({ title, progress, lessons, img }) => (
  <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
    <img src={img} alt="" className="h-40 w-full object-cover" />

    <div className="p-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">
        {title}
      </h3>

      <div className="flex justify-between text-xs text-gray-400 mb-2">
        <span>{progress}% completed</span>
        <span>{lessons}</span>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
        <div
          className="bg-purple-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
        Continue
      </button>
    </div>
  </div>
);

/* Upcoming Card */
const UpcomingCard = ({ title, date }) => (
  <div className="bg-white border rounded-xl p-4 flex justify-between items-center shadow-sm">
    <div>
      <p className="text-sm font-semibold text-gray-800">{title}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
    <button className="text-sm text-purple-600 font-medium">
      View Details
    </button>
  </div>
);

export default UserDashboard;