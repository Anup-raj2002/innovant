import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DraftingCompass, Ruler, Layers, Settings, Info, Award } from 'lucide-react';

const useCourseData = (courseId) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setCourse({
        id: courseId,
        name: "Geometric Dimensioning & Tolerancing (GD&T)",
        description: "Master the language of engineering drawings with GD&T standards for clear, functional, and manufacturable designs.",
        features: [
          "Understanding GD&T symbols and controls",
          "Applying functional tolerances to features",
          "Establishing datum reference frames",
          "Interpreting feature control frames",
        ],
        useCases: [
          "Precision manufacturing",
          "Assembly fit and function",
          "Quality control and inspection",
          "Engineering design intent",
        ],
        certification: "Certified by Innovant Academy"
      });
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [courseId]);

  return { course, loading };
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
    whileHover={{ 
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 200 }
    }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
  >
    <div className="p-3 bg-orange-100 rounded-full mb-4 transition-all duration-300 hover:bg-orange-200">
      <Icon className="w-8 h-8 text-orange-600 transition-transform group-hover:rotate-12" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const ContentSection = ({ icon: Icon, title, items }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-8 mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <div className="flex items-center space-x-4 mb-6">
      <div className="p-3 bg-orange-100 rounded-full transition-all duration-300 hover:bg-orange-200">
        <Icon className="w-8 h-8 text-orange-600 transition-transform group-hover:rotate-12" />
      </div>
      <h2 className="text-2xl font-bold text-orange-600">{title}</h2>
    </div>
    <ul className="list-disc pl-6">
      {items.map((item, idx) => (
        <motion.li
          key={idx}
          className="mb-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + idx * 0.05 }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const InfoRow = ({ icon: Icon, title, value }) => (
  <motion.div
    className="flex items-center space-x-3"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 }}
  >
    <div className="p-2 bg-orange-100 rounded-full transition-all duration-300 hover:bg-orange-200">
      <Icon className="w-5 h-5 text-orange-600 transition-transform group-hover:rotate-12" />
    </div>
    <div>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  </motion.div>
);

// Visual GD&T Feature Control Frame (using Tailwind CSS)
const GDTSymbol = ({ children, isDatum = false, isTolerance = false, isFeature = false }) => (
  <div
    className={`inline-block px-3 py-2 rounded border-2 font-mono font-bold text-center transition-all duration-300 group-hover:scale-105 ${
      isDatum
        ? "border-blue-500 bg-blue-100 text-blue-800"
        : isTolerance
        ? "border-green-500 bg-green-100 text-green-800"
        : isFeature
        ? "border-purple-500 bg-purple-100 text-purple-800"
        : "border-gray-400 bg-gray-100 text-gray-800"
    }`}
  >
    {children}
  </div>
);

const GDTControlFrame = () => (
  <motion.div
    className="relative w-full max-w-[400px] mx-auto my-8 overflow-hidden group"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <div className="flex items-center justify-center space-x-2 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 group-hover:bg-gray-100">
      <GDTSymbol isFeature>⌀</GDTSymbol>
      <GDTSymbol isTolerance>0.1</GDTSymbol>
      <GDTSymbol>A</GDTSymbol>
      <GDTSymbol>B</GDTSymbol>
      <GDTSymbol>C</GDTSymbol>
      <span className="text-gray-700 font-medium">(MMC)</span>
    </div>
    
  </motion.div>
);

const GD = ({ courseId = "default" }) => {
  const { course, loading } = useCourseData(courseId);

  if (loading) {
    return (
      <motion.div
        className="flex justify-center items-center min-h-[50vh] pt-[80px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
      </motion.div>
    );
  }

  if (!course) return <div className="pt-[80px]">Course not found</div>;

  return (
    <div className="pt-[80px] bg-white min-h-screen">
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {course.name}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {course.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <InfoRow icon={Award} title="Certification" value={course.certification} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <GDTControlFrame />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <FeatureCard
            icon={DraftingCompass}
            title="Symbols & Controls"
            description="Master GD&T symbols and feature controls."
          />
          <FeatureCard
            icon={Ruler}
            title="Tolerances"
            description="Apply tolerances for manufacturability."
          />
          <FeatureCard
            icon={Layers}
            title="Datum Reference"
            description="Establish datum reference frames."
          />
          <FeatureCard
            icon={Settings}
            title="Control Frames"
            description="Interpret feature control frames."
          />
        </motion.div>

        <ContentSection
          icon={Info}
          title="What You'll Learn"
          items={[...course.features, ...course.useCases]}
        />

        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default GD;
