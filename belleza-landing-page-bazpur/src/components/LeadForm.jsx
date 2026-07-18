import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Pin, Phone, Link } from "lucide-react";
import { baseUrl } from "../utils/baseUrl";

// ─── Course Data ─────────────────────────────────────────────
const courses = [
  { id: 1, name: "Master in Cosmetology", category: "combo" },
  { id: 2, name: "Diploma in Cosmetology", category: "combo" },
  { id: 3, name: "Certificate in Cosmetology", category: "combo" },
  { id: 4, name: "Certificate in Self Grooming", category: "makeup" },
  {
    id: 5,
    name: "Certificate in International Makeup Artistry",
    category: "makeup",
  },
  {
    id: 6,
    name: "Certificate in Professional Makeup Artistry",
    category: "makeup",
  },
  { id: 7, name: "Certificate in Makeup Artistry", category: "makeup" },
  {
    id: 8,
    name: "Certificate in International Nail Artistry",
    category: "nails",
  },
  {
    id: 9,
    name: "Certificate in Professional Nail Artistry",
    category: "nails",
  },
  { id: 10, name: "Certificate in Nail Artistry", category: "nails" },
  { id: 11, name: "Certificate in Permanent Hair Extension", category: "hair" },
  { id: 12, name: "Certificate in Barbering", category: "hair" },
  {
    id: 13,
    name: "Certificate in International Hair Styling",
    category: "hair",
  },
  { id: 14, name: "Certificate in Hair Styling", category: "hair" },
  {
    id: 15,
    name: "Certificate in Professional Hair Craftsmanship",
    category: "hair",
  },
  { id: 16, name: "Certificate in Hair Craftsmanship", category: "hair" },
  { id: 17, name: "Certificate in Eye Lashes Extension", category: "beauty" },
  { id: 18, name: "Certificate in Aesthetician", category: "beauty" },
  { id: 19, name: "Certificate in Beauty Therapist", category: "beauty" },
  { id: 20, name: "Certificate in Skincare", category: "beauty" },
];

const categoryLabel = {
  combo: "Combo & Cosmetology",
  makeup: "Makeup",
  nails: "Nail Artistry",
  hair: "Hair",
  beauty: "Beauty & Skin",
};

const groupedCourses = Object.entries(categoryLabel).map(([key, label]) => ({
  label,
  options: courses.filter((course) => course.category === key),
}));

const locations = [
  { value: "haldwani", label: "Haldwani" },
  { value: "dehradun", label: "Dehradun" },
  { value: "bajpur", label: "Bajpur" },
  { value: "rudrapur", label: "Rudrapur" },
];

const features = [
  "Expert Guidance",
  "Flexible Batches",
  "Professional Certification",
  "Career Support",
];

const initialData = {
  name: "",
  phone: "",
  courseName: "",
  preferredLocation: "",
  message: "",
};

// ─── Validation ─────────────────────────────────────────────
const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name is too short";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[+]?[\d\s-]{8,15}$/.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number";
  }

  if (!data.courseName) {
    errors.courseName = "Please select a course";
  }

  if (!data.preferredLocation) {
    errors.preferredLocation = "Please select a location";
  }

  return errors;
};

// ─── Reusable Components ────────────────────────────────────
const FieldLabel = ({ label, error }) => (
  <label
    className={`text-xs font-semibold tracking-widest uppercase ${
      error ? "text-red-700" : "text-secondary"
    }`}
  >
    {label}
  </label>
);

const ErrorMsg = ({ error }) => (
  <AnimatePresence>
    {error && (
      <motion.span
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        className="text-xs text-red-700"
      >
        {error}
      </motion.span>
    )}
  </AnimatePresence>
);

const inputCls = (hasError) =>
  [
    "w-full px-4 py-3 rounded-xl text-sm",
    "bg-light outline-none transition-all duration-200",
    "placeholder:text-secondary/70",
    hasError
      ? "border border-red-400 text-primary focus:border-red-500 focus:ring-2 focus:ring-red-100"
      : "border border-secondary/30 text-primary focus:border-primary focus:ring-2 focus:ring-secondary/20",
  ].join(" ");

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Main Component ─────────────────────────────────────────
const LeadForm = ({ address, phone }) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const contactInfo = [
    address?.[0] && {
      Icon: Pin,
      text: address[0].address,
    },
    {
      Icon: Phone,
      text: phone
        ? `+91 ${phone.replace(/(\d{5})(\d{5})/, "$1 $2")}`
        : "+91 90123 60088",
    },
    {
      Icon: Link,
      text: "www.bellezaschool.com",
    },
  ].filter(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    console.log("API_URL:", API_URL);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          courseName: formData.courseName,
          preferredLocation: formData.preferredLocation,
          message: formData.message || "No message added",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Lead form error:", data);
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData(initialData);
      setErrors({});
    } catch (error) {
      console.log("Lead form submit error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-light px-2 pt-20 pb-24 sm:py-24 md:px-8"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="mb-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-secondary">
          ✦ Enroll Today ✦
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Begin Your{" "}
          <span className="text-secondary normal font-serif">
            Beauty Journey
          </span>
        </h2>

        <div className="mx-auto mt-4 h-0.5 w-16 bg-secondary/40" />
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 md:flex-row"
      >
        {/* Left Panel */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-primary px-5 py-5 md:w-2/5 md:px-10 md:py-14">
          <div className="absolute inset-y-0 right-0 w-px bg-accent/40" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Free Counselling
              </p>

              <h3 className="mb-4 font-serif text-3xl font-black leading-tight tracking-tight text-light md:text-4xl">
                Get Admission & Course Details
              </h3>

              <p className="text-md font-light leading-relaxed text-light">
                Fill in your details and our counsellor will contact you with
                course information, batch details, admission process, and career
                guidance.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-5 sm:mt-8 space-y-1 sm:space-y-3"
            >
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-md font-light text-accent">
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-5 sm:mt-10"
          >
            <div className="mb-4 h-px bg-accent/40" />

            <ul className="space-y-2">
              {contactInfo.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <span className="text-accent">
                    <Icon size={17} />
                  </span>
                  <span className="text-md font-light text-light">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-light px-4 py-5 md:px-10 md:py-14 border border-secondary/30 rounded-bl-3xl sm:rounded-bl-none sm:rounded-tr-3xl rounded-br-3xl">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-100 flex-col items-center justify-center gap-5 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl text-light shadow-lg shadow-primary/20"
                >
                  ✓
                </motion.div>

                <h3 className="font-serif text-3xl font-bold text-primary">
                  We'll Be in Touch!
                </h3>

                <p className="max-w-xs text-sm leading-relaxed text-secondary">
                  Our counsellor will contact you shortly with everything you
                  need to start your beauty journey.
                </p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setStatus("idle")}
                  className="mt-2 cursor-pointer rounded-full bg-primary px-8 py-3 text-sm font-semibold tracking-wide text-light shadow-md shadow-primary/20 transition-all hover:bg-secondary"
                >
                  Submit Another Enquiry
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Name + Mobile */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel label="Full Name" error={errors.name} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={inputCls(!!errors.name)}
                    />
                    <ErrorMsg error={errors.name} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FieldLabel label="Phone Number" error={errors.phone} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="00000 00000"
                      className={inputCls(!!errors.phone)}
                    />
                    <ErrorMsg error={errors.phone} />
                  </div>
                </motion.div>

                {/* Course */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-1.5"
                >
                  <FieldLabel
                    label="Interested Course"
                    error={errors.courseName}
                  />

                  <div className="relative">
                    <select
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleChange}
                      className={`${inputCls(
                        !!errors.courseName
                      )} cursor-pointer appearance-none pr-10 ${
                        !formData.courseName
                          ? "text-secondary"
                          : "text-primary"
                      }`}
                    >
                      <option value="" disabled>
                        Select a Course
                      </option>

                      {groupedCourses.map(({ label, options }) => (
                        <optgroup key={label} label={label}>
                          {options.map((course) => (
                            <option key={course.id} value={course.name}>
                              {course.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>

                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[9px] text-secondary">
                      ▼
                    </span>
                  </div>

                  <ErrorMsg error={errors.courseName} />
                </motion.div>

                {/* Location */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-1.5"
                >
                  <FieldLabel
                    label="Preferred Location"
                    error={errors.preferredLocation}
                  />

                  <div className="relative">
                    <select
                      name="preferredLocation"
                      value={formData.preferredLocation}
                      onChange={handleChange}
                      className={`${inputCls(
                        !!errors.preferredLocation
                      )} cursor-pointer appearance-none pr-10 ${
                        !formData.preferredLocation
                          ? "text-secondary"
                          : "text-primary"
                      }`}
                    >
                      <option value="" disabled>
                        Select Location
                      </option>

                      {locations.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>

                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[9px] text-secondary">
                      ▼
                    </span>
                  </div>

                  <ErrorMsg error={errors.preferredLocation} />
                </motion.div>

                {/* Message */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-1.5"
                >
                  <FieldLabel label="Message Optional" />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific queries or questions?"
                    className={`${inputCls(false)} resize-none leading-relaxed`}
                  />
                </motion.div>

                {/* Error Banner */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                    whileTap={status !== "loading" ? { scale: 0.97 } : {}}
                    className={`w-full rounded-xl py-3 text-md font-semibold tracking-wide text-light transition-all duration-200 ${
                      status === "loading"
                        ? "cursor-not-allowed bg-secondary"
                        : "cursor-pointer bg-primary hover:bg-secondary hover:shadow-xl hover:shadow-primary/20"
                    }`}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2.5">
                        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-light/30 border-t-light" />
                        Sending...
                      </span>
                    ) : (
                      "Get Course Details →"
                    )}
                  </motion.button>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="-mt-1 text-center text-xs leading-relaxed text-secondary"
                >
                  By submitting, you agree to be contacted by a Belleza
                  counsellor. No spam, ever.
                </motion.p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <style>{`
        select option {
          color: #3d1020;
          background: #fff8f3;
        }

        select optgroup {
          color: #7d1a3a;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default LeadForm;
