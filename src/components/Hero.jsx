import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CadModel from './3d/CadModel';
import EngineeringScene from './3d/EngineeringScene';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="home" className="relative pt-24 min-h-screen w-full overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjk3MzE2IiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <EngineeringScene position={[0, 0, 0]} scale={3} rotation={[0, 0, 0]} />
          </Suspense>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-6rem)] items-center container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="gradient-border bg-white p-8">
              <span className="text-primary-500 font-semibold mb-4 block">
                Transform Your Engineering Career
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Master
                <span className="text-gradient block mt-2">
                  Mechanical Design
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-600">
                Industry-aligned courses in CAD, GD&T, and advanced mechanical engineering. 
                Learn from experts and get placed in top companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#courses" className="btn btn-primary">
                  Explore Courses
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Get Started
                </a>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="card-hover bg-white p-4 rounded-lg border border-primary-100">
                  <div className="text-2xl font-bold text-primary-500 mb-1">5000+</div>
                  <div className="text-gray-600">Students Placed</div>
                </div>
                <div className="card-hover bg-white p-4 rounded-lg border border-primary-100">
                  <div className="text-2xl font-bold text-primary-500 mb-1">100%</div>
                  <div className="text-gray-600">Placement Rate</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block h-[600px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent rounded-2xl" />
            <Canvas>
              <ambientLight intensity={0.6} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Suspense fallback={null}>
                <CadModel 
                  position={[0, 0, 0]} 
                  scale={1.5} 
                  rotation={[0, Math.PI / 4, 0]}
                  onLoad={() => setIsLoaded(true)}
                />
              </Suspense>
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <p className="text-sm mb-2 text-primary-500">Scroll to explore</p>
        <div className="w-6 h-10 rounded-full border-2 border-primary-500 flex justify-center mx-auto">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;