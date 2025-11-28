import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { to: 'features', label: 'Features' },
    { to: 'pricing', label: 'Pricing' },
    { to: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (target) => {
    if (isOpen) toggleMenu();

    if (target.startsWith('/')) {
        navigate(target);
        return;
    }

    if (isHomePage) {
      const element = document.getElementById(target);
      if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    } else {
      navigate(`/#${target}`);
    }
  };

  const renderNavLink = (link) => {
    if (isHomePage) {
      return (
        <ScrollLink
          key={link.to}
          to={link.to}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className="cursor-pointer text-lg text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          activeClass="text-white font-semibold"
          onClick={() => isOpen && toggleMenu()}
        >
          {link.label}
        </ScrollLink>
      );
    }
    return (
      <RouterLink
        key={link.to}
        to={`/#${link.to}`}
        className="cursor-pointer text-lg text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        {link.label}
      </RouterLink>
    );
  };
  
  const renderMobileNavLink = (link) => {
    return (
      <button
        key={link.to}
        onClick={() => handleNavClick(link.to)}
        className="cursor-pointer text-3xl text-gray-300 hover:text-white transition-colors"
      >
        {link.label}
      </button>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => handleNavClick(isHomePage ? 'hero' : '/')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            >
              MailRun-Orlando.com
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(renderNavLink)}
            </nav>

            <div className="md:hidden">
              <Button onClick={toggleMenu} variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-slate-900 z-40 h-screen md:hidden"
          >
            <div className="container mx-auto px-4 h-full flex flex-col">
              <div className="flex justify-between items-center h-20">
                <button onClick={() => handleNavClick(isHomePage ? 'hero' : '/')} className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer">
                  MailRun
                </button>
                <Button onClick={toggleMenu} variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
                {navLinks.map(renderMobileNavLink)}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;