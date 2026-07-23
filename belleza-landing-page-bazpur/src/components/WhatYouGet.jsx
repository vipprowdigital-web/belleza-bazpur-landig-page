

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Step-by-step practical learning",
  "Beginner-friendly course structure",
  "Live model practice sessions",
  "Expert trainer support",
  "Professional beauty tools knowledge",
  "Product knowledge and hygiene training",
  "Portfolio-building guidance",
  "Freelancing and career support",
  "Client handling skills",
  "Confidence-building practice",
  "Professional certification",
  "Premium learning environment",
];

const WhatYouGet = () => {
  return (
    <section className="py-8 px-6 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1"
          >
            {/* Decorative background accent */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10" />

            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/assets/images/photo/WhatsApp Image 2026-05-13 at 4.24.01 PM.jpeg"
                alt="Academy Environment"
                className="w-full h-[420px] md:h-[500px] object-cover hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Badge */}
              
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2"
          >
            <h4 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Your Career Journey
            </h4>

            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              What You Get at{" "}
              <span className="text-secondary normal font-serif">
                Belleza Bazpur
              </span>
            </h2>

            <p className="text-secondary font-semibold mb-10 text-lg leading-tight tracking-tight">
              We provide everything you need to transform from a passionate
              beginner into a certified industry professional.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-secondary group-hover:text-primary transition-colors" />
                  </div>

                  <span className="text-secondary font-medium text-sm md:text-base tracking-tight">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-primary text-light px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;

// import { motion } from "framer-motion";
// import { Check } from "lucide-react";

// const benefits = [
//   "Step-by-step practical learning",
// "Beginner-friendly course structure",
// "Live model practice sessions",
// "Expert trainer support",
// "Professional beauty tools knowledge",
// "Product knowledge and hygiene training",
// "Portfolio-building guidance",
// "Freelancing and career support",
// "Client handling skills",
// "Confidence-building practice",
// "Professional certification",
// "Premium learning environment",

// ];

// const WhatYouGet = () => {
//   return (
//     <section className="py-24 px-6 bg-light overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h4 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4">
//               Your Career Journey
//             </h4>
//             <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 tracking-tight">
//               What You Get at{" "}
//               <span className="text-secondary normal font-serif">Belleza  Bazpur</span>
//             </h2>

//             <p className="text-secondary font-semibold mb-10 text-lg leading-tight tracking-tight">
//               We provide everything you need to transform from a passionate
//               beginner into a certified industry professional.
//             </p>

//             {/* Benefits Grid (Inside the Left Col) */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
//               {benefits.map((benefit, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   className="flex items-center gap-3 group"
//                 >
//                   <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
//                     <Check className="w-3.5 h-3.5 text-secondary group-hover:text-primary transition-colors" />
//                   </div>
//                   <span className="text-secondary font-medium text-sm md:text-base tracking-tight">
//                     {benefit}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-12 bg-primary text-light px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-accent hover:text-primary transition-all duration-300"
//             >
//               Start Your Journey
//             </motion.button>
//           </motion.div>

//           {/* Right Side: Image with Decorative Elements */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             {/* Decorative background accent */}
//             <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
//             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10" />

//             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop"
//                 alt="Academy Environment"
//                 className="w-full h-150 object-cover hover:scale-110 transition-transform duration-700"
//               />

//               {/* Overlay Badge */}
//               <div className="absolute top-8 left-8 bg-light/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-xl border border-light">
//                 <div className="text-primary font-bold text-md">
//                   Premium Facility
//                 </div>
//                 <div className="text-secondary text-xs font-bold uppercase tracking-tighter">
//                    Beria Road, near S.D.M Court, Bazpur, Uttarakhand 262401 
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatYouGet;
