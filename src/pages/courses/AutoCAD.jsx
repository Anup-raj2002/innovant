import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DraftingCompass, Layers, Ruler, Cpu, Settings, Info, Award } from 'lucide-react';

const useCourseData = (courseId) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setCourse({
        id: courseId,
        name: "AutoCAD 2D-3D Design",
        description: "Master AutoCAD for engineering and architectural design.",
        features: [
          "2D drafting and annotation",
          "3D modeling and visualization",
          "Layer management",
          "Custom workflows",
        ],
        useCases: [
          "Engineering drawings",
          "Architectural plans",
          "Mechanical assemblies",
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

// Tailwind CSS Ruler (Measurement Scale) with transitions and animations
const MeasurementScale = () => (
  <div className="relative w-full max-w-[300px] mx-auto my-8 overflow-hidden group">
    <div className="h-8 bg-orange-500 rounded flex items-center transition-all duration-300 hover:scale-105 hover:bg-orange-600">
      {/* Major ticks */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={`tick-${i}`} className="relative h-8 flex items-center animate-pulse">
          <div className="absolute left-0 w-[2px] h-8 bg-white transition-all duration-300 group-hover:scale-y-110"></div>
          <span className="absolute left-1 top-9 text-xs text-orange-500 font-medium transition-all duration-300 group-hover:text-orange-700">
            {i * 10}
          </span>
        </div>
      ))}
    </div>
    {/* Minor ticks */}
    <div className="flex h-2 bg-orange-400 rounded-b transition-all duration-300 group-hover:bg-orange-500">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`minor-${i}`}
          className={`h-2 border-r border-white transition-all duration-300 ${i % 6 === 0 ? 'w-[20px]' : 'w-[10px]'}`}
        ></div>
      ))}
    </div>
  </div>
);

const AutoCAD = ({ courseId = "default" }) => {
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
          <MeasurementScale />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <FeatureCard
            icon={DraftingCompass}
            title="2D Drafting"
            description="Create precise technical drawings."
          />
          <FeatureCard
            icon={Layers}
            title="3D Modeling"
            description="Design and visualize 3D objects."
          />
          <FeatureCard
            icon={Ruler}
            title="Annotation"
            description="Add dimensions and details."
          />
          <FeatureCard
            icon={Cpu}
            title="Custom Workflows"
            description="Tailor tools to your projects."
          />
        </motion.div>

        <ContentSection
          icon={Settings}
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

export default AutoCAD;
