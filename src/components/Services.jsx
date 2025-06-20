import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Printer as Printer3d, Grid3x3, Cog, Users } from 'lucide-react';
import PrintingModel from './3d/PrintingModel';
import ToolingModel from './3d/ToolingModel';

const serviceData = [
  {
    id: 1,
    title: '3D Printing',
    description: 'Rapid prototyping and production services using advanced additive manufacturing technologies.',
    icon: Printer3d,
    model: 'printing',
    color: 'bg-primary-500',
  },
  {
    id: 2,
    title: 'CAD Design',
    description: 'Comprehensive computer-aided design services transforming concepts into detailed digital models.',
    icon: Grid3x3,
    model: 'cad',
    color: 'bg-secondary-500',
  },
  {
    id: 3,
    title: 'Engineering & Tooling',
    description: 'End-to-end engineering design solutions including tool design and prototype development.',
    icon: Cog,
    model: 'tooling',
    color: 'bg-accent-500',
  },
  {
    id: 4,
    title: 'Technology Staffing',
    description: 'Customized staffing solutions connecting businesses with skilled professionals in engineering.',
    icon: Users,
    model: 'staffing',
    color: 'bg-primary-700',
  },
];

const ServiceCard = ({ service, index }) => {
  const ModelComponent = service.id === 1 ? PrintingModel : 
                         service.id === 3 ? ToolingModel : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-xl shadow-3d overflow-hidden group hover:shadow-lg transition-all duration-300"
    >
      <div className="h-48 relative overflow-hidden">
        <div className={`absolute inset-0 ${service.color} opacity-10`}></div>
        
        {ModelComponent ? (
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <ModelComponent 
                position={[0, 0, 0]} 
                scale={1} 
                rotation={[0, 0, 0]} 
              />
            </Suspense>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1} 
            />
          </Canvas>
        ) : (
          <div className="flex items-center justify-center h-full">
            <service.icon className="w-24 h-24 text-gray-300 group-hover:text-primary-500 transition-colors duration-300" />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 flex items-center">
          <service.icon className="w-5 h-5 mr-2 text-primary-600" />
          {service.title}
        </h3>
        <p className="text-gray-600">{service.description}</p>
        <a 
          href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="mt-4 inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
        >
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of engineering solutions to bring your vision to life,
            from concept to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;