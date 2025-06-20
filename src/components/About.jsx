import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Award, Users, Calendar, MapPin } from 'lucide-react';
import CompanyModel from './3d/CompanyModel';

const stats = [
  { value: '2021', label: 'Founded', icon: Calendar },
  { value: '50+', label: 'Projects Completed', icon: Award },
  { value: '20+', label: 'Team Members', icon: Users },
  { value: 'Greater Noida', label: 'Location', icon: MapPin },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Innovant</h2>
          <p className="section-subtitle">
            Established in 2021, we're a team of passionate engineers dedicated to 
            delivering excellence in engineering services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Innovant was founded with a clear vision: to provide integrated solutions in engineering 
              that empower businesses to innovate and grow. Based in Greater Noida, we've quickly 
              established ourselves as a trusted partner for engineering services.
            </p>
            <p className="text-gray-600 mb-6">
              Our team comprises experts from diverse backgrounds, enabling us to address complex 
              challenges with innovative strategies. We believe in a collaborative and client-centric 
              approach, tailoring solutions to meet specific needs.
            </p>
            <p className="text-gray-600 mb-6">
              From rapid prototyping to full-scale production, we're with you every step of the way,
              committed to quality, innovation, and excellence in everything we do.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-3">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-700">{stat.value}</h4>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[500px] relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl overflow-hidden shadow-3d"
          >
            <Canvas>
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Suspense fallback={null}>
                <CompanyModel 
                  position={[0, 0, 0]} 
                  scale={1.5} 
                  rotation={[0, Math.PI / 4, 0]} 
                />
              </Suspense>
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Quality & Precision</h4>
              <p className="text-gray-600">
                We maintain the highest standards in all our work, ensuring precision engineering 
                and exceptional quality in every project.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Innovation</h4>
              <p className="text-gray-600">
                We embrace cutting-edge technologies and creative thinking to develop 
                innovative solutions for complex engineering challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Client Partnership</h4>
              <p className="text-gray-600">
                We build long-term relationships with our clients, working collaboratively 
                to understand their needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;