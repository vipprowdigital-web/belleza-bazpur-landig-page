
import { motion } from "framer-motion";
import { BookOpen, PenTool, Zap, Users, Trophy, ArrowRight } from "lucide-react";

const MAROON = "#7d1a3a";
const CREAM = "#f5e8d8";

const steps = [
  {
    title: "Strong Foundation",
    description:
      "Students begin with beauty basics, hygiene, tools, products, skin & hair knowledge.",
    icon: BookOpen,
    color: "#7d1a3a",
  },
  {
    title: "Trainer Demonstration",
    description:
      "Each technique is first demonstrated by the trainer so students clearly understand.",
    icon: PenTool,
    color: "#7d1a3a",
  },
  {
    title: "Hands-On Practice",
    description:
      "Students practice regularly under trainer supervision to improve skill and confidence.",
    icon: Zap,
    color: "#7d1a3a",
  },
  {
    title: "Live Model Sessions",
    description:
      "Students work on real models to understand client handling and real-time experience.",
    icon: Users,
    color: "#7d1a3a",
  },
  {
    title: "Portfolio & Career",
    description:
      "Guidance for portfolio building, freelancing, client communication and career growth.",
    icon: Trophy,
    color: "#7d1a3a",
  },
];

const TrainingTimeline = () => {
  return (
    <section
      className="w-full sm:py-16 px-6 overflow-hidden"
      style={{ background: "#ffffff" }}
      id="training"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#b06070",
              fontWeight: 500,
            }}
          >
            Our Training Process
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Montserrat', serif",
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 700,
              color: MAROON,
              marginTop: "12px",
              lineHeight: 1.15,
            }}
          >
            How We{" "}
            <em style={{ fontStyle: "normal", color: "#5a1228" }}>Train</em>{" "}
            Our Students
          </motion.h2>

          <div
            style={{
              width: "40px",
              height: "2px",
              background: MAROON,
              borderRadius: "2px",
              margin: "16px auto 0",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Desktop Systematic Timeline */}
        <div className="hidden lg:flex items-stretch justify-center gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div key={i} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="relative w-[210px] min-h-[260px] rounded-[28px] p-6 flex flex-col items-center text-center"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #f0e4d8",
                    boxShadow: "0 14px 35px rgba(125, 26, 58, 0.08)",
                  }}
                >
                  {/* Step number */}
                  <div
                    className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: CREAM,
                      color: step.color,
                      fontSize: "12px",
                      fontWeight: 800,
                      border: `1px solid ${step.color}`,
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-[74px] h-[74px] rounded-full flex items-center justify-center mb-5"
                    style={{
                      background: step.color,
                      color: "#ffffff",
                      boxShadow: `0 10px 22px ${step.color}44`,
                    }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 800,
                      color: "#1a1a1a",
                      lineHeight: 1.35,
                      marginBottom: "10px",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "12px",
                      color: "#555",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow outside card */}
                {i !== steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                    className="mx-3 flex items-center justify-center"
                  >
                    <ArrowRight
                      size={28}
                      strokeWidth={2.2}
                      style={{ color: MAROON, opacity: 0.75 }}
                    />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-[24px] p-6"
                style={{
                  background: "#ffffff",
                  border: "1px solid #f0e4d8",
                  boxShadow: "0 12px 30px rgba(125, 26, 58, 0.07)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: step.color,
                      color: "#ffffff",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: "10px",
                        letterSpacing: "2px",
                        color: step.color,
                        textTransform: "uppercase",
                        fontWeight: 700,
                        marginBottom: "4px",
                      }}
                    >
                      Step {i + 1}
                    </p>

                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: 800,
                        color: "#1a1a1a",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#555",
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden flex flex-col gap-6 relative">
          <div
            style={{
              position: "absolute",
              left: "28px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: `linear-gradient(to bottom, ${MAROON}, #d4848e)`,
              borderRadius: "2px",
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  paddingLeft: "8px",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    flexShrink: 0,
                    zIndex: 2,
                    boxShadow: `0 2px 10px ${step.color}55`,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div
                  style={{
                    border: "1px solid #f0e4d8",
                    borderRadius: "14px",
                    padding: "14px 18px",
                    background: "#fff",
                    flex: 1,
                    boxShadow: "0 8px 22px rgba(125, 26, 58, 0.05)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: step.color,
                      fontWeight: 700,
                      marginBottom: "4px",
                    }}
                  >
                    Step {i + 1}
                  </p>

                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 800,
                      color: "#1a1a1a",
                      marginBottom: "6px",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "12px",
                      color: "#555",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingTimeline;


// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { BookOpen, PenTool, Zap, Users, Trophy } from "lucide-react";

// const MAROON = "#7d1a3a";
// const CREAM = "#f5e8d8";

// const steps = [
//   {
//     title: "Strong Foundation",
//     description: "Students begin with beauty basics, hygiene, tools, products, skin & hair knowledge.",
//     icon: BookOpen,
//     color: "#7d1a3a",
//   },
//   {
//     title: "Trainer Demonstration",
//     description: "Each technique is first demonstrated by the trainer so students clearly understand.",
//     icon: PenTool,
//     color: "#9b2335",
//   },
//   {
//     title: "Hands-On Practice",
//     description: "Students practice regularly under trainer supervision to improve skill and confidence.",
//     icon: Zap,
//     color: "#b8485a",
//   },
//   {
//     title: "Live Model Sessions",
//     description: "Students work on real models to understand client handling and real-time experience.",
//     icon: Users,
//     color: "#c4606e",
//   },
//   {
//     title: "Portfolio & Career",
//     description: "Guidance for portfolio building, freelancing, client communication and career growth.",
//     icon: Trophy,
//     color: "#d4848e",
//   },
// ];

// // Position each step around a circle
// const getPosition = (index, total, rx, ry) => {
//   // Start from top (-90deg) and go clockwise
//   const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
//   return {
//     x: Math.cos(angle) * rx,
//     y: Math.sin(angle) * ry,
//     angle: (angle * 180) / Math.PI,
//   };
// };

// const TrainingTimeline = () => {
//   const containerRef = useRef(null);
//   const total = steps.length;
//   const RX = 210; // horizontal radius
//   const RY = 200; // vertical radius
//   const CX = 300; // center x of SVG
//   const CY = 280; // center y of SVG

//   return (
//     <section
//       className="py-24 px-6 overflow-hidden"
//       style={{ background: "#ffffff" }}
//       ref={containerRef}
//       id="training"
//     >
//       <div className="max-w-6xl mx-auto">

//         {/* ── Header ── */}
//         <div className="text-center mb-16">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             style={{
//               fontSize: "11px",
//               letterSpacing: "3px",
//               textTransform: "uppercase",
//               color: "#b06070",
//               fontWeight: 500,
//             }}
//           >
//             Our Training Process
//           </motion.p>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             style={{
//               fontFamily: "'Montserrat', serif",
//               fontSize: "clamp(30px, 4vw, 48px)",
//               fontWeight: 700,
//               color: MAROON,
//               marginTop: "12px",
//               lineHeight: 1.15,
//             }}
//           >
//             How We{" "}
//             <em style={{ fontStyle: "normal", color: "#5a1228" }}>Train</em>{" "}
//             Our Students
//           </motion.h2>
//           <div style={{
//             width: "40px", height: "2px",
//             background: MAROON, borderRadius: "2px",
//             margin: "16px auto 0", opacity: 0.5,
//           }} />
//         </div>

//         {/* ── Circular Layout — Desktop ── */}
//         <div className="hidden md:flex items-center justify-center">
//           <div style={{ position: "relative", width: "600px", height: "560px" }}>

//             {/* SVG arrows ring */}
//             <svg
//               width="600" height="560"
//               style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}
//             >
//               <defs>
//                 {steps.map((_, i) => (
//                   <marker
//                     key={i}
//                     id={`arrow-${i}`}
//                     markerWidth="8" markerHeight="8"
//                     refX="6" refY="3"
//                     orient="auto"
//                   >
//                     <path d="M0,0 L0,6 L8,3 z" fill={steps[i].color} />
//                   </marker>
//                 ))}
//               </defs>

//               {/* Draw curved arrows between steps */}
//               {steps.map((step, i) => {
//                 const next = (i + 1) % total;
//                 const p1 = getPosition(i, total, RX, RY);
//                 const p2 = getPosition(next, total, RX, RY);

//                 const x1 = CX + p1.x;
//                 const y1 = CY + p1.y;
//                 const x2 = CX + p2.x;
//                 const y2 = CY + p2.y;

//                 // Midpoint slightly pushed outward for curve
//                 const midX = (x1 + x2) / 2;
//                 const midY = (y1 + y2) / 2;
//                 const dx = midX - CX;
//                 const dy = midY - CY;
//                 const dist = Math.sqrt(dx * dx + dy * dy);
//                 const pushFactor = 1.35;
//                 const cpX = CX + (dx / dist) * dist * pushFactor;
//                 const cpY = CY + (dy / dist) * dist * pushFactor;

//                 // Shorten arrow endpoints so they don't overlap circles
//                 const shrink = 52;
//                 const d1 = Math.sqrt((x1 - cpX) ** 2 + (y1 - cpY) ** 2);
//                 const d2 = Math.sqrt((x2 - cpX) ** 2 + (y2 - cpY) ** 2);
//                 const sx1 = x1 + ((cpX - x1) / d1) * shrink;
//                 const sy1 = y1 + ((cpY - y1) / d1) * shrink;
//                 const sx2 = x2 + ((cpX - x2) / d2) * shrink;
//                 const sy2 = y2 + ((cpY - y2) / d2) * shrink;

//                 return (
//                   <motion.path
//                     key={i}
//                     d={`M ${sx1} ${sy1} Q ${cpX} ${cpY} ${sx2} ${sy2}`}
//                     fill="none"
//                     stroke={step.color}
//                     strokeWidth="2"
//                     strokeDasharray="6 4"
//                     markerEnd={`url(#arrow-${i})`}
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     whileInView={{ pathLength: 1, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1, delay: i * 0.2 }}
//                   />
//                 );
//               })}
//             </svg>

//             {/* Center label */}
//             <div style={{
//               position: "absolute",
//               top: "50%", left: "50%",
//               transform: "translate(-50%, -50%)",
//               textAlign: "center",
//               zIndex: 5,
//             }}>
//               <div style={{
//                 width: "100px", height: "100px",
//                 borderRadius: "50%",
//                 background: CREAM,
//                 border: `2px solid ${MAROON}`,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}>
//                 <p style={{
//                   fontFamily: "'Montserrat', serif",
//                   fontSize: "13px",
//                   fontWeight: 700,
//                   color: MAROON,
//                   lineHeight: 1.2,
//                   textAlign: "center",
//                 }}>
//                   Belleza<br />
//                   <em style={{ fontStyle: "normal", fontSize: "11px" }}>Training</em>
//                 </p>
//               </div>
//             </div>

//             {/* Step circles */}
//             {steps.map((step, i) => {
//               const { x, y } = getPosition(i, total, RX, RY);
//               const Icon = step.icon;
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, scale: 0.6 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: i * 0.15 }}
//                   style={{
//                     position: "absolute",
//                     left: `${CX + x}px`,
//                     top: `${CY + y}px`,
//                     transform: "translate(-50%, -50%)",
//                     zIndex: 10,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     gap: "8px",
//                     width: "108px",
//                   }}
//                 >
//                   {/* Circle */}
//                   <div style={{
//                     width: "80px",
//                     height: "80px",
//                     borderRadius: "50%",
//                     background: step.color,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#fff",
//                     boxShadow: `0 4px 16px ${step.color}55`,
//                     flexShrink: 0,
//                   }}>
//                     <Icon className="w-7 h-7" />
//                   </div>

//                   {/* Step number badge */}
//                   <div style={{
//                     position: "absolute",
//                     top: "-6px",
//                     right: "8px",
//                     width: "20px",
//                     height: "20px",
//                     borderRadius: "50%",
//                     background: "#fff",
//                     border: `1.5px solid ${step.color}`,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "10px",
//                     fontWeight: 700,
//                     color: step.color,
//                   }}>
//                     {i + 1}
//                   </div>

//                   {/* Label */}
//                   <p style={{
//                     fontSize: "11px",
//                     fontWeight: 700,
//                     color: "#1a1a1a",
//                     textAlign: "center",
//                     lineHeight: 1.3,
//                   }}>
//                     {step.title}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* ── Mobile: Vertical timeline ── */}
//         <div className="md:hidden flex flex-col gap-6 relative">
//           {/* Line */}
//           <div style={{
//             position: "absolute",
//             left: "28px", top: 0, bottom: 0,
//             width: "2px",
//             background: `linear-gradient(to bottom, ${MAROON}, #d4848e)`,
//             borderRadius: "2px",
//           }} />

//           {steps.map((step, i) => {
//             const Icon = step.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   gap: "20px",
//                   paddingLeft: "8px",
//                 }}
//               >
//                 {/* Icon circle */}
//                 <div style={{
//                   width: "42px",
//                   height: "42px",
//                   borderRadius: "50%",
//                   background: step.color,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#fff",
//                   flexShrink: 0,
//                   zIndex: 2,
//                   boxShadow: `0 2px 10px ${step.color}55`,
//                 }}>
//                   <Icon className="w-5 h-5" />
//                 </div>

//                 {/* Content */}
//                 <div style={{
//                   border: "1px solid #f0e4d8",
//                   borderRadius: "12px",
//                   padding: "14px 18px",
//                   background: "#fff",
//                   flex: 1,
//                 }}>
//                   <p style={{
//                     fontSize: "10px",
//                     letterSpacing: "2px",
//                     textTransform: "uppercase",
//                     color: step.color,
//                     fontWeight: 600,
//                     marginBottom: "4px",
//                   }}>
//                     Step {i + 1}
//                   </p>
//                   <h3 style={{
//                     fontSize: "15px",
//                     fontWeight: 700,
//                     color: "#1a1a1a",
//                     marginBottom: "6px",
//                   }}>
//                     {step.title}
//                   </h3>
//                   <p style={{
//                     fontSize: "12px",
//                     color: "#555",
//                     lineHeight: 1.7,
//                   }}>
//                     {step.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* ── Step descriptions below circle (desktop) ── */}
//         <div
//           className="hidden md:grid mt-12 grid-cols-5"
//           style={{ gap: "12px" }}
//         >
//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.6 }}
//               style={{
//                 textAlign: "center",
//                 padding: "16px 12px",
//                 border: "1px solid #f0e4d8",
//                 borderRadius: "12px",
//                 background: "#fff",
//               }}
//             >
//               <p style={{
//                 fontSize: "10px",
//                 letterSpacing: "2px",
//                 textTransform: "uppercase",
//                 color: step.color,
//                 fontWeight: 600,
//                 marginBottom: "6px",
//               }}>
//                 Step {i + 1}
//               </p>
//               <p style={{
//                 fontSize: "11px",
//                 color: "#555",
//                 lineHeight: 1.7,
//               }}>
//                 {step.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrainingTimeline;


// import { useRef } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import { BookOpen, PenTool, Zap, Users, Trophy } from "lucide-react";

// const steps = [
//   {
//     title: "Strong Foundation",
//     description:
//       "Students begin with beauty basics, hygiene, tools, products, skin knowledge, hair knowledge, and professional ethics.",
//     icon: <BookOpen className="w-6 h-6" />,
//   },
//   {
//     title: "Trainer Demonstration",
//     description:
//       "Each technique is first demonstrated by the trainer so students can clearly understand the correct process.",
//     icon: <PenTool className="w-6 h-6" />,
//   },
//   {
//     title: "Hands-On Practice",
//     description:
//       "Students practice regularly under trainer supervision to improve skill, speed, finishing, and confidence.",
//     icon: <Zap className="w-6 h-6" />,
//   },
//   {
//     title: "Live Model Sessions",
//     description:
//       "Students work on real models to understand client handling and real-time beauty service experience.",
//     icon: <Users className="w-6 h-6" />,
//   },
//   {
//     title: "Portfolio & Career Guidance",
//     description:
//       "Students get guidance for portfolio building, freelancing, client communication, pricing, and career growth.",
//     icon: <Trophy className="w-6 h-6" />,
//   },
// ];

// const TrainingTimeline = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <section className="py-24 bg-light" ref={containerRef} id="training">
//       <div className="max-w-4xl mx-auto px-6">
//         <div className="text-center mb-20">
//           <h2 className="text-primary text-4xl md:text-5xl font-bold tracking-tight">
//             How We{" "}
//             <span className="text-secondary normal font-serif">Train</span> Our
//             Students
//           </h2>
//         </div>

//         <div className="relative">
//           {/* Central Line (Desktop) / Side Line (Mobile) */}
//           <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-light rounded-full" />

//           {/* Animating Progress Line */}
//           <motion.div
//             className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary origin-top rounded-full z-10"
//             style={{ scaleY }}
//           />

//           <div className="space-y-20">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className={`relative flex flex-col md:flex-row items-center gap-8 ${
//                   index % 2 === 0 ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Step Content */}
//                 <div className="flex-1 w-full md:w-auto pl-12 md:pl-0">
//                   <div
//                     className={`px-7 py-6 rounded-4xl bg-accent border border-secondary hover:bg-light hover:shadow-xl transition-all duration-300 group`}
//                   >
//                     <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">
//                       Step {index + 1}
//                     </span>
//                     <h3 className="text-primary text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
//                       {step.title}
//                     </h3>
//                     <p className="text-secondary font-semibold leading-tight text-sm">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Center Icon/Node */}
//                 <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 bg-primary border-4 border-white rounded-full z-20 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-125">
//                   <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
//                 </div>

//                 {/* Spacer for layout balance */}
//                 <div className="flex-1 hidden md:block" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrainingTimeline;
