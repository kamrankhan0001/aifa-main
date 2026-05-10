"use client";

export default function ServicesPage() {
  return (
    <div className="bg-[#0B0F10] text-white">
      {/* 🔥 HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-[#F0F0F0] text-[64px] leading-[70px] font-black font-[Montserrat] text-center mb-12">
          AI Services for Creators, Teams & Businesses
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-[100px]">
            <img
              src="/3Dai/ai3d1.jpg"
              alt="AI 3D"
              className="w-[584px] h-[306px] rounded-[200px] object-cover"
            />
          </div>

          <div>
            <p className="text-[#F0F0F0] text-[18px] leading-[28px] font-bold font-[Montserrat] mb-2">
              FOR TEAMS & ORGANISATIONS
            </p>
            <h2 className="text-[#F0F0F0] text-[48px] leading-[56px] font-black font-[Montserrat] mb-4">
              Corporate <br /> & Institutional <br /> Training
            </h2>
            <p
              className="text-[#DCDCDC] text-[16px] leading-[24px] font-medium font-[Montserrat] mb-6"
              style={{ fontKerning: "none", fontFeatureSettings: "'liga' 0" }}
            >
              Upskill teams with structured AI filmmaking training tailored for
              real-world use.
            </p>

            <button className="flex items-center justify-center gap-[4px] px-[16px] py-[8px] rounded-[4px] bg-[#D0E46A] text-black font-medium">
              Talk to Us <img src="/Arrowleft2.svg" alt="" />
            </button>
          </div>
        </div>
      </section>

      {/* 🔥 SECTION 2 */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#F0F0F0] text-[18px] leading-[28px] font-bold font-[Montserrat] mb-2">
            FOR SCHOOLS & INSTITUTIONS
          </p>
          <h2 className="text-[#F0F0F0] text-[48px] leading-[56px] font-black font-[Montserrat] mb-4">
            Curriculum <br /> Consulting
          </h2>
          <p
            className="text-[#DCDCDC] text-[16px] leading-[24px] font-medium font-[Montserrat] mb-6"
            style={{ fontKerning: "none", fontFeatureSettings: "'liga' 0" }}
          >
            Design industry-relevant AI courses and learning programs
            tailor-made to meet your student needs.
          </p>

          <button className="flex items-center justify-center gap-[4px] px-[16px] py-[8px] rounded-[4px] bg-[#D0E46A] text-black font-medium">
            Talk to Us <img src="/Arrowleft2.svg" alt="" />
          </button>
        </div>

        <div className="overflow-hidden rounded-[100px]">
          <img
            src="/3Dai/ai3d2.jpg"
            className="w-[584px] h-[306px] rounded-[200px] object-cover"
          />
        </div>
      </section>

      {/* 🔥 SECTION 3 */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-[100px]">
          <img
            src="/3Dai/ai3d3.jpg"
            className="w-[584px] h-[306px] rounded-[200px] object-cover"
          />
        </div>

        <div>
          <p className="text-[#F0F0F0] text-[18px] leading-[28px] font-bold font-[Montserrat] mb-2">
            FOR CREATORS & TEAMS
          </p>
          <h2 className="text-[#F0F0F0] text-[48px] leading-[56px] font-black font-[Montserrat] mb-4">
            Production <br />
            Support
          </h2>
          <p
            className="text-[#DCDCDC] text-[16px] leading-[24px] font-medium font-[Montserrat] mb-6"
            style={{ fontKerning: "none", fontFeatureSettings: "'liga' 0" }}
          >
            Get expert support to plan, create, and execute high-quality AI
            video projects.
          </p>

          <button className="flex items-center justify-center gap-[4px] px-[16px] py-[8px] rounded-[4px] bg-[#D0E46A] text-black font-medium">
            Talk to Us <img src="/Arrowleft2.svg" alt="" />
          </button>
        </div>
      </section>

      {/* 🔥 SECTION 4 */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#F0F0F0] text-[18px] leading-[28px] font-bold font-[Montserrat] mb-2">
            FOR BRANDS & BUSINESSES
          </p>
          <h2 className="text-[#F0F0F0] text-[48px] leading-[56px] font-black font-[Montserrat] mb-4">
            AI Content <br /> Production
          </h2>
          <p
            className="text-[#DCDCDC] text-[16px] leading-[24px] font-medium font-[Montserrat] mb-6"
            style={{ fontKerning: "none", fontFeatureSettings: "'liga' 0" }}
          >
            Get expert support to plan, create, and execute high-quality AI
            video projects.
          </p>

          <button className="flex items-center justify-center gap-[4px] px-[16px] py-[8px] rounded-[4px] bg-[#D0E46A] text-black font-medium">
            Talk to Us <img src="/Arrowleft2.svg" alt="" />
          </button>
        </div>

        <div className="overflow-hidden rounded-[100px]">
          <img
            src="/3Dai/ai3d4.png"
            className="w-[584px] h-[306px] rounded-[200px] object-cover"
          />
        </div>
      </section>

      {/* 🔥 CONTACT FORM */}
      <section className="bg-[#5E6639] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* HEADING */}
          <h2 className="text-[#F0F0F0] text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[48px] md:leading-[56px] font-bold font-[Montserrat] text-center mb-12">
            WE CAN HELP YOU!
          </h2>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* FIRST NAME */}
            <div>
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full h-[48px] px-4 rounded-[6px] bg-[#DCE8A3] outline-none 
          focus:ring-2 focus:ring-white/40 transition"
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                Last Name (Required)
              </label>
              <input
                type="text"
                className="w-full h-[48px] px-4 rounded-[6px] bg-[#DCE8A3] outline-none 
          focus:ring-2 focus:ring-white/40 transition"
              />
            </div>

            {/* EMAIL */}
            <div className="md:col-span-2">
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full h-[48px] px-4 rounded-[6px] bg-[#DCE8A3] outline-none 
          focus:ring-2 focus:ring-white/40 transition"
              />
            </div>

            {/* PHONE */}
            <div className="md:col-span-2">
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                Phone
              </label>
              <input
                type="text"
                className="w-full h-[48px] px-4 rounded-[6px] bg-[#DCE8A3] outline-none 
          focus:ring-2 focus:ring-white/40 transition"
              />
            </div>

            {/* SERVICES */}
            <div className="md:col-span-2 relative">
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                Services
              </label>
              <select
                className="w-full h-[48px] px-4 pr-10 rounded-[6px] bg-[#DCE8A3] outline-none appearance-none 
        focus:ring-2 focus:ring-white/40 transition"
              >
                <option>Select Service</option>
                <option>AI Film Training</option>
                <option>Corporate Training</option>
              </select>

              {/* Custom Arrow */}
              <span className="absolute right-4 top-[42px] text-black text-sm pointer-events-none">
                <img src="/Vectorarrow.svg" alt="" />
              </span>
            </div>

            {/* COUNTRY */}
            <div className="md:col-span-2 relative">
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                Country
              </label>
              <select
                className="w-full h-[48px] px-4 pr-10 rounded-[6px] bg-[#DCE8A3] outline-none appearance-none 
        focus:ring-2 focus:ring-white/40 transition"
              >
                <option>Select Country</option>
                <option>India</option>
                <option>USA</option>
              </select>

              {/* Custom Arrow */}
              <span className="absolute right-4 top-[42px] text-black text-sm pointer-events-none">
                <img src="/Vectorarrow.svg" alt="" />
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="mt-10 w-full h-[44px] rounded-[4px] bg-[#EDEDED] text-black font-medium 
    hover:bg-white hover:scale-[1.02] transition"
          >
            NEXT
          </button>
        </div>
      </section>
    </div>
  );
}
