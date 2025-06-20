import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, ChevronDown, ChevronUp } from "lucide-react";

const Blogs = () => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const toggleBlog = (id) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  const blogs = [
    {
      id: 1,
      title: "The Future of Engineering Design",
      excerpt: "Emerging technologies are transforming product development and engineering design, enabling faster prototyping and more efficient workflows.",
      fullContent: "Emerging technologies are transforming product development and engineering design, enabling faster prototyping and more efficient workflows. Innovations in digital tools are empowering engineers to create complex solutions with precision, agility, and sustainability at the forefront of every project.\n\nIn recent years, advancements in artificial intelligence (AI) and machine learning have begun to automate routine design tasks, allowing engineers to focus on creative problem-solving and innovation. The integration of virtual and augmented reality (VR/AR) into design processes is also revolutionizing how engineers visualize and interact with their models, leading to more intuitive and collaborative design experiences.\n\nCloud-based collaboration platforms are breaking down geographical barriers, enabling teams to work together in real-time from anywhere in the world. As a result, the engineering design process is becoming more dynamic, responsive, and inclusive, with an increased emphasis on user-centered design and rapid iteration. These trends are not only improving the quality and efficiency of engineering projects but are also helping organizations stay competitive in a rapidly evolving market. The future of engineering design lies in the seamless integration of advanced technologies, fostering a culture of continuous innovation and learning."
    },
    {
      id: 2,
      title: "Top Trends in Technology Staffing",
      excerpt: "The technology staffing landscape is evolving rapidly, with new hiring models and remote work becoming standard.",
      fullContent: "The technology staffing landscape is evolving rapidly, with new hiring models and remote work becoming standard. Companies are leveraging flexible staffing solutions to access top talent, scale teams efficiently, and drive innovation in an increasingly competitive market.\n\nThe rise of the gig economy and the widespread adoption of remote work have fundamentally changed how organizations approach talent acquisition. Businesses are now prioritizing skills and experience over traditional credentials, and are increasingly open to hiring contractors, freelancers, and remote employees. This shift is enabling companies to build diverse, agile teams that can adapt quickly to changing project requirements and market conditions.\n\nTechnology staffing firms are also playing a crucial role in helping organizations navigate this new landscape by providing access to specialized talent and offering end-to-end support for recruitment, onboarding, and ongoing management. As the demand for digital transformation continues to grow, the ability to quickly assemble and deploy skilled teams will be a key differentiator for businesses. The future of technology staffing will be defined by flexibility, collaboration, and a relentless focus on delivering value to both clients and candidates."
    },
    {
      id: 3,
      title: "Best Practices for CAD Modeling",
      excerpt: "Effective CAD modeling requires attention to detail and a structured approach.",
      fullContent: "Effective CAD modeling requires attention to detail and a structured approach. Adopting best practices such as modular design, regular file organization, and collaboration tools can significantly improve productivity and ensure high-quality outcomes for every engineering project.\n\nOne of the most important aspects of successful CAD modeling is maintaining a clear and consistent naming convention for files and components. This not only helps prevent confusion and errors but also makes it easier to collaborate with team members and manage revisions.\n\nAnother key practice is to use parametric modeling techniques, which allow engineers to make changes quickly and efficiently without having to rebuild models from scratch. Leveraging libraries of standard parts and templates can also save time and reduce the risk of errors. Collaboration tools, such as cloud-based platforms and version control systems, are essential for managing complex projects and ensuring that everyone is working with the latest information. Finally, regular reviews and quality checks are critical for identifying and addressing potential issues early in the design process. By following these best practices, engineers can maximize the value of CAD modeling and deliver innovative, high-quality solutions to their clients."
    },
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
            Innovant Blogs
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Stay updated with the latest insights, trends, and stories from the world of engineering and technology.
          </p>
        </div>
      </motion.div>

      {/* Blogs Section */}
      <div className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
            Featured Blog Posts
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <PenTool className="w-5 h-5 mr-2 text-orange-500" />
                    <span className="text-sm font-medium text-gray-500">Innovant Team</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{blog.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{blog.excerpt}</p>
                  <button
                    onClick={() => toggleBlog(blog.id)}
                    className="flex items-center justify-center text-orange-600 hover:text-orange-700 font-medium mt-4"
                  >
                    <span>Learn more</span>
                    {expandedBlogId === blog.id ? (
                      <ChevronUp className="w-5 h-5 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 ml-2" />
                    )}
                  </button>
                  {expandedBlogId === blog.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.fullContent}</p>
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
            Want to Share Your Story?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Connect with us to contribute or suggest topics for our next blog post.
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

export default Blogs;
