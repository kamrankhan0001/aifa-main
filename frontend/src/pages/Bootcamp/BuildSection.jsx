// "use client";

// const data = [
//   {
//     title: "AI SHORT FILM",
//     desc: "Create a complete story-driven video with scenes and visuals.",
//     img: "/bootcamp1.jpg",
//   },
//   {
//     title: "PRODUCT AD FILM",
//     desc: "Produce a high-quality commercial-style video for products or services.",
//     img: "/bootcamp6.jpg",
//   },
//   {
//     title: "SOCIAL MEDIA REELS",
//     desc: "Make scroll-stopping content optimized for Instagram, YouTube, and TikTok.",
//     img: "/bootcamp3.jpg",
//   },
//   {
//     title: "CINEMATIC POSTERS",
//     desc: "Design high-impact visuals for storytelling and marketing.",
//     img: "/bootcamp4.jpg",
//   },
//   {
//     title: "PORTFOLIO-READY PROJECTS",
//     desc: "Build a professional portfolio to showcase your work or get clients.",
//     img: "/bootcamp5.jpg",
//   },
// ];

// export default function BuildSection() {
//   return (
//     <section className="w-full bg-[#070B14] flex justify-center">
//       {/* FIGMA CONTAINER */}
//       <div
//         className="
//         w-full 
//         max-w-[1180px]

//         px-[16px] sm:px-[40px] lg:px-[93px]
//         py-[40px] sm:py-[64px]

//         flex flex-col gap-[48px] sm:gap-[64px]
//       "
//       >
//         {/* HEADER */}
//         <div className="text-center flex flex-col gap-[12px]">
//           <h2
//             className="
//             text-[#F0F0F0]
//             font-black

//             text-[28px]
//             sm:text-[40px]
//             md:text-[56px]
//             lg:text-[64px]

//             leading-[34px]
//             sm:leading-[46px]
//             md:leading-[62px]
//             lg:leading-[70px]
//           "
//           >
//             WHAT YOU WILL BUILD
//           </h2>

//           <p
//             className="
//             text-[#DCDCDC]
//             text-[14px] sm:text-[16px]
//             leading-[24px] sm:leading-[28px]
//             max-w-[720px]
//             mx-auto
//           "
//           >
//             Build real, portfolio-ready projects as you learn films, ads, and
//             social content created step by step.
//           </p>
//         </div>

//         {/* ZIG-ZAG LIST */}
//         <div className="flex flex-col gap-[40px] sm:gap-[64px]">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className={`
//                 flex flex-col
//                 lg:flex-row
//                 items-center
//                 gap-[24px] sm:gap-[40px]

//                 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
//               `}
//             >
//               {/* TEXT */}
//               <div className="flex-1 text-center lg:text-left">
//                 <p
//                   className="
//                   text-[#F0F0F0]
//                   text-[14px] sm:text-[18px]
//                   leading-[24px] sm:leading-[28px]
//                   font-bold
//                   mb-2
//                 "
//                 >
//                   BEGINNER
//                 </p>

//                 <h3
//                   className="
//                   text-[#F0F0F0]
//                   font-black

//                   text-[22px]
//                   sm:text-[28px]
//                   md:text-[32px]

//                   leading-[28px]
//                   sm:leading-[36px]
//                   md:leading-[40px]

//                   mb-3
//                 "
//                 >
//                   {item.title}
//                 </h3>

//                 <p
//                   className="
//                   text-[#DCDCDC]
//                   text-[14px] sm:text-[16px]
//                   leading-[22px] sm:leading-[24px]
//                   max-w-[420px]
//                   mx-auto lg:mx-0
//                 "
//                 >
//                   {item.desc}
//                 </p>
//               </div>

//               {/* IMAGE */}
//               <div className="flex-1 w-full">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="
//                     w-full
//                     h-[200px]
//                     sm:h-[260px]
//                     md:h-[300px]

//                     rounded-[120px] sm:rounded-[160px] lg:rounded-[200px]
//                     object-cover
//                   "
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

const data = [
  {
    title: "AI SHORT FILM",
    desc: "Create a complete story-driven video with scenes and visuals.",
    img: "/bootcamp1.jpg",
  },
  {
    title: "PRODUCT AD FILM",
    desc: "Produce a high-quality commercial-style video for products or services.",
    img: "/bootcamp6.jpg",
  },
  {
    title: "SOCIAL MEDIA REELS",
    desc: "Make scroll-stopping content optimized for Instagram, YouTube, and TikTok.",
    img: "/bootcamp3.jpg",
  },
  {
    title: "CINEMATIC POSTERS",
    desc: "Design high-impact visuals for storytelling and marketing.",
    img: "/bootcamp4.jpg",
  },
  {
    title: "PORTFOLIO-READY PROJECTS",
    desc: "Build a professional portfolio to showcase your work or get clients.",
    img: "/bootcamp5.jpg",
  },
];

export default function BuildSection() {
  return (
    <section
      className="
        w-full
        bg-[#070B14]

        flex
        justify-center
      "
    >
      {/* FIGMA EXACT CONTAINER */}
      <div
        className="
          w-full
          max-w-[1366px]

          px-[93px]
          py-[64px]

          flex
          flex-col

          gap-[64px]

          max-sm:px-[16px]
          max-sm:py-[40px]
          max-sm:gap-[40px]
        "
      >
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            items-center

            gap-[16px]

            max-sm:gap-[12px]
          "
        >
          <h2
            className="
              text-[#F0F0F0]

              text-center
              font-black

              text-[64px]
              leading-[70px]

              tracking-[-1.5px]

              max-sm:text-[34px]
              max-sm:leading-[42px]
              max-sm:tracking-[-1px]
            "
          >
            WHAT YOU WILL BUILD
          </h2>

          <p
            className="
              max-w-[760px]

              text-center

              text-[#D0D0D0]

              text-[18px]
              leading-[30px]

              max-sm:text-[15px]
              max-sm:leading-[26px]
            "
          >
            Build real, portfolio-ready projects as you learn films, ads, and
            social content created step by step.
          </p>
        </div>

        {/* CONTENT */}
        <div
          className="
            flex
            flex-col

            gap-[72px]

            max-sm:gap-[48px]
          "
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`
                flex
                items-center
                justify-between

                gap-[80px]

                max-sm:flex-col
                max-sm:gap-[28px]

                ${index % 2 !== 0 ? "flex-row-reverse" : "flex-row"}
              `}
            >
              {/* TEXT SIDE */}
              <div
                className="
                  flex-1

                  flex
                  flex-col

                  items-start

                  gap-[14px]

                  max-sm:w-full
                  max-sm:gap-[12px]
                "
              >
                {/* TAG */}
                <div
                  className="
                    flex
                    items-center
                    justify-center

                    px-[18px]
                    py-[8px]

                    rounded-full

                    bg-[#D0E46A]/10

                    border
                    border-[#D0E46A]/20

                    max-sm:px-[14px]
                    max-sm:py-[6px]
                  "
                >
                  <p
                    className="
                      text-[#D0E46A]

                      text-[14px]
                      font-bold

                      tracking-[1px]

                      max-sm:text-[12px]
                    "
                  >
                    BEGINNER
                  </p>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-[#F0F0F0]

                    font-black

                    text-[48px]
                    leading-[56px]

                    tracking-[-1px]

                    max-w-[520px]

                    max-sm:text-[30px]
                    max-sm:leading-[38px]
                    max-sm:max-w-full
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    max-w-[480px]

                    text-[#CFCFCF]

                    text-[18px]
                    leading-[30px]

                    max-sm:text-[15px]
                    max-sm:leading-[26px]
                    max-sm:max-w-full
                  "
                >
                  {item.desc}
                </p>
              </div>

              {/* IMAGE SIDE */}
              <div
                className="
                  flex-1

                  flex
                  justify-center

                  max-sm:w-full
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full
                    max-w-[520px]

                    h-[320px]

                    object-cover

                    rounded-[200px]

                    border
                    border-[#2E3133]

                    shadow-[0_20px_60px_rgba(0,0,0,0.35)]

                    transition-all
                    duration-500

                    hover:scale-[1.02]

                    max-sm:h-[220px]
                    max-sm:rounded-[120px]
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
