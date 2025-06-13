import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Target, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your bottom line.'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'From strategy to implementation, we move at the speed of business.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work as an extension of your team, not just another vendor.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Every solution is built for precision, scalability, and long-term success.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Uncover',
      description: 'We identify root causes of bottlenecks, scalability issues, and missed opportunities.'
    },
    {
      step: '02',
      title: 'Define',
      description: 'We define the solution space, validating what needs to be improved, built, or removed.'
    },
    {
      step: '03',
      title: 'Match',
      description: 'We match the right solution providers, tools, and technologies to your specific challenge.'
    },
    {
      step: '04',
      title: 'Orchestrate',
      description: 'We orchestrate the entire journey, from planning to implementation and ongoing refinement.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-foreground mb-6">
              We bring{' '}
              <span className="text-primary">growth</span>{' '}
              and{' '}
              <span className="text-primary">scale</span>{' '}
              to life
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We help businesses grow faster, scale with confidence, and solve what holds progress back where it matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/growth-solutions">
                  Explore Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two Solution Families */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Two Solution Families
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're launching something new or optimizing what's already working, 
              we deliver what your business needs to grow, adapt, and move faster.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-primary/10 to-primary/5 custom-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-playfair">Growth Solutions</CardTitle>
                  <CardDescription className="text-lg font-semibold">
                    High-Performance Marketing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    High-performance growth marketing that drives demand, accelerates acquisition, 
                    and amplifies brand impact. If your priority is to attract the right audience, 
                    convert consistently, and expand your market reach, our Growth Solutions are built for you.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/growth-solutions">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-accent/10 to-accent/5 custom-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-playfair">Strategic Solutions</CardTitle>
                  <CardDescription className="text-lg font-semibold">
                    Technology-Enhanced Operational Scaling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    High-ROI business process enhancement that streamlines operations, automates intelligently, 
                    and scales with precision. We help you improve efficiency and ensure operations scale without chaos.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/strategic-solutions">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our approach is built on partnership, precision, and proven results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center h-full border-0 bg-background custom-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-playfair">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with business leaders, operators, and technology stakeholders to drive results 
              through a structured, collaborative model.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold font-playfair mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold font-playfair text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how our Growth and Strategic Solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/growth-solutions">
                  View Our Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;