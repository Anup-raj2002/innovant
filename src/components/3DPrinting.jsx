import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Printer, ChevronDown, ChevronUp } from "lucide-react";

const Printing3D = () => {
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  const toggleService = (id) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  // Example 3D printing services and projects
  const services = [
    {
      id: 1,
      title: "Rapid Prototyping",
      excerpt: "Accelerate product development with our rapid prototyping solutions, turning ideas into physical models quickly.",
      fullContent: "Innovant’s rapid prototyping service enables businesses to bring concepts to life with minimal lead time. Using advanced 3D printing technologies, we produce high-quality physical models for design validation, functional testing, and stakeholder presentations. Our approach reduces development cycles, lowers costs, and helps you identify design improvements early in the process. Whether you need a single prototype or a small batch for user testing, our team delivers precision and reliability."
    },
    {
      id: 2,
      title: "Custom Manufacturing",
      excerpt: "Produce custom parts and components tailored to your specifications with our 3D printing expertise.",
      fullContent: "With custom manufacturing, Innovant leverages 3D printing to create parts that meet your exact requirements. Our engineers work closely with clients to optimize designs for manufacturability, material selection, and performance. From jigs and fixtures to end-use components, we ensure each part is produced with attention to detail and quality. Our flexible manufacturing process supports low-volume production runs, enabling you to test new products or supply specialized components without large upfront investments."
    },
    {
      id: 3,
      title: "Design for Additive Manufacturing",
      excerpt: "Optimize your designs for additive manufacturing to unlock the full potential of 3D printing.",
      fullContent: "Design for Additive Manufacturing (DfAM) is essential for maximizing the benefits of 3D printing. Innovant’s team specializes in redesigning components to take advantage of additive manufacturing capabilities, such as complex geometries, lightweight structures, and integrated assemblies. We provide expert guidance on material selection, orientation, and support structures to ensure optimal print quality and performance. Our DfAM services help you reduce material waste, improve product functionality, and accelerate time-to-market."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-8 py-20 md:py-32"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-6">
            3D Printing Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Transform your ideas into reality with our advanced 3D printing solutions.
          </p>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
            Our 3D Printing Offerings
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Printer className="w-5 h-5 mr-2 text-orange-500" />
                    <span className="text-sm font-medium text-gray-500">Innovant Team</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{service.excerpt}</p>
                  <button
                    onClick={() => toggleService(service.id)}
                    className="flex items-center justify-center text-orange-600 hover:text-orange-700 font-medium mt-4"
                  >
                    <span>Learn more</span>
                    {expandedServiceId === service.id ? (
                      <ChevronUp className="w-5 h-5 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 ml-2" />
                    )}
                  </button>
                  {expandedServiceId === service.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{service.fullContent}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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
            Ready to Start Your 3D Printing Project?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Contact us to discuss your requirements and get a quote.
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

export default Printing3D;
