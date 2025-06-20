import React from 'react';
import { motion } from 'framer-motion';
import { Book, GraduationCap, Clock, Users, Award } from 'lucide-react';

const PostGraduate = () => {
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

  // Key features grid data
  const features = [
    { icon: Clock, label: "Duration", value: "12 Months" },
    { icon: Book, label: "Level", value: "Advanced" },
    { icon: Users, label: "Batch Size", value: "30 Students" },
    { icon: Award, label: "Certification", value: "Industry Recognized" }
  ];

  // Cards data
  const cards = [
    {
      icon: Book,
      title: "Program Overview",
      content: "This program gives you a thorough understanding of the design process. Students will be able to understand the methodologies in developing a model and gain knowledge on incorporating manufacturing aspects while designing a component."
    },
    {
      icon: GraduationCap,
      title: "Why Enroll?",
      content: (
        <ul className="list-disc pl-6">
          <li>Develop a keen understanding of how design engineers around the world design engineering components</li>
          <li>Learn how to incorporate different aspects of manufacturing into the designs</li>
          <li>Choose between two specializations: Sketching and Manufacturing</li>
        </ul>
      )
    }
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
            Post Graduate Program in CAD
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Master advanced CAD skills and prepare for top industry roles.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, label, value }, idx) => (
              <motion.div
                key={idx}
                className="flex items-center space-x-4"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-orange-100 rounded-full">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Program Overview & Why Enroll Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {cards.map(({ icon: Icon, title, content }, idx) => (
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
              <div className="prose max-w-none">
                {content}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Job Opportunities Section */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 mb-8 prose max-w-none"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            Job Opportunities
          </h2>
          <ul className="list-disc pl-6">
            <li>Design engineer (OEM/Tier 1)</li>
            <li>Plastic design engineer</li>
            <li>Sheet metal/ BIW design engineer</li>
            <li>Product design engineer</li>
            <li>Design and release engineer (D&R)</li>
            <li>Wiring harness engineer/ designer</li>
            <li>Seating design engineer</li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center"
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

export default PostGraduate;
