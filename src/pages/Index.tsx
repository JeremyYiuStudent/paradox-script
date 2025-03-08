
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import SignupSection from '@/components/SignupSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Paradox Script | Interactive Storytelling Platform';
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
