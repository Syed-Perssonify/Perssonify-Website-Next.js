import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Perssonify transformed our entire growth strategy. We went from struggling to scale to achieving 300% growth in just 8 months. Their strategic approach and execution are unmatched.",
      rating: 5,
      company: "TechStart Inc."
    },
    {
      name: "Michael Chen",
      role: "COO, Global Dynamics",
      content: "The automation solutions they implemented saved us 40 hours per week and reduced errors by 90%. Our operations are now running like clockwork.",
      rating: 5,
      company: "Global Dynamics"
    },
    {
      name: "Emily Rodriguez",
      role: "CMO, GrowthCorp",
      content: "Their marketing strategies didn't just increase our leads – they increased quality leads. Our conversion rates improved by 150% while reducing acquisition costs.",
      rating: 5,
      company: "GrowthCorp"
    },
    {
      name: "David Thompson",
      role: "Founder, InnovateLab",
      content: "Working with Perssonify was a game-changer. They didn't just consult – they became part of our team and delivered real, measurable results.",
      rating: 5,
      company: "InnovateLab"
    },
    {
      name: "Lisa Park",
      role: "VP Operations, ScaleTech",
      content: "The process automation they designed eliminated bottlenecks we didn't even know we had. Our team can now focus on strategic work instead of manual tasks.",
      rating: 5,
      company: "ScaleTech"
    },
    {
      name: "Robert Wilson",
      role: "CEO, NextGen Solutions",
      content: "From strategic planning to execution, Perssonify exceeded every expectation. They're not just service providers – they're growth partners.",
      rating: 5,
      company: "NextGen Solutions"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            the transformations we've delivered together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 custom-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary/30 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary font-medium">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
