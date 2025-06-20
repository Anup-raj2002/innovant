import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, HardHat, FileSearch, Share2, Layers, Settings, Info } from 'lucide-react';

// Custom hook for fetching model data
const useModelData = (modelId) => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setModel({
        id: modelId,
        name: "Advanced Solid Modeling",
        description: "Explore the power of parametric and direct modeling for engineering applications.",
        features: [
          "Parametric and history-based modeling",
          "Finite Element Analysis (FEA) integration",
          "Export to STEP, IGES, STL, and more",
          "Collaborative design sharing",
          "Customizable templates and macros",
          "Scripting and automation support"
        ],
        useCases: [
          "Mechanical part design",
          "Assembly simulation",
          "Product prototyping",
          "Engineering analysis"
        ],
        resources: [
          "Tutorials and documentation",
          "Sample models and templates",
          "Community forums",
          "Technical support"
        ]
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [modelId]);

  return { model, loading };
};

// Feature Card Component with enhanced animation
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
    <div className="p-3 bg-orange-100 rounded-full mb-4">
      <Icon className="w-8 h-8 text-orange-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

// Content Section with animation
const ContentSection = ({ icon: Icon, title, items }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-8 mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <div className="flex items-center space-x-4 mb-6">
      <div className="p-3 bg-orange-100 rounded-full">
        <Icon className="w-8 h-8 text-orange-600" />
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

// Main SolidBody Component
const SolidBody = ({ modelId = "default" }) => {
  const { model, loading } = useModelData(modelId);

  if (loading) {
    return (
      <motion.div
        className="flex justify-center items-center min-h-[50vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
      </motion.div>
    );
  }

  if (!model) return <div>Model not found</div>;

  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 pb-16">
        {/* Hero/Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {model.name}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {model.description}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <FeatureCard
            icon={HardHat}
            title="Parametric Design"
            description="Customize model parameters for flexible engineering."
          />
          <FeatureCard
            icon={FileSearch}
            title="FEA Ready"
            description="Prepared for advanced simulation and analysis."
          />
          <FeatureCard
            icon={Box}
            title="Export Formats"
            description="Supports STEP, IGES, and STL exports."
          />
          <FeatureCard
            icon={Share2}
            title="Collaboration"
            description="Share and collaborate with team members."
          />
        </motion.div>

        {/* Features Section */}
        <ContentSection
          icon={Layers}
          title="Key Features"
          items={model.features}
        />

        {/* Use Cases Section */}
        <ContentSection
          icon={Settings}
          title="Use Cases"
          items={model.useCases}
        />

        {/* Resources Section */}
        <ContentSection
          icon={Info}
          title="Resources"
          items={model.resources}
        />

        {/* Enroll Now Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
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

export default SolidBody;
