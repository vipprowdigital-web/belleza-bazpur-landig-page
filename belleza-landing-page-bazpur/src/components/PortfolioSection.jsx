
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const portfolioImages = [
  {
    image: "/assets/images/GridArt_20260602_210739447.jpg.jpeg",
    title: "Bridal Makeup Look",
    text: "Practice professional bridal looks with proper finishing, detailing and styling.",
  },
  {
    image: "/assets/images/photo/WhatsApp Image 2026-05-13 at 4.24.08 PM.jpeg",
    title: "Creative Makeup Work",
    text: "Build confidence by creating unique beauty looks during practical sessions.",
  },
  {
    image: "/assets/images/Gemini_Generated_Image_df07spdf07spdf07.png",
    title: "Portfolio Shoot",
    text: "Create presentable work for freelancing, salon jobs and social media promotion.",
  },
];

const PortfolioSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full py-24 sm:py-16 px-6 bg-light overflow-hidden flex flex-col items-center justify-center text-center"
      id="portfolio"
    >
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-accent/10 rounded-full blur-[100px] -z-10"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl"
      >
        {/* Floating Icon */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-secondary rounded-full scale-150"
            />
            <div className="bg-primary p-4 rounded-full shadow-2xl relative z-10">
              <Camera className="text-accent w-6 h-6" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-primary text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-[1.1]"
        >
          Create Work <br />
          <span className="text-secondary normal font-serif">
            That You Can Show Proudly
          </span>
        </motion.h2>

        {/* Description Paragraph 1 */}
        <motion.p
          variants={itemVariants}
          className="text-primary text-md md:text-xl font-medium leading-tight mb-3 tracking-tighter"
        >
          In the beauty industry, your work speaks for you. At Belleza Beauty
          School Bazpur, students get opportunities to practice and create
          different beauty looks during training.
        </motion.p>

        {/* Description Paragraph 2 */}
        <motion.p
          variants={itemVariants}
          className="text-secondary font-semibold text-md max-w-2xl mx-auto leading-tight tracking-tight"
        >
          These practice sessions help students build a strong portfolio for
          freelancing, salon jobs, bridal bookings and social media promotion.
        </motion.p>
      </motion.div>

      {/* Image Cards */}
      <div className="w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-accent/20"
          >
            <div className="w-full h-[340px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-primary text-xl font-bold mb-3 tracking-tight">
                {item.title}
              </h3>

              <p className="text-secondary text-sm font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
// import { motion } from "framer-motion";
// import { Camera } from "lucide-react";

// const PortfolioSection = () => {
//   // Animation variants for staggering the text
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       className="relative w-full py-24 px-6 bg-light overflow-hidden flex flex-col items-center justify-center text-center"
//       id="portfolio"
//     >
//       {/* Decorative Background Elements */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-accent/10 rounded-full blur-[100px] -z-10"
//       />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="max-w-4xl"
//       >
//         {/* Floating Icon */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center mb-6"
//         >
//           <div className="relative">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-0 border-2 border-dashed border-secondary rounded-full scale-150"
//             />
//             <div className="bg-primary p-4 rounded-full shadow-2xl relative z-10">
//               <Camera className="text-accent w-6 h-6" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Title */}
//         <motion.h2
//           variants={itemVariants}
//           className="text-primary text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-[1.1]"
//         >
//           Create Work  <br />
//           <span className="text-secondary normal font-serif">
//             That You Can Show Proudly
//           </span>
//         </motion.h2>

//         {/* Description Paragraph 1 */}
//         <motion.p
//           variants={itemVariants}
//           className="text-primary text-md md:text-xl font-medium leading-tight mb-3 tracking-tighter"
//         >
//           In the beauty industry, your work speaks for you. At Belleza Beauty School Bazpur, students get opportunities to practice and create different beauty looks during training..
//         </motion.p>

//         {/* Description Paragraph 2 */}
//         <motion.p
//           variants={itemVariants}
//           className="text-secondary font-semibold text-md max-w-2xl mx-auto leading-tight tracking-tight"
//         >
//         These practice sessions help students build a strong portfolio for freelancing, salon jobs, bridal bookings and social media promotion..
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// };

// export default PortfolioSection;
