import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, Target, Zap } from 'lucide-react';

const ResultsSection: React.FC = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: "350%",
      label: "Average Revenue Growth",
      description: "Our clients see substantial revenue increases within the first year"
    },
    {
      icon: Users,
      metric: "200+",
      label: "Businesses Transformed",
      description: "From startups to enterprises, we've driven success across industries"
    },
    {
      icon: DollarSign,
      metric: "$50M+",
      label: "Revenue Generated",
      description: "Total additional revenue generated for our clients"
    },
    {
      icon: Clock,
      metric: "60%",
      label: "Time Savings",
      description: "Average reduction in operational overhead and manual processes"
    },
    {
      icon: Target,
      metric: "95%",
      label: "Goal Achievement Rate",
      description: "Percentage of projects that meet or exceed initial objectives"
    },
    {
      icon: Zap,
      metric: "3x",
      label: "Faster Implementation",
      description: "Speed improvement compared to traditional consulting approaches"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
            Results That Speak
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers don't lie. Our track record of success demonstrates the real impact 
            we deliver for businesses ready to grow and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-muted/30 rounded-2xl p-8 hover:bg-primary/5 transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <result.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-2">
                  {result.metric}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {result.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
