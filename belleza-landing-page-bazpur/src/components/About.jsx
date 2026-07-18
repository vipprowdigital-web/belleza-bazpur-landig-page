import { motion } from "framer-motion";

const MAROON = "#7d1a3a";

export default function About() {
  return (
    <section
      id="about"
      className="w-full overflow-hidden"
      style={{ fontFamily: "'Jost', sans-serif", background: "#ffffff" }}
    >
      {/* ── Top Grid ── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: "760px", alignItems: "stretch" }}
      >
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: "relative",
            overflow: "visible",
            minHeight: "520px",
            height: "100%",
          }}
        >
          {/* Diagonal clip — only on image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              background: "#e8d0c0",
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/images/side/5.png"
              alt="Belleza Beauty School Training"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 20%",
                display: "block",
              }}
            />
          </div>

          {/* Floating badge — outside clip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              position: "absolute",
              bottom: "32px",
              right: "-10px",
              background: "#ffffff",
              border: "1px solid #f0e4d8",
              borderRadius: "14px",
              padding: "18px 24px",
              width: "165px",
              zIndex: 10,
              boxShadow: "0 4px 20px rgba(125,26,58,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "'Montserrat', serif",
                fontSize: "34px",
                fontWeight: 700,
                color: MAROON,
                lineHeight: 1,
              }}
            >
              100%
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "#b89090",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginTop: "8px",
                lineHeight: 1.6,
              }}
            >
              Practical
              <br />
              Training
            </p>
          </motion.div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "22px",
            padding: "56px 52px 56px 60px",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#b06070",
              fontWeight: 500,
            }}
          >
            Empowering Your Passion
          </p>

          {/* Divider */}
          <div
            style={{
              width: "40px",
              height: "2px",
              background: MAROON,
              borderRadius: "2px",
            }}
          />

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Montserrat', serif",
              fontSize: "clamp(30px, 3.2vw, 44px)",
              fontWeight: 700,
              color: MAROON,
              lineHeight: 1.2,
              letterSpacing: "-0.3px",
            }}
          >
            About{" "}
            <em style={{ fontStyle: "normal", color: "#5a1228" }}>
              Belleza Beauty School
            </em>{" "}
            Bazpur
          </h2>

          {/* Paragraphs */}
          <p
            style={{
              fontSize: "14px",
              color: "#888888",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            Belleza Beauty School Bazpur is a{" "}
            <strong
              style={{ color: MAROON, fontWeight: 500, fontStyle: "normal" }}
            >
              premium beauty academy
            </strong>{" "}
            designed for students who want to build a successful career in the
            beauty industry.
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#888888",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            We provide professional training in makeup, hair, nails, skin,
            beauty and cosmetology through a practical, career-focused learning
            approach.
          </p>

          {/* Stat Cards */}
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {[
              { icon: "★", title: "Advanced Level", sub: "From Basic to Pro" },
              { icon: "✦", title: "Live Models", sub: "Hands-on Practice" },
            ].map(({ icon, title, sub }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="w-50 border border-[#f0e4d8] rounded-xl bg-white p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "#f5e8d8",
                      color: MAROON,
                      fontSize: "14px",
                    }}
                  >
                    {icon}
                  </div>

                  <p
                    className="m-0 leading-tight"
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: MAROON,
                    }}
                  >
                    {title}
                  </p>
                </div>

                <p
                  className="m-0 leading-relaxed"
                  style={{
                    fontSize: "12px",
                    color: "#b89090",
                    paddingLeft: "48px",
                  }}
                >
                  {sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Quote Band ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          background: MAROON,
          padding: "64px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            marginLeft: "clamp(16px, 8vw, 80px)",
            fontFamily: "'Montserrat', serif",
            fontSize: "90px",
            color: "#f5e8d8",
            lineHeight: "0.6",
            opacity: 0.45,
          }}
        >
          &ldquo;
        </div>

        <p
          style={{
            fontFamily: "'Montserrat', serif",
            fontSize: "clamp(22px, 3vw, 34px)",
            color: "#f5e8d8",
            lineHeight: 1.65,
            fontWeight: 400,
            maxWidth: "700px",
          }}
        >
          At Belleza, students don't just learn techniques —<br />
          they learn how to work confidently in the{" "}
          <em style={{ fontStyle: "normal", color: "#f0c8a0" }}>
            real beauty industry.
          </em>
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "8px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#f0c8a0",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#f0c8a0",
              fontWeight: 500,
            }}
          >
            Empowering Professionals
          </span>
        </div>
      </motion.div>
    </section>
  );
}
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section
//       className="w-full py-20 px-6 bg-light flex flex-col justify-center items-center"
//       id="about"
//     >
//       <section className="w-full">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Side: Visual Element */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//               className="relative"
//             >
//               {/* Decorative background element */}
//               <div className="absolute -top-4 -left-4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src="/"
//                   alt="Belleza Beauty School Training"
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Floating Badge */}
//                 <div className="absolute bottom-6 right-6 bg-primary p-4 rounded-xl shadow-lg">
//                   <p className="text-accent text-2xl font-bold">100%</p>
//                   <p className="text-light text-[10px] uppercase tracking-widest font-semibold">
//                     Practical Training
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Side: Content */}
//             <div className="flex flex-col space-y-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//               >
//                 <h4 className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-2">
//                   Empowering Your Passion
//                 </h4>
//                 <h2 className="font-bold tracking-tighter text-primary text-4xl md:text-5xl leading-tight">
//                   About{" "}
//                   <span className="text-secondary normal">
//                     Belleza Beauty School
//                   </span>{" "}
//                  Bazpur
//                 </h2>
//               </motion.div>

//               <motion.div
//                 className="space-y-4 text-secondary leading-tight text-md"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//               >
//                 <p>
//                   Belleza Beauty School Bazpur is a{" "}
//                   <span className="text-primary font-semibold normal">
//                     premium beauty academy
//                   </span>{" "}
//                   designed for students who want to build a successful career in
//                   the beauty industry.
//                 </p>
//                 <p>
//                   We provide professional training in makeup, hair, nails, skin,
//                   beauty and cosmetology through a practical, career-focused
//                   learning approach.
//                 </p>
//               </motion.div>

//               {/* Feature Grid */}
//               <motion.div
//                 className="grid grid-cols-2 gap-4 pt-4"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//               >
//                 <div className="flex flex-col border-l-4 border-primary pl-4">
//                   <span className="text-primary font-bold tracking-tight">
//                     Advanced Level
//                   </span>
//                   <span className="text-sm text-primary font-semibold tracking-tight">
//                     From Basic to Pro
//                   </span>
//                 </div>
//                 <div className="flex flex-col border-l-4 border-primary pl-4">
//                   <span className="text-primary font-bold tracking-tight">
//                     Live Models
//                   </span>
//                   <span className="text-sm text-primary font-semibold tracking-tight">
//                     Hands-on Practice
//                   </span>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <motion.div
//         className="text-center mt-30 px-4"
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Stylized Quote Icon */}
//         <div className="font-serif text-8xl leading-none text-secondary">
//           &ldquo;
//         </div>

//         <p className="font-bold text-3xl md:text-4xl leading-tighter text-primary max-w-4xl mx-auto mb-10 tracking-tighter">
//           At Belleza, students don’t just learn techniques —
//           <br />
//           they learn how to work confidently in the{" "}
//           <span className="text-secondary font-serif normal">
//             {" "}
//             real beauty industry.
//           </span>
//         </p>

//         {/* Pulsing Status Indicator */}
//         <div className="flex items-center justify-center gap-3">
//           <span
//             className="inline-block w-2.5 h-2.5 rounded-full bg-secondary"
//             style={{ boxShadow: "0 0 15px rgba(var(--accent-rgb), 0.6)" }}
//           />
//           <span className="text-secondary uppercase tracking-[0.2em] text-[10px] font-bold">
//             Empowering Professionals
//           </span>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
