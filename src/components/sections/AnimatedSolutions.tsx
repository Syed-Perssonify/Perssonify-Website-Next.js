import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Cog, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type IconProps = {
  className?: string;
};

type Section = {
  title: string;
  icon: React.ComponentType<IconProps>;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
  color: 'primary' | 'accent';
};

const AnimatedSolutions: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const sections: Section[] = [
    {
      title: "Growth",
      icon: TrendingUp,
      subtitle: "High-Performance Marketing",
      description: "Attract the right audience, convert consistently, and expand your market reach with our end-to-end growth marketing strategy and execution.",
      features: [
        "Performance Marketing & Paid Media",
        "Social Media Marketing & Brand Engagement", 
        "Email Marketing & Marketing Automation",
        "Conversion Rate Optimization (CRO)",
        "SEO & Website Growth",
        "Creative Solutions"
      ],
      href: "/growth-solutions",
      color: "primary"
    },
    {
      title: "Strategic",
      icon: Cog,
      subtitle: "Technology-Enhanced Operational Scaling",
      description: "Improve efficiency, automate intelligently, and ensure operations scale without chaos through high-ROI tailored strategy and implementations.",
      features: [
        "Process & Workflow Automation",
        "Digital Systems Enablement",
        "Custom Solution Engineering",
        "Enterprise Evolution & Strategic Transformation",
        "Cross-Functional Solutions",
        "Compliance & Governance"
      ],
      href: "/strategic-solutions",
      color: "accent"
    },
    {
      title: "Scale",
      icon: Target,
      subtitle: "Sustainable Business Expansion",
      description: "Build robust foundations that support exponential growth while maintaining quality and operational excellence.",
      features: [
        "Infrastructure Optimization",
        "Team Structure & Development",
        "Quality Assurance Systems",
        "Performance Monitoring",
        "Risk Management",
        "Global Expansion Support"
      ],
      href: "/contact",
      color: "primary"
    },
    {
      title: "Transform",
      icon: Zap,
      subtitle: "Revolutionary Business Evolution",
      description: "Completely reimagine your business model and operations for the digital age with cutting-edge innovation and strategic transformation.",
      features: [
        "Digital Transformation",
        "Business Model Innovation",
        "Cultural Change Management",
        "Technology Integration",
        "Future-Ready Strategies",
        "Innovation Labs"
      ],
      href: "/contact",
      color: "accent"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      
      // Only calculate if the container is in view
      if (containerTop <= window.innerHeight && containerTop + containerHeight >= 0) {
        const scrollProgress = Math.abs(containerTop) / (containerHeight - window.innerHeight);
        const sectionIndex = Math.min(
          Math.floor(scrollProgress * sections.length), 
          sections.length - 1
        );
        
        setActiveSection(Math.max(0, sectionIndex));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
    // Smooth scroll to make the section more visible
    if (containerRef.current) {
      const targetScroll = (index / sections.length) * (containerRef.current.offsetHeight - window.innerHeight);
      window.scrollTo({
        top: containerRef.current.offsetTop + targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-background"
      style={{ height: `${sections.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-12 gap-8 h-full items-center">
            {/* Left side - Navigation titles */}
            <div className="lg:col-span-3 flex flex-col justify-center space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`cursor-pointer transition-all duration-500 ${
                    activeSection === index 
                      ? 'scale-105 text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:scale-102'
                  }`}
                  onClick={() => handleSectionClick(index)}
                >
                  <h3 className="text-4xl md:text-5xl font-bold font-playfair text-center lg:text-left transition-all duration-500">
                    {section.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Right side - Content */}
            <div className="lg:col-span-9 flex items-center">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full"
              >
                <div className={`p-8 rounded-3xl bg-gradient-to-br ${
                  sections[activeSection].color === 'primary' 
                    ? 'from-primary/10 to-primary/5' 
                    : 'from-accent/10 to-accent/5'
                } border border-border/50 shadow-2xl backdrop-blur-sm`}>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl ${
                        sections[activeSection].color === 'primary' 
                          ? 'bg-primary/20' 
                          : 'bg-accent/20'
                      } flex items-center justify-center mb-4 lg:mb-0 lg:mr-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {(() => {
                        const Icon = sections[activeSection].icon;
                        return <Icon className={`w-8 h-8 ${
                          sections[activeSection].color === 'primary' 
                            ? 'text-primary' 
                            : 'text-accent'
                        }`} />;
                      })()}
                    </motion.div>
                    <div className="text-center lg:text-left">
                      <motion.h2 
                        className="text-3xl font-bold font-playfair text-foreground mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {sections[activeSection].title} Solutions
                      </motion.h2>
                      <motion.p 
                        className="text-lg font-semibold text-foreground/80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {sections[activeSection].subtitle}
                      </motion.p>
                    </div>
                  </div>

                  <motion.p 
                    className="text-muted-foreground leading-relaxed mb-8 text-lg text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {sections[activeSection].description}
                  </motion.p>

                  <motion.div 
                    className="space-y-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-semibold text-foreground text-lg text-center lg:text-left">Key Services:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {sections[activeSection].features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                          className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                          <Zap className={`w-4 h-4 mr-3 flex-shrink-0 ${
                            sections[activeSection].color === 'primary' 
                              ? 'text-primary' 
                              : 'text-accent'
                          }`} />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button asChild className="group hover:scale-105 transition-transform duration-300">
                      <Link to={sections[activeSection].href}>
                        Explore {sections[activeSection].title} Solutions
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSolutions;