import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import ProcessSection from '@/components/sections/ProcessSection';
import { Process } from '@/components/sections/ResultsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import AnimatedSolutions from '@/components/sections/AnimatedSolutions';
import Head from 'next/head';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Perssonify - Growth & Scale Solutions</title>
        <meta name="description" content="We bring growth and scale to life. Helping businesses grow faster, scale with confidence, and solve what holds progress back." />
      </Head>
      <Layout>
        <div className="min-h-screen">
          <Hero />
          <AnimatedSolutions />
          <ProcessSection />
          <Process />
          <CTASection />
        </div>
      </Layout>
    </>
  );
};

export default Index;