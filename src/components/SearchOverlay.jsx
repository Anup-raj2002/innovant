import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchData = [
    { title: 'Post Graduate Program in CAD', type: 'course', path: '/courses/post-graduate' },
    { title: 'PT Creo', type: 'course', path: '/courses/pt-creo' },
    { title: 'Solid Body', type: 'course', path: '/courses/solid-body' },
    { title: 'AutoCAD', type: 'course', path: '/courses/autocad' },
    { title: 'GD&T', type: 'course', path: '/courses/gdt' },
    { title: 'CATIA', type: 'course', path: '/courses/catia' },
    { title: 'About Us', type: 'page', path: '/#about' },
    { title: 'Services', type: 'page', path: '/#services' },
    { title: 'Portfolio', type: 'page', path: '/#portfolio' },
    { title: 'Contact', type: 'page', path: '/#contact' },
  ];

  useEffect(() => {
    if (searchTerm) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleResultClick = (path) => {
    onClose();
    setSearchTerm('');
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="container mx-auto px-4 pt-24"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white rounded-xl shadow-2xl max-w-3xl mx-auto overflow-hidden">
              <div className="p-4 flex items-center border-b">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search courses, pages, and more..."
                  className="flex-1 outline-none text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {results.length > 0 && (
                <div className="max-h-[60vh] overflow-y-auto p-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                      onClick={() => handleResultClick(result.path)}
                    >
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          result.type === 'course' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {result.type}
                        </span>
                        <h3 className="ml-3 font-medium">{result.title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {searchTerm && results.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  No results found for "{searchTerm}"
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;