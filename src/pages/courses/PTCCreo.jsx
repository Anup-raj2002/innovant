import React from 'react';
import { motion } from 'framer-motion';
import { Box, HardHat, GraduationCap, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Box,
    title: 'Parametric Modeling',
    description: 'Master core 3D modeling techniques.',
  },
  {
    icon: HardHat,
    title: 'Assembly Design',
    description: 'Learn to build complex product structures.',
  },
  {
    icon: GraduationCap,
    title: 'Project-Based Learning',
    description: 'Apply skills with practical, real-world projects.',
  },
];

const courseModules = [
  'Creo Interface & Navigation',
  '2D Sketching & 3D Feature Creation',
  'Part & Assembly Modeling',
  'Basic Drawing & Documentation',
  'Introduction to Surfacing',
  'Project Work & Portfolio Development',
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const PTCCreo = () => {
  return (
    <div className="pt-16 bg-white text-gray-800 font-sans">
      {/* Hero Section - White background with orange overlay */}
      <section className="relative py-20 md:py-24 flex items-center justify-center min-h-[50vh] bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-100 opacity-70 z-0"></div>
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-6"
          >
            <HardHat className="w-16 h-16 md:w-20 md:h-20 text-orange-500 mx-auto" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Master <span className="text-orange-500">PTC Creo</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            Learn industry-standard CAD modeling to design and engineer products with precision.
          </motion.p>
          <motion.button
            className="btn btn-primary bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            Enroll Now
          </motion.button>
        </div>
      </section>

      {/* Overview Section - White */}
      <motion.section
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            About This Course
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
            Our PTC Creo course provides a strong foundation in 3D CAD, enabling you to create, analyze, and optimize product designs. Perfect for aspiring mechanical engineers, product designers, and anyone looking to enhance their CAD skills.
          </p>
        </div>
      </motion.section>

      {/* Key Learnings/Features Section - White with orange accents */}
      <motion.section
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
            What You'll <span className="text-orange-500">Learn</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200"
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="p-3 bg-orange-100 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Course Modules Section - White */}
      <motion.section
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
            Course <span className="text-orange-500">Curriculum</span>
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {courseModules.map((module, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg shadow-sm"
                variants={fadeIn}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-orange-500 font-semibold text-xl">✓</span>
                <span className="text-md text-gray-800">{module}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section - Orange background */}
      <motion.section
        className="py-16 md:py-20 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Start Your Design Journey?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Join our PTC Creo course and unlock your potential in product design and engineering.
          </p>
          <motion.button
            className="btn btn-secondary bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Contact Us</span>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default PTCCreo;
