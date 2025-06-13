import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Business Growth Transformation"
          className="w-full h-full object-cover brightness-150"
        />
        {/* Overlay gradient - responsive to theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40 dark:from-background/90 dark:via-background/70 dark:to-background/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-playfair text-foreground mb-4 sm:mb-6 leading-tight"
          >
            Transform Your Business Growth
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 dark:text-foreground/80 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-2"
          >
            Scale with confidence and achieve sustainable growth
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center px-2"
          >
            <Button 
              asChild 
              size="lg" 
              className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-background/50 dark:bg-background/30 backdrop-blur-sm border-border/50 hover:bg-background/70 dark:hover:bg-background/50 hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-2"
          >
            {[
              { number: '200+', label: 'Businesses Scaled' },
              { number: '350%', label: 'Average Growth' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center p-4 rounded-lg bg-background/20 dark:bg-background/10 backdrop-blur-sm border border-border/20 dark:border-border/10 hover:bg-background/30 dark:hover:bg-background/20 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary font-playfair mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-foreground/80 dark:text-foreground/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-foreground/60 dark:border-foreground/40 rounded-full flex justify-center hover:border-primary transition-colors duration-300">
          <div className="w-1 h-2 sm:h-3 bg-foreground/60 dark:bg-foreground/40 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;