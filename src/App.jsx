import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Academy from './components/Academy';
import Contact from './components/Contact';

// Lazy load your page components
const PostGraduate = React.lazy(() => import('./pages/courses/post-graduation'));
const PTCCreoPage = React.lazy(() => import('./pages/courses/PTCCreo'));
const SolidBodyPage = React.lazy(() => import('./pages/courses/SolidBody'));
const AutoCAD = React.lazy(() => import('./pages/courses/AutoCAD'));
const GD = React.lazy(() => import('./pages/courses/GD&T'));  
const CATIA= React.lazy(() => import('./pages/courses/CATIA'));
const TechnologyStaffing = React.lazy(() => import('./components/services/TechnologyStaffing'));
const EngineeringDesign = React.lazy(() => import('./components/services/EngineeringDesign'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Blogs = React.lazy(() => import('./components/Blogs')); 
const CaseStudies = React.lazy(() => import('./components/CaseStudies'));
const Printing=React.lazy(()=> import('./components/ThreeDPrinting'));
// Example of another lazy-loaded component
// Component for your main landing page sections
const HomePageContent = () => (
  <>
    <Hero />
    <Services />
    <Portfolio />
    <About />
    <Academy />
    <Contact />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="relative overflow-hidden">
        <Navbar />

        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Route for your main landing page */}
              <Route path="/" element={<HomePageContent />} />

              {/* Route for the Post Graduation Program page */}
              <Route path="/courses/post-graduation" element={<PostGraduate />} />

              {/* Route for the PTC Creo page */}
              <Route path="/courses/PTCCreo" element={<PTCCreoPage />} /> {/* <--- Use the lazy-loaded variable name here */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/courses/SolidBody" element={<SolidBodyPage />} /> 
              <Route path="/courses/AutoCAD" element={<AutoCAD />} />
              <Route path="/courses/GD&T" element={<GD />} />
              <Route path="/courses/CATIA" element={<CATIA />} />
              <Route path="/courses/TechnologyStaffing" element={<TechnologyStaffing />} />
              <Route path="/courses/EngineeringDesign" element={<EngineeringDesign />} />
              <Route path="/components/FAQ" element={<FAQ />} />
              <Route path="/components/Blogs" element={<Blogs />} />
              <Route path="/components/CaseStudies" element={<CaseStudies />} />
              <Route path="/components/ThreeDPrinting" element={<Printing />} />

              {/* Add more routes here as needed for other pages linked in your Navbar. */}
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;