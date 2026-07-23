import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#courses" },
    { name: "Career", href: "#career" },
    { name: "Experience", href: "#testimony" },
    { name: "FAQ", href: "#faqs" },
  ];

  return (
    <nav className="fixed top-0 w-full z-100 bg-primary backdrop-blur-lg shadow-lg py-3 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div>
          <img
            src="/assets/images/logos/belleza_logo.svg"
            alt="Belleza Logo"
            className="w-25 object-contain"
          />
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-bold text-sm uppercase tracking-widest transition-colors relative group text-accent"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-6 py-2.5 rounded-full font-bold text-sm shadow-xl bg-accent text-primary hover:bg-secondary transition-all">
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-primary z-99 lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-light uppercase text-xl font-semibold hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-8 flex flex-col items-center gap-6">
              <button className="bg-accent text-primary px-10 py-4 rounded-full font-black text-lg">
                APPLY NOW
              </button>
            </div>

            <button
              className="absolute top-10 right-10"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X className="text-accent font-bold" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Change background on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "Courses", href: "#courses" },
//     { name: "Career", href: "#career" },
//     { name: "Experience", href: "#testimony" },
//     { name: "FAQ", href: "#faqs" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-100 transition-all duration-500 ${
//         scrolled
//           ? "bg-primary backdrop-blur-lg shadow-lg py-3"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         {/* Logo Section */}
//         {/* <div className="flex items-center gap-2 group cursor-pointer">
//           <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
//             <GraduationCap className="text-accent w-6 h-6" />
//           </div>
//           <div>
//             <span className="text-primary font-bold text-xl tracking-tighter block leading-none">
//               BELLEZA
//             </span>
//             <span className="text-accent text-[9px] uppercase tracking-[0.3em] font-black leading-none">
//               Beauty School
//             </span>
//           </div>
//         </div> */}

//         <motion.div>
//           <img
//             src="/assets/images/logos/belleza_logo.svg"
//             alt="Belleza Logo"
//             className="w-25 object-contain"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.05 }}
//           />
//         </motion.div>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex items-center gap-10">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className={`font-bold text-sm uppercase tracking-widest transition-colors relative group ${scrolled ? "text-accent" : "text-accent"}`}
//             >
//               {link.name}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
//             </a>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden lg:flex items-center gap-4">
//           {/* <a
//             href="tel:9012360088"
//             className="flex items-center gap-2 text-primary font-bold text-sm mr-4 hover:text-accent transition-colors"
//           >
//             <Phone size={16} />
//              +91 74099 40088 
//           </a> */}
//           <button
//             className={`px-6 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-primary hover:bg-secondary transition-all ${scrolled ? "bg-accent text-primary" : "bg-primary text-light"}`}
//           >
//             Apply Now
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className={`lg:hidden text-primary p-2 ${scrolled ? "text-accent" : "text-accent"}`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//             className="fixed inset-0 h-screen bg-primary z-99 lg:hidden flex flex-col items-center justify-center gap-8"
//           >
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="text-light uppercase text-xl font-semibold hover:text-accent transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <div className="mt-8 flex flex-col items-center gap-6">
//               {/* <a
//                 href="tel:9012360088"
//                 className="text-accent text-xl font-bold flex items-center gap-2"
//               >
//                 <Phone />  9690920088 
//               </a> */}
//               <button className="bg-accent text-primary px-10 py-4 rounded-full font-black text-lg">
//                 APPLY NOW
//               </button>
//             </div>
//             <div
//               className="absolute top-10 right-10"
//               onClick={() => setIsOpen(false)}
//             >
//               <X className="text-accent font-bold" />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
