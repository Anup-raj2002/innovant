import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: '3D Printing', href: '/components/ThreeDPrinting' },
        { name: 'CAD Design', href: '/courses/AutoCAD' },
        { name: 'Engineering Design', href: '/courses/EngineeringDesign' },
        { name: 'Technology Staffing', href: '/courses/TechnologyStaffing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Academy', href: '/academy' },
        { name: 'Careers', href: '#careers' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/components/Blogs' },
        { name: 'Case Studies', href: '/components/CaseStudies' },
        { name: 'FAQs', href: '/components/FAQ' },
        { name: 'Terms & Conditions', href: '#terms' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Activity className="h-7 w-7 mr-2 text-primary-400" />
              <span className="text-2xl font-bold">Innovant</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Innovant provides integrated solutions in the engineering domain, focusing on areas such 
              as design, development, and prototyping. Established in 2021, we specialize in transforming 
              concepts into reality.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary-400" />
                <span className="text-gray-300">Greater Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-400" />
                <span className="text-gray-300">+91 93545 85048</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-400" />
                <span className="text-gray-300">info@innovant.co.in</span>
              </div>
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('#') ? (
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
          &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;   &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  © {new Date().getFullYear()} Innovant. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
