import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const fallbackTestimonials = [
  {
    name: "Priya Sharma",
    designation: "Makeup Student",
    avatar: "/assets/images/side/images.png",
    description:
      "Belleza made learning easy for me. I started as a beginner, but regular practice and trainer guidance helped me gain confidence.",
  },
  {
    name: "Anjali Verma",
    designation: "Hair & Makeup Student",
    avatar: "/assets/images/side/images.png",
    description:
      "The best part is practical training. We don’t just watch demos; we practice and learn how to improve our work.",
  },
  {
    name: "Neha Rawat",
    designation: "Beauty & Skin Student",
    avatar: "/assets/images/side/images.png",
    description:
      "I wanted to start freelancing, and Belleza helped me understand not only makeup but also client handling and portfolio building.",
  },
];

const StudentExperience = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        console.log("Testimonial API URL:", API_URL);

        const response = await fetch(
          `${API_URL}/testimonial/public?limit=10`
        );

        const data = await response.json();

        console.log("Testimonial response:", data);

        if (response.ok && Array.isArray(data?.data) && data.data.length > 0) {
          setTestimonials(data.data);
          setActiveIndex(0);
        }
      } catch (error) {
        console.log("Testimonial fetch error:", error);
      }
    };

    fetchTestimonials();
  }, [API_URL]);

  const nextTestimonial = () => {
    if (testimonials.length === 0) return;

    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    if (testimonials.length === 0) return;

    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const active = testimonials[activeIndex];

  return (
    <section
      className="w-full py-24 px-6 bg-white overflow-hidden"
      id="testimony"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4"
        >
          Student Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-3xl md:text-5xl font-bold tracking-tight mb-14"
        >
          What Our{" "}
          <span className="text-secondary normal font-serif">
            Students Say
          </span>
        </motion.h2>

        {/* Testimonial Box */}
        <div className="relative bg-white rounded-[2.5rem] px-6 md:px-20 py-14 md:py-16 border border-secondary/20 shadow-xl">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg border border-secondary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg border border-secondary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active?._id || activeIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="max-w-3xl mx-auto"
            >
              {/* Quote Icons */}
              <div className="flex justify-between items-start mb-4 text-secondary/25">
                <Quote size={42} />
                <Quote size={42} className="rotate-180" />
              </div>

              {/* Testimonial Text */}
              <div
                className="text-primary/80 text-lg md:text-2xl normal leading-relaxed font-medium mb-8 [&_p]:mb-0 [&_strong]:font-bold [&_em]:not-italic"
                dangerouslySetInnerHTML={{
                  __html: active?.description || "",
                }}
              />

              {/* Divider */}
              <div className="w-24 h-[2px] bg-secondary/30 mx-auto mb-8" />

              {/* Student Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-light shadow-lg">
                <img
                  src={active?.avatar || "/assets/images/side/images.png"}
                  alt={active?.name || "Student"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-primary text-xl font-bold mb-1">
                {active?.name || "Belleza Student"}
              </h3>

              <p className="text-secondary text-sm font-semibold">
                {active?.designation || active?.course || "Beauty Student"}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-secondary/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentExperience;


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Quote } from "lucide-react";

// const testimonials = [
//   {
//     text: "Belleza Beauty School gave me the confidence to start my beauty career. The training is practical, the environment is friendly, and the trainers guide every student properly.",
//     author: "Belleza Graduate",
//     // tag: "Makeup Artist",
//   },
//   {
//     text: "Before joining Belleza, I was a beginner. Now I feel confident in makeup, hair, and client handling because of regular practice and trainer support.",
//     author: "Belleza Graduate",
//     // tag: "Professional Stylist",
//   },
//   {
//     text: "Live model practice and portfolio support helped me understand real client work. Belleza is a great place for students who want to become professionals.",
//     author: "Belleza Graduate",
//     // tag: "Beauty Expert",
//   },
// ];

// const StudentExperience = () => {
//   const [index, setIndex] = useState(0);

//   // Auto-change logic every 6 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section
//       className="py-20 mb-10 px-6 bg-primary relative overflow-hidden min-h-140 flex items-center"
//       id="testimony"
//     >
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full -mr-20 -mt-20" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full -ml-20 -mb-20" />

//       <div className="max-w-5xl mx-auto w-full relative z-10">
//         {/* Section Header */}
//         <div className="flex flex-col items-center mb-12 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
//           >
//             Student Experience
//           </motion.div>
//           <h2 className="text-light text-3xl md:text-5xl font-bold tracking-tight">
//             Voices of{" "}
//             <span className="normal font-serif text-accent">Confidence</span>
//           </h2>
//         </div>

//         <div className="relative h-80 md:h-75">
//           {/* Huge Background Quote Mark */}
//           <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-10">
//             <Quote className="w-40 h-40 md:w-64 md:h-64 text-accent fill-accent" />
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 1.05, y: -20 }}
//               transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//               className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-20"
//             >
//               <p className="text-light text-md md:text-xl font-medium leading-relaxed mb-8 normal">
//                 "{testimonials[index].text}"
//               </p>

//               <div className="flex flex-col items-center">
//                 <span className="text-accent font-bold tracking-widest uppercase text-sm mb-1">
//                   — {testimonials[index].author}
//                 </span>
//                 {/* <span className="text-light text-sm uppercase tracking-tighter">
//                   {testimonials[index].tag}
//                 </span> */}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Custom Progress/Auto-Change Indicators */}
//         <div className="flex justify-center items-center gap-4 mt-18">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className="relative h-1 transition-all duration-500 rounded-full overflow-hidden"
//               style={{ width: i === index ? "48px" : "16px" }}
//             >
//               {/* Background of the dot/bar */}
//               <div className="absolute inset-0 bg-light" />

//               {/* Active Fill with animation */}
//               {i === index && (
//                 <motion.div
//                   initial={{ x: "-100%" }}
//                   animate={{ x: "0%" }}
//                   transition={{ duration: 6, ease: "linear" }}
//                   className="absolute inset-0 bg-secondary"
//                 />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudentExperience;
