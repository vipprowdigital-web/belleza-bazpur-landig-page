import { motion } from "framer-motion";
import {
  UserCheck,
  Sparkles,
  GraduationCap,
  Heart,
  Rocket,
  Coffee,
  RefreshCw,
} from "lucide-react";

const candidates = [
  {
    text: "Beginners who want to start a career",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    text: "Students looking for skill-based education",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    text: "Homemakers who want financial independence",
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    text: "Salon staff who want to upgrade skills",
    icon: <RefreshCw className="w-5 h-5" />,
  },
  {
    text: "Freelancers who want certification",
    icon: <UserCheck className="w-5 h-5" />,
  },
  {
    text: "Makeup lovers who want professional training",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    text: "Anyone who wants to start a salon or beauty business",
    icon: <Sparkles className="w-5 h-5" />,
  },
];

const EligibilitySection = () => {
  return (
    <section className="py-24 px-6 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Who Can Join{" "}
            <span className="text-secondary normal font-serif">
              Belleza Beauty School?
            </span>
          </motion.h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {candidates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "var(--accent)" }}
              className="p-6 rounded-3xl border border-secondary/10 bg-light/30 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary text-accent flex items-center justify-center mb-4 shadow-lg shadow-primary">
                {item.icon}
              </div>
              <p className="text-primary tracking-tight font-semibold text-sm leading-tight">
                {item.text}
              </p>
            </motion.div>
          ))}

          {/* Special "Growth" Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="p-6 rounded-3xl bg-accent text-primary flex flex-col items-center justify-center text-center lg:col-span-1 shadow-xl shadow-accent/20"
          >
            <div className="text-2xl font-bold mb-1 tracking-tighter">
              Join Now
            </div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-80">
              No Experience Required
            </p>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-secondary font-bold text-lg leading-relaxed normal">
            "No previous experience is required. You can start from basic level
            and grow step by step."
          </p>

          {/* Visual Step Indicator */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="h-px w-12 bg-secondary/20" />
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 1 ? "bg-primary" : "bg-secondary"}`}
                />
              ))}
            </div>
            <span className="h-px w-12 bg-secondary/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilitySection;
