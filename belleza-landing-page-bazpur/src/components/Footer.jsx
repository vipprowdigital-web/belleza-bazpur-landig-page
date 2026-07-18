import { Phone, MapPin, Globe } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";

const InstagramIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
};

const FacebookIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.03 3.68 9.2 8.49 9.94v-7.03H7.96v-2.91h2.53V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.62.77-1.62 1.56v1.9h2.76l-.44 2.91h-2.32V22c4.8-.74 8.38-4.91 8.38-9.94Z" />
    </svg>
  );
};

const GoogleBusinessIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.24 10.29v3.48h5.66c-.24 1.49-1.71 4.36-5.66 4.36-3.41 0-6.19-2.82-6.19-6.3s2.78-6.3 6.19-6.3c1.94 0 3.24.83 3.98 1.54l2.71-2.61C17.19 2.84 14.92 1.86 12.24 1.86 6.73 1.86 2.26 6.33 2.26 11.84s4.47 9.98 9.98 9.98c5.76 0 9.58-4.05 9.58-9.75 0-.66-.07-1.16-.16-1.66h-9.42z" />
    </svg>
  );
};
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-light pt-16 pb-8 px-6">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter">
                Belleza{" "}
                <span className="text-accent normal">Beauty School</span>
              </h3>

              <p className="text-accent/60 text-[10px] uppercase tracking-[0.3em] font-bold mt-1">
                Bazpur Branch
              </p>
            </div>

            <p className="text-light text-sm leading-relaxed max-w-xs">
              Professional Makeup, Hair, Nail, Beauty, Skin & Cosmetology
              Courses. Empowering the next generation of beauty professionals.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/bellezabazpur/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              <a
                href="https://share.google/mVfpiaBuyJG5zEZC3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business Profile"
                className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <GoogleBusinessIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
                Academy
              </h4>

              <ul className="space-y-2 text-sm text-light/60">
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("about")}
                >
                  About Us
                </li>

                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("courses")}
                >
                  Courses
                </li>

                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("training")}
                >
                  Training Timeline
                </li>

                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("contact")}
                >
                  Contact
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
                Student Life
              </h4>

              <ul className="space-y-2 text-sm text-light/60">
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("career")}
                >
                  Career Opportunities
                </li>

                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("portfolio")}
                >
                  Portfolio
                </li>

                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("testimony")}
                >
                  Testimonials
                </li>

                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("faqs")}
                >
                  FAQs
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
              Visit Us
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-light/70 leading-relaxed">
                  Bazpur, Uttarakhand
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+919012360088"
                  className="text-sm text-light/70 hover:text-accent transition-colors"
                >
                  +91 90123 60088
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="https://bellezaschool.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-light/70 underline underline-offset-4 decoration-accent/30 hover:text-accent cursor-pointer"
                >
                  www.bellezaschool.com
                </a>
              </div>

              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-light/40 font-bold">
          <p>© {currentYear} Belleza Beauty School. All Rights Reserved.</p>

          <div className="flex gap-8">
            <a
              href="https://vipprow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent cursor-pointer"
            >
              Developed by Vipprow
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import {
//   Phone,
//   MapPin,
//   Globe,
//   //   Instagram,
//   //   Facebook,
//   //   Youtube,
// } from "lucide-react";
// import { scrollTo } from "../utils/scrollTo";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full bg-primary text-light pt-16 pb-8 px-6">
//       <div className="w-full mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
//           {/* Brand Column */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-bold tracking-tighter">
//                 Belleza{" "}
//                 <span className="text-accent normal">Beauty School</span>
//               </h3>
//               <p className="text-accent/60 text-[10px] uppercase tracking-[0.3em] font-bold mt-1">
//                Bazpur Branch
//               </p>
//             </div>
//             <p className="text-light text-sm leading-relaxed max-w-xs">
//               Professional Makeup, Hair, Nail, Beauty, Skin & Cosmetology
//               Courses. Empowering the next generation of beauty professionals.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="grid grid-cols-2 gap-8">
//             <div className="space-y-4">
//               <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
//                 Academy
//               </h4>
//               <ul className="space-y-2 text-sm text-light/60">
//                 <li
//                   className="hover:text-accent transition-colors cursor-pointer"
//                   onClick={() => scrollTo("about")}
//                 >
//                   About Us
//                 </li>
//                 <li
//                   className="hover:text-accent transition-colors cursor-pointer"
//                   onClick={() => scrollTo("courses")}
//                 >
//                   Courses
//                 </li>
//                 <li
//                   className="hover:text-accent transition-colors cursor-pointer"
//                   onClick={() => scrollTo("training")}
//                 >
//                   Training Timeline
//                 </li>
//                 <li
//                   className="hover:text-accent transition-colors cursor-pointer"
//                   onClick={() => scrollTo("contact")}
//                 >
//                   Contact
//                 </li>
//               </ul>
//             </div>
//             <div className="space-y-4">
//               <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
//                 Student Life
//               </h4>
//               <ul className="space-y-2 text-sm text-light/60">
//                 <li
//                   className="hover:text-accent transition-colors cursor-pointer"
//                   onClick={() => scrollTo("career")}
//                 >
//                   Career Opportunities
//                 </li>
//                 <li
//                   className="hover:text-accent transition-colors cursor-pointer"
//                   onClick={() => scrollTo("portfolio")}
//                 >
//                   Portfolio
//                 </li>
//                 <li
//                   className="hover:text-accent transition-colors cursor-pointer"
//                   onClick={() => scrollTo("testimony")}
//                 >
//                   Testimonials
//                 </li>
//                 <li
//                   className="hover:text-accent transition-colors cursor-pointer"
//                   onClick={() => scrollTo("faqs")}
//                 >
//                   FAQs
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Contact Column */}
//           <div className="space-y-6">
//             <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
//               Visit Us
//             </h4>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
//                 <p className="text-sm text-light/70 leading-relaxed">
//                   Bazpur, Uttarakhand
//                 </p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-accent shrink-0" />
//                 <p className="text-sm text-light/70">+91 90123 60088</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Globe className="w-5 h-5 text-accent shrink-0" />
//                 <a
//                   href="https://bellezaschool.com"
//                   className="text-sm text-light/70 underline underline-offset-4 decoration-accent/30 hover:text-accent cursor-pointer"
//                 >
//                   www.bellezaschool.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-light/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-light/40 font-bold">
//           <p>© {currentYear} Belleza Beauty School. All Rights Reserved.</p>
//           <div className="flex gap-8">
//             <a
//               href="https://vipprow.com"
//               className="hover:text-accent cursor-pointer"
//             >
//               Developed by Vipprow
//             </a>
//             {/* <span className="hover:text-accent cursor-pointer">
//               Terms of Service
//             </span> */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
