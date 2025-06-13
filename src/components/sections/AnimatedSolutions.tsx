import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Cog, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const { scrollY } = useScroll();

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
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight * 0.8;
      const currentSection = Math.floor(scrollPosition / sectionHeight);
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  return (
    <section className="relative min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 min-h-[calc(100vh-5rem)]">
          {/* Left side - Navigation titles */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-8 sticky top-1/2 transform -translate-y-1/2 h-fit">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === index 
                    ? 'scale-110 text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveSection(index)}
              >
                <motion.h3
                  className="text-4xl md:text-5xl font-bold font-playfair text-center lg:text-left"
                  animate={{
                    scale: activeSection === index ? 1.1 : 1,
                    color: activeSection === index ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {section.title}
                </motion.h3>
                {activeSection === index && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="h-1 bg-primary rounded-full mt-2 origin-left"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-9 flex items-center">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className={`p-8 rounded-3xl bg-gradient-to-br ${
                sections[activeSection].color === 'primary' 
                  ? 'from-primary/10 to-primary/5' 
                  : 'from-accent/10 to-accent/5'
              } border-0 custom-shadow`}>
                <div className="flex flex-col lg:flex-row items-center lg:items-start mb-6">
                  <div className={`w-16 h-16 rounded-xl ${
                    sections[activeSection].color === 'primary' 
                      ? 'bg-primary/20' 
                      : 'bg-accent/20'
                  } flex items-center justify-center mb-4 lg:mb-0 lg:mr-4`}>
                    {(() => {
                      const Icon = sections[activeSection].icon;
                      return <Icon className={`w-8 h-8 ${
                        sections[activeSection].color === 'primary' 
                          ? 'text-primary' 
                          : 'text-accent'
                      }`} />;
                    })()}
                  </div>
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold font-playfair text-foreground mb-2">
                      {sections[activeSection].title} Solutions
                    </h2>
                    <p className="text-lg font-semibold text-foreground/80">
                      {sections[activeSection].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 text-lg text-center lg:text-left">
                  {sections[activeSection].description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-foreground text-lg text-center lg:text-left">Key Services:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {sections[activeSection].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex items-center text-muted-foreground"
                      >
                        <Zap className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Button asChild className="group">
                    <Link to={sections[activeSection].href}>
                      Explore {sections[activeSection].title} Solutions
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSolutions;
