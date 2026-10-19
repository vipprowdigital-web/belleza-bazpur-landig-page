import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import LeadForm from "./components/LeadForm";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import WhyChooseUs from "./components/WhyChooseUs";

import TrainingTimeline from "./components/TrainingTimeline";
import WhatYouGet from "./components/WhatYouGet";
import PortfolioSection from "./components/PortfolioSection";
import CareerOpportunities from "./components/CareerOpportunities";
import EligibilitySection from "./components/EligibilitySection";
import AdmissionsCTA from "./components/AdmissionsCTA";
import StudentExperience from "./components/StudentExperience";
import FAQs from "./components/FAQs";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import { baseUrl, subDomain } from "./utils/baseUrl";
import { useEffect, useState } from "react";

function App() {
  const [appConfig, setAppConfig] = useState({});
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchAppConfig = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/app-config/frontend?subdomain=${subDomain}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAppConfig(data.data || {});
        } else {
          console.error("Couldn't fetch app configuration.");
        }
      } catch {
        console.error("Error while fetching app configuration.");
      }
    };
    fetchAppConfig();
  }, []);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/gallery/frontend?subdomain=${subDomain}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setGallery(data.data || []);
        } else {
          console.error("Couldn't fetch gallery images.");
        }
      } catch {
        console.error("Error while fetching gallery images.");
      }
    };
    fetchGalleryImages();
  }, []);

  const phone = appConfig.phoneNumber;
  const address = appConfig.companyAddress;

  return (
    <div className="flex flex-col justify-center items-center bg-light">
      <HeroSection phone={phone} />
      <LeadForm address={address} phone={phone} />
      <Courses />
      <TrainingTimeline />
      <About />

      <WhyChooseUs />

      <WhatYouGet />
      <PortfolioSection />
      <CareerOpportunities />
      <Gallery gallery={gallery} />
      <EligibilitySection />
      <AdmissionsCTA />
      <StudentExperience />
      <FAQs />
      <FinalCTA address={address} phone={phone} />
      <Footer appConfig={appConfig} />
      <Navbar />
      {(phone || address?.[0]?.address) && (
      <div className="flex flex-col fixed bottom-5 left-5">
        <motion.div
          className="flex flex-col items-start mt-6 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {/* Phone */}
          {phone && (
          <motion.div
            className="flex items-center bg-primary text-light rounded-full overflow-hidden cursor-pointer"
            initial="collapsed"
            whileHover="expanded"
            animate="collapsed"
            variants={{
              collapsed: { width: 45 },
              expanded: { width: 220 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Fixed width icon container ensures the icon stays dead-center */}
            <div className="flex items-center justify-center w-11.25 h-11.25 shrink-0">
              <Phone size={18} />
            </div>

            <motion.span
              className="text-xs whitespace-nowrap pr-5"
              variants={{
                collapsed: { opacity: 0, x: -10 },
                expanded: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              +91 {phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
            </motion.span>
          </motion.div>
          )}

          {/* Address */}
          {address?.[0]?.address && (
          <motion.div
            className="flex items-center bg-primary text-light rounded-full overflow-hidden cursor-pointer"
            initial="collapsed"
            whileHover="expanded"
            animate="collapsed"
            variants={{
              collapsed: { width: 45 },
              expanded: { width: 380 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-center w-11.25 h-11.25 shrink-0">
              <MapPin size={18} />
            </div>

            <motion.span
              className="text-sm whitespace-nowrap pr-5 mr-5"
              variants={{
                collapsed: { opacity: 0, x: -10 },
                expanded: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              {address[0].address}
            </motion.span>
          </motion.div>
          )}
        </motion.div>
      </div>
      )}
    </div>
  );
}

export default App;
