import React from 'react';
import { motion } from 'framer-motion';
import {
  DraftingCompass,
  Box,
  Network,
  SquareStack,
  File,
  Rocket,
  Layers,
  Wrench,
  Factory,
  BadgeCheck,
} from 'lucide-react';

const CATIA = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  // Learning Paths
  const learningPaths = [
    {
      icon: DraftingCompass,
      title: "CATIA V5 New User Express",
      items: [
        "Getting Started in the Interface",
        "Sketching",
        "Part Design",
        "Assembly Design",
        "Wireframe & Surface Design",
        "Wrap-It-Up Workshops"
      ]
    },
    {
      icon: Rocket,
      title: "CATIA V6 New User Express",
      items: [
        "Getting Started in the Interface",
        "Sketching",
        "Part Design",
        "Assembly Design",
        "Wireframe & Surfacing"
      ]
    }
  ];

  // Workshops
  const workshops = [
    { icon: Layers, title: "DMU Navigator" },
    { icon: File, title: "Drafting" },
    { icon: SquareStack, title: "Intermediate Surfacing" },
    { icon: Box, title: "Advanced Part Design" },
    { icon: Network, title: "Advanced Assembly Design" },
    { icon: SquareStack, title: "Advanced Surfacing" },
    { icon: Wrench, title: "Generative Sheet Metal Design" },
    { icon: Factory, title: "Aerospace Foundations" }
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 pb-16">
        {/* Hero/Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            CATIA V5 & V6 Training
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Master the software that shapes the future of design
          </motion.p>
          {/* "Certified by Innovant Academy" Badge */}
          <motion.div
            className="inline-flex items-center bg-white text-orange-600 font-bold py-2 px-4 rounded-full shadow-lg mt-4"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <BadgeCheck className="w-6 h-6 mr-2" />
            Certified by Innovant Academy
          </motion.div>
        </motion.div>

        {/* Learning Paths */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {learningPaths.map(({ icon: Icon, title, items }, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-orange-600">{title}</h2>
              </div>
              <ul className="list-disc pl-6">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx} className="mb-2">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Workshops */}
        <motion.div
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-orange-600">Workshops</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {workshops.map(({ icon: Icon, title }, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-orange-100 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-orange-600" /> {/* Icon size reduced */}
                </div>
                <h3 className="font-semibold">{title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* "Enroll Now" Button (at the end of the page) */}
        <motion.div
          className="flex justify-center pt-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <motion.button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CATIA;
