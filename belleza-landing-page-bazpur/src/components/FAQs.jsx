
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I join if I am a complete beginner?",
    answer:
      "Yes, our courses are designed for beginners. You will learn from basics and gradually move toward professional techniques.",
  },
  {
    question: "Is practical training included?",
    answer:
      "Yes, our main focus is practical learning, hands-on practice and live model sessions.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, students receive professional certification after course completion.",
  },
  {
    question: "Can I start freelancing after completing the course?",
    answer:
      "Yes. After completing your training, you can start freelancing, work in salons, or build your own beauty business.",
  },
  {
    question: "Do you guide students for career growth?",
    answer:
      "Yes, students get career guidance, portfolio support, freelancing tips and client handling guidance.",
  },
  {
    question: "Which courses are available at Belleza Bazpur?",
    answer:
      "Makeup, Hair, Nail, Beauty, Skin and Cosmetology courses are available.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-2xl border border-secondary/30 overflow-hidden transition-all duration-300 ${
        isOpen ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-5 py-5 flex items-center justify-between text-left gap-4"
      >
        <span
          className={`text-sm md:text-base font-bold tracking-tight transition-colors duration-300 ${
            isOpen ? "text-secondary" : "text-primary"
          }`}
        >
          {question}
        </span>

        <div
          className={`shrink-0 w-8 h-8 rounded-full border border-secondary flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "rotate-180 border-accent bg-accent text-primary"
              : "text-secondary"
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-secondary leading-relaxed text-sm font-semibold">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 6);

  return (
    <section className="py-10 px-6 bg-light" id="faqs">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-xs"
          >
            Questions?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-primary text-3xl md:text-5xl font-bold mt-3 tracking-tight"
          >
            Frequently Asked{" "}
            <span className="text-secondary normal font-serif">Questions</span>
          </motion.h2>
        </div>

        {/* FAQ Two Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6"
        >
          {/* Left Column - 3 Questions */}
          <div className="flex flex-col gap-5">
            {leftFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

          {/* Right Column - 3 Questions */}
          <div className="flex flex-col gap-5">
            {rightFaqs.map((faq, index) => {
              const actualIndex = index + 3;

              return (
                <FAQItem
                  key={actualIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === actualIndex}
                  onClick={() =>
                    setOpenIndex(openIndex === actualIndex ? -1 : actualIndex)
                  }
                />
              );
            })}
          </div>
        </motion.div>

        {/* Support Note */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-white rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6 border border-secondary/20 shadow-lg"
        >
          <p className="text-primary font-medium tracking-tight text-center md:text-left">
            Still have more questions about our Bazpur branch?
          </p>

          <button className="px-8 py-3 bg-primary text-light rounded-full font-bold text-sm hover:bg-accent hover:text-primary transition-all duration-300">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// const faqs = [
//   {
//     question: "Can I join if I am a complete beginner?",
//     answer: "Yes, our courses are designed for beginners. You will learn from basics and gradually move toward professional techniques",
//   },
//   {
//     question: "Is practical training included?",
//     answer:
//       "Yes, our main focus is practical learning, hands-on practice and live model sessions.",
//   },
//   {
//     question: "Will I receive a certificate?",
//     answer:
//       "Yes, students receive professional certification after course completion.",
//   },
//   {
//     question: "Can I start freelancing after completing the course?",
//     answer:
//       "Yes. After completing your training, you can start freelancing, work in salons, or build your own beauty business.",
//   },
//   {
//     question: "Do you guide students for career growth?",
//     answer:
//       "Yes, students get career guidance, portfolio support, freelancing tips and client handling guidance.",
//   },
//   {
//     question: "Which courses are available at Belleza BBazpur?",
//     answer:
//       "Makeup, Hair, Nail, Beauty, Skin and Cosmetology courses are available..",
//   },
// ];

// const FAQItem = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div
//       className={`border-b border-secondary transition-colors duration-300 ${isOpen ? "bg-light" : ""}`}
//     >
//       <button
//         onClick={onClick}
//         className="w-full py-6 flex items-center justify-between text-left gap-4"
//       >
//         <span
//           className={`text-md md:text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-secondary" : "text-primary"}`}
//         >
//           {question}
//         </span>
//         <div
//           className={`shrink-0 w-8 h-8 rounded-full border border-secondary flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180 border-accent bg-accent text-primary" : "text-secondary"}`}
//         >
//           {isOpen ? <Minus size={16} /> : <Plus size={16} />}
//         </div>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="overflow-hidden"
//           >
//             <p className="pb-6 text-secondary leading-relaxed max-w-3xl font-semibold">
//               {answer}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const FAQs = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section className="py-24 px-6 bg-light" id="faqs">
//       <div className="w-full mx-auto">
//         {/* Header */}
//         <div className="mb-16">
//           <motion.span
//             initial={{ opacity: 0, x: -10 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-secondary font-bold tracking-[0.3em] uppercase text-xs"
//           >
//             Questions?
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-primary text-2xl md:text-4xl font-bold mt-2 tracking-tight"
//           >
//             Frequently Asked{" "}
//             <span className="text-secondary normal font-serif">Questions</span>
//           </motion.h2>
//         </div>

//         {/* Accordion List */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="border-t border-secondary"
//         >
//           {faqs.map((faq, index) => (
//             <FAQItem
//               key={index}
//               question={faq.question}
//               answer={faq.answer}
//               isOpen={openIndex === index}
//               onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
//             />
//           ))}
//         </motion.div>

//         {/* Support Note */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mt-12 p-8 bg-light rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6"
//         >
//           <p className="text-primary font-medium tracking-tight">
//             Still have more questions about our Bazpur branch?
//           </p>
//           <button className="px-8 py-3 bg-primary text-light rounded-full font-bold text-sm hover:bg-accent hover:text-primary transition-all duration-300">
//             Contact Support
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FAQs;
