

import { motion } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  Sparkles,
  Briefcase,
  Camera,
} from "lucide-react";

const MAROON = "#7d1a3a";

const features = [
  {
    title: "Basic to Pro",
    description: "Every course starts with fundamentals and gradually moves toward advanced techniques.",
    icon: <Sparkles className="w-7 h-7" />,
  },
  {
    title: "Practice-Based",
    description: "Regular hands-on sessions to improve finishing, speed, product usage and confidence.",
    icon: <Users className="w-7 h-7" />,
  },
  {
    title: "Industry Exposure",
    description: "Learn how professional salons and freelance artists actually work in real life.",
    icon: <BookOpen className="w-7 h-7" />,
  },
  {
    title: "Personal Attention",
    description: "Trainers guide students to correct mistakes and build confidence step by step.",
    icon: <Award className="w-7 h-7" />,
  },
  {
    title: "Certification",
    description: "Professional certification for freelancing, salon jobs and business opportunities.",
    icon: <Briefcase className="w-7 h-7" />,
  },
  {
    title: "Career Guidance",
    description: "Learn to build a portfolio, set service charges and promote your work effectively.",
    icon: <Camera className="w-7 h-7" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="py-24 px-6 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#b06070",
              fontWeight: 500,
            }}
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "'Montserrat', serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: MAROON,
              marginTop: "12px",
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
            }}
          >
            The Belleza{" "}
            <em style={{ fontStyle: "normal", color: "#5a1228" }}>Advantage</em>
          </motion.h2>

          <div style={{
            width: "40px",
            height: "2px",
            background: MAROON,
            borderRadius: "2px",
            margin: "16px auto 0",
            opacity: 0.5,
          }} />
        </div>

        {/* ── Circle Cards Grid ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: "28px", justifyItems: "center" }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                background: "#ffffff",
                border: "1.5px solid #f0e4d8",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "28px",
                gap: "12px",
                cursor: "default",
                boxShadow: "0 2px 16px rgba(125,26,58,0.06)",
                flexShrink: 0,
              }}
              onMouseEnter={e =>
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(125,26,58,0.15)"
              }
              onMouseLeave={e =>
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(125,26,58,0.06)"
              }
            >
              {/* Icon */}
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#f5e8d8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: MAROON,
                flexShrink: 0,
              }}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#1a1a1a",
                lineHeight: 1.3,
                letterSpacing: "-0.1px",
              }}>
                {item.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "11px",
                color: "#444444",
                lineHeight: 1.6,
                fontWeight: 400,
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

// import { motion } from "framer-motion";
// import {
//   Award,
//   Users,
//   BookOpen,
//   Sparkles,
//   Briefcase,
//   Camera,
// } from "lucide-react";

// const features = [
//   {
//     title: "Learn from Basic to Professional Level",
//     description:
//       "Every course starts with fundamentals and gradually moves toward advanced techniques, so students can learn comfortably without confusional working skills.",
//     icon: <Sparkles className="w-6 h-6" />,
//   },
//   {
//     title: "Practice-Based Classes",
//     description:
//       "Our classes are designed around real practice. Students get regular hands-on sessions to improve finishing, speed, product usage and confidence.",
//     icon: <Users className="w-6 h-6" />,
//   },
//   {
//     title: "Real Beauty Industry Exposure",
//     description:
//       "Students learn how professional salons and freelance artists actually work — from hygiene and consultation to service delivery and client handling..",
//     icon: <BookOpen className="w-6 h-6" />,
//   },
//   {
//     title: "Personal Attention",
//     description:
//       "Trainers guide students during practice and help them correct mistakes, improve techniques and build confidence step by step.",
//     icon: <Award className="w-6 h-6" />,
//   },
//   {
//     title: "Certification for Career Growth",
//     description:
//       "After completing the course, students receive professional certification that supports them in freelancing, salon jobs and business opportunities.",
//     icon: <Briefcase className="w-6 h-6" />,
//   },
//   {
//     title: "Career & Freelancing Guidance",
//     description:
//       "Students are guided on how to start working, communicate with clients, set service charges, build a portfolio and promote their work",
//     icon: <Camera className="w-6 h-6" />,
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="pt-24 px-6 bg-light overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-secondary font-bold tracking-[0.3em] uppercase text-xs"
//           >
//             Why Choose Us
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.8 }}
//             className="text-primary text-4xl md:text-5xl font-bold mt-4 tracking-tight"
//           >
//             The Belleza{" "}
//             <span className="normal font-serif text-secondary">Advantage</span>
//           </motion.h2>
//           <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full opacity-50" />
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.8 }}
//               whileHover={{ y: -10 }}
//               className="group bg-light p-8 rounded-4xl shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 border border-secondary"
//             >
//               <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary text-secondary transition-colors duration-300 bg-secondary-20">
//                 {item.icon}
//               </div>

//               <h3 className="text-primary text-xl font-bold  mb-2 group-hover:text-accent transition-colors">
//                 {item.title}
//               </h3>

//               <p className="text-secondary font-semibold leading-relaxed text-sm">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Call to Action */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mt-20 p-1 bg-linear-to-r from-transparent via-accent/30 to-transparent"
//         />
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
