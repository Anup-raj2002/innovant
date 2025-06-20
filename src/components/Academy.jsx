import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Lightbulb, BookOpen, AlignCenterVertical as Certificate, Users } from 'lucide-react';
import AcademyModel from './3d/AcademyModel';

const academyFeatures = [
  {
    icon: BookOpen,
    title: 'Specialized Curriculum',
    description: 'Industry-aligned courses developed by practicing engineering professionals.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from industry veterans with extensive practical experience.',
  },
  {
    icon: Certificate,
    title: 'Professional Certification',
    description: 'Earn recognized certifications to enhance your professional portfolio.',
  },
  {
    icon: Lightbulb,
    title: 'Hands-on Projects',
    description: 'Apply your knowledge to real-world engineering challenges.',
  },
];

const courses = [
  {
    title: 'CAD Fundamentals',
    duration: '6 weeks',
    level: 'Beginner',
    bgColor: 'bg-primary-100',
  },
  {
    title: 'Advanced 3D Modeling',
    duration: '8 weeks',
    level: 'Intermediate',
    bgColor: 'bg-secondary-100',
  },
  {
    title: '3D Printing Mastery',
    duration: '10 weeks',
    level: 'Advanced',
    bgColor: 'bg-accent-100',
  },
];

const Academy = () => {
  return (
    <section id="academy" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Innovant Academy</h2>
          <p className="section-subtitle">
            Empowering the next generation of engineering professionals through specialized training and 
            hands-on learning experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold mb-6">Developing Engineering Excellence</h3>
            <p className="text-gray-600 mb-6">
              The Innovant Academy is our initiative focused on skill development in design engineering 
              and related fields. We believe in nurturing talent and helping individuals reach their 
              full potential through quality education and practical training.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {academyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Featured Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${course.bgColor} p-6 rounded-lg hover:shadow-md transition-all`}
                  >
                    <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration: {course.duration}</span>
                      <span className="text-primary-600 font-medium">{course.level}</span>
                    </div>
                    <a 
                      href="#" 
                      className="mt-4 inline-block text-primary-600 font-medium hover:underline"
                    >
                      Learn more
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[400px] md:h-[600px] relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl overflow-hidden shadow-sm"
          >
            <Canvas>
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Suspense fallback={null}>
                <AcademyModel 
                  position={[0, 0, 0]} 
                  scale={2} 
                  rotation={[0, Math.PI / 4, 0]} 
                />
              </Suspense>
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={1}
              />
            </Canvas>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:max-w-xl mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Engineering Skills?</h3>
            <p className="text-primary-100">
              Join Innovant Academy today and take the first step towards becoming a skilled 
              engineering professional. Our expert-led programs combine theoretical knowledge 
              with practical applications to prepare you for real-world challenges.
            </p>
          </div>
          <a href="#contact" className="btn bg-white text-primary-600 hover:bg-gray-100 shadow-lg hover:shadow-xl">
            Enroll Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Academy;