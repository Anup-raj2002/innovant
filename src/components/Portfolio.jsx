import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CadModel from './3d/CadModel';
import PrintingModel from './3d/PrintingModel';
import ToolingModel from './3d/ToolingModel';

const projects = [
  {
    id: 1,
    title: 'Automotive Component Design',
    category: 'CAD Design',
    description: 'Precision-engineered automotive parts designed with advanced CAD tools.',
    modelType: 'cad',
  },
  {
    id: 2,
    title: 'Medical Device Prototype',
    category: '3D Printing',
    description: 'Rapid prototyping for innovative medical devices using biocompatible materials.',
    modelType: 'printing',
  },
  {
    id: 3,
    title: 'Industrial Tooling Solution',
    category: 'Engineering Design',
    description: 'Custom tooling designed for specialized manufacturing processes.',
    modelType: 'tooling',
  },
  {
    id: 4,
    title: 'Aerospace Component Optimization',
    category: 'CAD Design',
    description: 'Lightweight aerospace components optimized through advanced simulation.',
    modelType: 'cad',
  },
  {
    id: 5,
    title: 'Consumer Product Prototype',
    category: '3D Printing',
    description: 'Functional prototypes for consumer products with complex geometries.',
    modelType: 'printing',
  },
  {
    id: 6,
    title: 'Production Line Automation',
    category: 'Engineering Design',
    description: 'End-to-end design of automated production systems for increased efficiency.',
    modelType: 'tooling',
  },
];

const categories = ['All', 'CAD Design', '3D Printing', 'Engineering Design'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getModelComponent = (type) => {
    switch(type) {
      case 'cad':
        return CadModel;
      case 'printing':
        return PrintingModel;
      case 'tooling':
        return ToolingModel;
      default:
        return CadModel;
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Explore our portfolio of engineering projects showcasing our expertise in CAD design, 
            3D printing, and comprehensive engineering solutions.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-transparent text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const ModelComponent = getModelComponent(project.modelType);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-3d transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-56 relative">
                  <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <Suspense fallback={null}>
                      <ModelComponent 
                        position={[0, 0, 0]} 
                        scale={1} 
                        rotation={[0, Math.PI * 2 * Math.random(), 0]} 
                      />
                    </Suspense>
                    <OrbitControls 
                      enableZoom={false} 
                      enablePan={false} 
                      autoRotate
                      autoRotateSpeed={2}
                    />
                  </Canvas>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary-600 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-72 sm:h-96 relative">
                <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                  <ambientLight intensity={0.7} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <Suspense fallback={null}>
                    {React.createElement(getModelComponent(selectedProject.modelType), {
                      position: [0, 0, 0],
                      scale: 1.2,
                      rotation: [0, 0, 0],
                    })}
                  </Suspense>
                  <OrbitControls enableZoom enablePan />
                </Canvas>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm font-medium text-primary-600 mb-1">
                      {selectedProject.category}
                    </div>
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Project Details</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>Client: Industrial Manufacturing Co.</li>
                      <li>Timeline: 8 weeks</li>
                      <li>Technologies: SolidWorks, Autodesk Fusion 360</li>
                      <li>Materials: High-grade aluminum, polymer composites</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenge & Solution</h4>
                    <p className="text-gray-600">
                      The client needed a lightweight yet durable component that could withstand extreme conditions.
                      Our team developed an innovative design using advanced simulation to optimize the structure
                      while reducing material usage by 30%.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Request Similar Project
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;