import { motion } from "framer-motion";
import { scrollTo } from "../utils/scrollTo";

const MAROON = "#7d1a3a";
const CREAM = "#f5e8d8";
const WHITE = "#FFFFFF";

export default function HeroSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <section
      className="w-full min-h-screen flex flex-col overflow-hidden pt-[86px] md:pt-[92px]"
      style={{ background: WHITE, fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Hero Main Section */}
      <div className="flex-1 flex items-center justify-center px-5 md:px-10 py-8 md:py-10">
        <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-10">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 md:order-1 flex justify-center"
          >
            <div
              className="w-full max-w-[330px] sm:max-w-[360px] md:max-w-[360px] h-[400px] sm:h-[430px] md:h-[560px] overflow-hidden shadow-lg"
              style={{
                borderRadius: "220px 220px 24px 24px",
                background: "#e8cfc0",
              }}
            >
              <img
                src="/assets/images/photo/IMG_3051.JPG.jpeg"
                alt="Belleza Beauty School Training"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="order-2 md:order-2 flex flex-col items-center text-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] tracking-[3px] uppercase mb-3"
              style={{
                color: "#b06070",
                fontWeight: 500,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Empowering Your Passion
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-light uppercase leading-[1.15] tracking-[2px] mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: MAROON,
                fontSize: "clamp(30px, 5vw, 58px)",
              }}
            >
              Become a Certified
              <br />
              <em
                style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "#5a1228",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Beauty Professional
              </em>
              <br />
              in Bazpur
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-md text-[13px] md:text-[14px] tracking-[0.4px] leading-[1.9] font-light mb-6"
              style={{
                color: "#9a6a6a",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Learn professional{" "}
              <span style={{ fontWeight: 600, color: MAROON }}>
                Makeup, Hair, Nail, Skin &amp; Cosmetology
              </span>{" "}
              with practical training, live model practice &amp; expert guidance.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-3 mb-5"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-[11px] tracking-[2px] uppercase font-medium"
                style={{
                  background: MAROON,
                  color: CREAM,
                  fontFamily: "'Montserrat', sans-serif",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Book Free Counselling
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: CREAM, color: MAROON }}
                >
                  →
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => (window.location.href = "tel:+919012360088")}
                className="px-6 py-3 rounded-full text-[11px] tracking-[2px] uppercase font-medium"
                style={{
                  border: `1.5px solid ${MAROON}`,
                  color: MAROON,
                  background: "transparent",
                  fontFamily: "'Montserrat', sans-serif",
                  cursor: "pointer",
                }}
              >
                Call Now
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              {["Expert Guidance", "Flexible Batches", "Career Support"].map(
                (f) => (
                  <span
                    key={f}
                    className="flex items-center gap-2 text-[11px] tracking-[1px]"
                    style={{
                      color: MAROON,
                      fontWeight: 500,
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <span
                      className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                      style={{ background: MAROON }}
                    />
                    {f}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-3 md:order-3 flex justify-center"
          >
            <div
              className="w-full max-w-[330px] sm:max-w-[360px] md:max-w-[360px] h-[400px] sm:h-[430px] md:h-[560px] overflow-hidden shadow-lg"
              style={{
                borderRadius: "220px 220px 24px 24px",
                background: "#e8cfc0",
              }}
            >
              <img
                src="/assets/images/photo/IMG_3055.JPG.jpeg"
                alt="Belleza Beauty School Student"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       className="w-full flex flex-col justify-between items-start h-screen bg-light p-7 overflow-hidden"
//       style={{
//         backgroundImage: "url('/assets/images/bg-img.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute right-0 top-0 h-full w-3/4 bg-linear-to-l from-black/30 to-transparent  backdrop-blur-sm"></div>
//       </div>
//       {/* Logo */}
//       {/* <motion.div>
//         <img
//           src="/assets/images/logos/belleza_logo.svg"
//           alt="Belleza Logo"
//           className="w-25  object-contain"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           whileHover={{ scale: 1.05 }}
//         />
//       </motion.div> */}

//       {/* Content */}
//       <motion.div
//         className="w-full h-full flex z-10 flex-col justify-center items-end gap-2 sm:mt-10"
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         <motion.h1
//           variants={fadeUp}
//           className="w-full md:w-1/2 font-extrabold text-4xl md:text-6xl text-right text-accent leading-tight tracking-tighter"
//         >
//           Become a Certified <br /> Beauty Professional <br /> in Dehradun
//         </motion.h1>

//         <motion.p
//           variants={fadeUp}
//           className="text-right text-md max-w-lg sm:max-w-xl leading-tight tracking-tight text-accent font-semibold"
//         >
//           Learn professional{" "}
//           <span className="font-bold normal">
//             Makeup, Hair, Nail, Skin & Cosmetology
//           </span>{" "}
//           with practical training, live model practice, expert guidance, and
//           career support at Belleza Beauty School Dehradun.
//         </motion.p>

//         <motion.p
//           variants={fadeUp}
//           className="text-right text-sm max-w-xl text-accent font-semibold"
//         >
//           Start your beauty career with international-standard training and
//           professional certification.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           variants={fadeUp}
//           className="flex flex-row items-center justify-center gap-2 mt-4"
//         >
//           <motion.button
//             className="px-5 sm:px-10 py-3 bg-primary rounded-full text-sm font-semibold tracking-tight capitalize text-light shadow-md"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Book Free Counselling
//           </motion.button>
//           <motion.button
//             className="px-10 py-3 bg-primary rounded-full text-sm font-semibold tracking-tight capitalize text-light shadow-md"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Call Now
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {/* Footer Info */}
//     </section>
//   );
// }
