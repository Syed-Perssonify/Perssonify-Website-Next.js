
import React, { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import ProcessSection from '@/components/sections/ProcessSection';
import ResultsSection from '@/components/sections/ResultsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import AnimatedSolutions from '@/components/sections/AnimatedSolutions';

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <AnimatedSolutions />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
