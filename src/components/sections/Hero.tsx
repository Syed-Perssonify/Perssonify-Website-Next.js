import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge - Dark/Light mode responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm -mt-10"
          >
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            Growth & Strategic Solutions
          </motion.div>

          {/* Main Headline - Single line responsive */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight text-left"
          >
            <div className="flex flex-col">
              <span className="whitespace-nowrap">
                We bring{' '}
                <span className="text-primary relative inline-block">
                  growth
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-primary/20 dark:bg-primary/30 -z-10"
                  />
                </span>
              </span>
              <span className="whitespace-nowrap ml-4">
              and{' '}
                <span className="text-primary relative inline-block">
                  scale
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-primary/20 dark:bg-primary/30 -z-10"
                  />
                </span>
                {' '}to life
              </span>
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 dark:text-foreground/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl text-left"
          >
            We help businesses grow faster, scale with confidence, and solve what holds progress back where it matters most.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 justify-start px-2"
          >
            <Button 
              asChild 
              size="lg" 
              className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">
                Start Your Growth Journey
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
        </div>
      </div>
    </section>
  );
};

export default Hero;