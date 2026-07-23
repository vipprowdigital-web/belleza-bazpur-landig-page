import { motion } from "framer-motion";
import { Phone, MapPin, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-light relative overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 px-8"
          >
            <div>
              <h2 className="text-primary text-2xl md:text-5xl font-bold tracking-tighter leading-tight mb-3">
                Ready to Build Your <br />
                <span className="text-secondary normal font-serif">
                   Future in Beauty ?
                </span>
              </h2>
              <p className="text-secondary text-md md:text-lg leading-tight max-w-xl">
             Join Belleza Beauty School Bazpur and learn professional beauty skills with practical training, live model practice, certification and career guidance.
              </p>
              <p className="text-primary tracking-tight font-bold mt-4 text-xl">
                Learn today. Practice professionally. Start your career with confidence.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-2.5 bg-primary text-light rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary transition-all hover:bg-secondary"
              >
                <Calendar className="w-5 h-5 text-accent" />
                Book Free Counselling
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-2.5 bg-light text-primary border-2 border-primary rounded-full font-bold flex items-center justify-center gap-2 hover:bg-light transition-all"
              >
                <Phone className="w-5 h-5" />
                Request a Call Back
              </motion.button>
            </div>

            {/* Contact Details */}
            <div className="pt-8 border-t border-secondary/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">
                    Phone
                  </p>
                  <p className="text-primary font-bold text-lg leading-none">
                    +91 74099 40088
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">
                    Address
                  </p>
                  <p className="text-secondary font-semibold text-sm leading-relaxed max-w-sm">
                   Beria Road, near S.D.M Court, Bazpur, Uttarakhand 262401 
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Geometric Background Element */}
            <div className="absolute -inset-4 border-2 border-accent rounded-[3rem] translate-x-4 translate-y-4 -z-10" />

            <div className=" overflow-hidden relative group">
              <img
                src="/assets/images/Gemini_Generated_Image_cq6cy8cq6cy8cq6c.png"
                alt="Professional Beauty Training"
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-60" />

              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
