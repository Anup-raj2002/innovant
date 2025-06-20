import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, ChevronDown, ChevronUp } from "lucide-react";

const CaseStudies = () => {
  const [expandedCaseId, setExpandedCaseId] = useState(null);

  const toggleCase = (id) => {
    setExpandedCaseId(expandedCaseId === id ? null : id);
  };

  // Sample case studies inspired by Innovant and industry practices
  const caseStudies = [
    {
      id: 1,
      title: "Offshore GCC Setup for SaaS Firm",
      excerpt: "Innovant helped a leading SaaS firm establish an offshore Global Capability Center, enabling cost-efficient expansion and access to global talent.",
      fullContent: "Innovant partnered with a leading SaaS firm to set up an offshore Global Capability Center (GCC). This initiative enabled the client to scale operations efficiently while reducing costs. By leveraging our expertise in global team integration and process optimization, we facilitated seamless communication, knowledge transfer, and operational alignment. The GCC now supports core business functions, accelerates product development, and enhances customer support, positioning the client for sustainable growth in competitive markets."
    },
    {
      id: 2,
      title: "IoT-Based Energy Monitoring for SmartGrid",
      excerpt: "Deployed real-time energy monitoring solutions using IoT sensors to improve efficiency and reduce operational costs for SmartGrid.",
      fullContent: "SmartGrid faced challenges in monitoring energy consumption across distributed assets. Innovant implemented a robust IoT-based solution, integrating sensors and cloud analytics for real-time data collection and visualization. This enabled SmartGrid to identify inefficiencies, optimize energy usage, and reduce operational costs. The solution also improved predictive maintenance, minimizing downtime and ensuring reliable service for end customers."
    },
    {
      id: 3,
      title: "AI-Driven Financial Risk Assessment",
      excerpt: "Automated financial risk assessments using AI-driven models, significantly reducing manual processing time and improving accuracy.",
      fullContent: "A financial services client needed to streamline risk assessment workflows. Innovant developed AI-driven models that analyze large datasets to identify risk factors and generate actionable insights. This automation reduced manual processing time by over 70%, improved accuracy, and enabled faster decision-making. The solution empowered the client to manage risks proactively and maintain regulatory compliance."
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
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Explore real-world examples of how Innovant delivers innovative solutions for clients across industries.
          </p>
        </div>
      </motion.div>

      {/* Case Studies Section */}
      <div className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
            Our Success Stories
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <ClipboardList className="w-5 h-5 mr-2 text-orange-500" />
                    <span className="text-sm font-medium text-gray-500">Innovant Team</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{caseStudy.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{caseStudy.excerpt}</p>
                  <button
                    onClick={() => toggleCase(caseStudy.id)}
                    className="flex items-center justify-center text-orange-600 hover:text-orange-700 font-medium mt-4"
                  >
                    <span>Learn more</span>
                    {expandedCaseId === caseStudy.id ? (
                      <ChevronUp className="w-5 h-5 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 ml-2" />
                    )}
                  </button>
                  {expandedCaseId === caseStudy.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{caseStudy.fullContent}</p>
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
            Want to Discuss a Project?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Contact us to explore how we can help you achieve your business goals.
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

export default CaseStudies;
