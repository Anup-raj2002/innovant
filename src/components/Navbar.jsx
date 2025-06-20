import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
// Removed: import Logo from './Logo'; - Replaced with inline placeholder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  // searchOpen state and setSearchOpen are removed as requested

  // Define your menu items
  const menuItems = [
    { name: 'Home', link: '/' },
    {
      name: 'Courses',
      link: '/courses',
      hasDropdown: true,
      icon: BookOpen,
      dropdownItems: [
        {
          name: 'Post Graduation Program',
          link: '/courses/post-graduation',
          description: 'Advanced mechanical engineering concepts',
          duration: '12 months'
        },
        {
          name: 'PTC Creo',
          link: '/courses/PTCCreo',
          description: 'Master parametric modeling',
          duration: '3 months'
        },
        {
          name: 'Solid Body',
          link: '/courses/SolidBody',
          description: 'Advanced solid modeling',
          duration: '4 months'
        },
        {
          name: 'AutoCAD',
          link: '/courses/AutoCAD',
          description: '2D and 3D design fundamentals',
          duration: '2 months'
        },
        {
          name: 'GD&T',
          link: '/courses/GD&T',
          description: 'Geometric dimensioning and tolerancing',
          duration: '2 months'
        },
        {
          name: 'CATIA',
          link: '/courses/CATIA',
          description: 'Advanced 3D modeling and surface design',
          duration: '4 months'
        }
      ]
    },
    { name: 'About', link: '/about' },
    {
      name: 'Success Stories',
      link: '/success',
      hasDropdown: true,
      icon: Award,
      dropdownItems: [
        {
          name: 'Placements',
          link: '/success/placements',
          description: 'Our students at top companies',
          highlight: '100% placement rate'
        },
        {
          name: 'Success Stories',
          link: '/success/stories',
          description: 'Student testimonials and achievements',
          highlight: '5000+ success stories'
        }
      ]
    },
    { name: 'Contact', link: '/contact' }
  ];

  const handleDropdownHover = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-md py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Always link to home route */}
          <Link to="/">
            {/* Placeholder for Logo component */}
            <div className="flex items-center text-2xl font-bold text-gray-900">
              <span className="text-primary-600">INNOVANT</span>ACADEMY
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleDropdownHover(index)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.hasDropdown ? (
                  <button className="flex items-center space-x-1 font-medium text-gray-800 hover:text-primary-500 transition-colors">
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  // Always use Link for main menu items
                  <Link
                    to={item.link}
                    className="font-medium text-gray-800 hover:text-primary-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                      >
                        <div className="p-2">
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            // Always use Link for dropdown items
                            <Link
                              key={idx}
                              to={dropdownItem.link}
                              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-primary-50 transition-colors"
                            >
                              <div className="flex-1">
                                <p className="font-medium text-gray-800">{dropdownItem.name}</p>
                                <p className="text-sm text-gray-600">{dropdownItem.description}</p>
                                <p className="text-sm text-primary-600 mt-1">
                                  {dropdownItem.duration || dropdownItem.highlight}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* "Get Started" button - assuming it's a route now */}
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white rounded-lg mt-4"
            >
              <div className="px-4 py-2">
                {menuItems.map((item, index) => (
                  <div key={index} className="py-2">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                          className="flex items-center w-full text-left py-2 font-medium text-gray-800"
                          aria-expanded={activeDropdown === index}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-2"
                            >
                              {item.dropdownItems.map((dropdownItem, idx) => (
                                // Always use Link for mobile dropdown items
                                <Link
                                  key={idx}
                                  to={dropdownItem.link}
                                  className="block py-2 px-3 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-500"
                                  onClick={() => setIsOpen(false)} // Close mobile menu when clicked
                                >
                                  <p className="font-medium">{dropdownItem.name}</p>
                                  <p className="text-sm text-gray-500">{dropdownItem.description}</p>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Always use Link for mobile main menu items
                      <Link
                        to={item.link}
                        className="block py-2 font-medium text-gray-800 hover:text-primary-500"
                        onClick={() => setIsOpen(false)} // Close mobile menu when clicked
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                {/* "Get Started" button - assuming it's a route now */}
                <Link
                  to="/contact"
                  className="btn btn-primary w-full my-4"
                  onClick={() => setIsOpen(false)} // Close mobile menu when clicked
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
