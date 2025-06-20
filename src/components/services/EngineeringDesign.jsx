import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DraftingCompass, LayoutDashboard, Settings, Code, Database, Cpu, MessageSquare } from "lucide-react";

const EngineeringDesign = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCards = [
    {
      icon: <DraftingCompass className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Conceptualization",
      description: "Transform your ideas into detailed design concepts with our expert engineering team.",
    },
    {
      icon: <LayoutDashboard className="w-10 h-10 mb-4 text-orange-600" />,
      title: "CAD Modeling",
      description: "Precision CAD modeling for accurate representation and simulation of your products.",
    },
    {
      icon: <Settings className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Prototyping",
      description: "Rapid prototyping to validate designs and accelerate product development.",
    },
    {
      icon: <Code className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Simulation & Analysis",
      description: "Advanced simulation tools to test and optimize your designs for performance.",
    },
    {
      icon: <Database className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Data Management",
      description: "Efficient data management solutions for seamless collaboration and version control.",
    },
    {
      icon: <Cpu className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Manufacturing Support",
      description: "End-to-end support for manufacturing, from design validation to production.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="px-8 py-20 md:py-32"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-6">
            Engineering Design Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Empowering innovation through advanced engineering design, simulation, and prototyping services.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
            Our Engineering Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-l-4 hover:border-orange-600"
              >
                <div className="flex justify-center">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{card.title}</h3>
                <p className="text-gray-600 text-center">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-8 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
            Why Innovant for Engineering Design?
          </h2>
          <ul className="space-y-6 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-4">✓</span>
              <span>Expertise in a wide range of engineering disciplines.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-4">✓</span>
              <span>State-of-the-art CAD and simulation tools.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-4">✓</span>
              <span>Rapid prototyping to accelerate product development.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-4">✓</span>
              <span>Collaborative approach with clients for customized solutions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-4">✓</span>
              <span>End-to-end support from concept to manufacturing.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <motion.section
        className="py-16 md:py-20 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Partner with us for innovative engineering design solutions tailored to your needs.
          </p>
          <motion.button
            className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
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

export default EngineeringDesign;
