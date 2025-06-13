
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Linkedin, Twitter, Facebook, Youtube, Shield, Lock, CheckCircle, Award, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'Growth Solutions', href: '/growth-solutions' },
      { name: 'Strategic Solutions', href: '/strategic-solutions' },
      { name: 'Performance Marketing', href: '/growth-solutions#performance-marketing' },
      { name: 'Process Automation', href: '/strategic-solutions#automation' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
    resources: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/resources' },
      { name: 'Industry Insights', href: '/insights' },
      { name: 'FAQs', href: '/faq' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Compliance', href: '/compliance' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/perssonify' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/perssonify' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/perssonify' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/perssonify' }
  ];

  const certifications = [
    { name: 'ISO Certified', icon: Shield },
    { name: 'GDPR Compliant', icon: Lock },
    { name: '99.99% Uptime', icon: CheckCircle },
    { name: 'Award-Winning', icon: Award }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Link to="/" className="inline-block mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <TrendingUp size={24} color="#fff" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary font-playfair">Perssonify</h3>
                    <p className="text-sm text-muted-foreground">Growth & Scale Platform</p>
                  </div>
                </div>
              </Link>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                We bring growth and scale to life. Helping businesses grow faster, 
                scale with confidence, and solve what holds progress back.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (609) 510-2061</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>stefan@perssonify.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>United States</span>
                </div>
              </div>
            </motion.div>

            {/* Solutions Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2 font-playfair">Stay Updated</h4>
                <p className="text-muted-foreground">
                  Get the latest growth insights and platform updates delivered to your inbox.
                </p>
              </div>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-muted/30 py-6 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0"
          >
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} Perssonify. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={16} className="text-primary" />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <cert.icon size={12} className="text-primary" />
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-muted/50 py-4 px-4">
        <div className="container mx-auto">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            Perssonify is a business growth platform. We help businesses grow faster, scale with confidence, 
            and solve what holds progress back where it matters most. No legal or financial advice is provided. 
            Results may vary based on individual circumstances and market conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
