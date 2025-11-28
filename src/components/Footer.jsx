import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  const footerSections = [
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', to: '/terms-and-conditions' },
        { name: 'Privacy Policy', to: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900/70 backdrop-blur-lg border-t border-slate-800 text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
        >
          {/* Brand Column */}
          <div className="space-y-3">
            <RouterLink
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              MailRun
            </RouterLink>
            <p className="max-w-xs text-xs text-gray-400 leading-snug">
              Your trusted local pickup and delivery service — fast, secure, and always on time.
            </p>
            <div className="flex space-x-3 pt-1">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 flex items-center justify-center bg-slate-800/50 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <p className="text-base font-semibold text-white mb-2">{section.title}</p>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <RouterLink
                      to={link.to}
                      className="hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link.name}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-4 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MailRun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;