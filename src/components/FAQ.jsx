import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Innovant offer?",
      answer: "Innovant offers a range of engineering and technology services including engineering design, CAD modeling, rapid prototyping, technology staffing, and project-based learning solutions."
    },
    {
      question: "How do I get started with your engineering design services?",
      answer: "You can get started by contacting us through our website. Our team will discuss your requirements and guide you through the process."
    },
    {
      question: "What makes your technology staffing solutions unique?",
      answer: "Our technology staffing solutions are tailored to your specific needs, offering rapid deployment, ongoing support, and access to skilled professionals."
    },
    {
      question: "Do you provide training or courses?",
      answer: "Yes, we offer various training programs and courses in areas such as PTC Creo, AutoCAD, and other engineering design tools."
    },
    {
      question: "How can I contact Innovant for more information?",
      answer: "You can reach us via phone, email, or by filling out the contact form on our website. Our team will respond promptly to your inquiry."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Find answers to common questions about our services and solutions.
          </p>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <div className="px-8 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-left">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-orange-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-orange-600" />
                )}
              </button>
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-b-lg shadow-sm">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
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
            Still Have Questions?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Contact us for more information or to discuss your specific needs.
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

export default FAQ;
