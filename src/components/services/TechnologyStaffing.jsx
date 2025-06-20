import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Laptop2, TrendingUp, Settings, Handshake, Zap, MessageSquare } from "lucide-react";

const TechnologyStaffing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCards = [
    {
      icon: <Users className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Skilled Technology Professionals",
      description: "We provide highly skilled technology professionals to help you build and scale your digital projects.",
    },
    {
      icon: <Laptop2 className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Custom Staffing Solutions",
      description: "Tailored staffing solutions to meet your specific project needs and timelines.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Rapid Deployment",
      description: "Quickly deploy top tech talent to accelerate your product development and innovation.",
    },
    {
      icon: <Settings className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Ongoing Support",
      description: "Continuous support and management of your technology teams for optimal performance.",
    },
    {
      icon: <Handshake className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Client-Centric Approach",
      description: "We work closely with clients to understand their unique challenges and deliver results.",
    },
    {
      icon: <Zap className="w-10 h-10 mb-4 text-orange-600" />,
      title: "Innovation Driven",
      description: "Stay ahead with access to the latest tech trends and innovative staffing strategies.",
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
            Technology Staffing Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Empowering your business with top-tier technology talent and innovative staffing solutions to drive your digital transformation.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
            Our Technology Staffing Services
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
            Why Choose Us?
          </h2>
          <ul className="space-y-6 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-4">✓</span>
              <span>Access to a vast pool of skilled technology professionals.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-4">✓</span>
              <span>Flexible staffing solutions for projects of any size and duration.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-4">✓</span>
              <span>Quick and efficient deployment of tech talent.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-4">✓</span>
              <span>Ongoing support and management for your technology teams.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-4">✓</span>
              <span>Innovative approaches to meet your unique business challenges.</span>
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
            Ready to Transform Your Tech Team?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Let us help you find the right technology professionals for your next project.
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

export default TechnologyStaffing;
