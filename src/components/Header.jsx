import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Terminal,
  FolderKanban,
  UserRound,
  Wrench,
  Mail,
  Moon,
  Sun,
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-space-black/80 backdrop-blur-md shadow-lg'
          : 'bg-deep-space-black/40 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-6">
          <a
            href="#"
            className="group flex items-center gap-2 text-xl font-bold text-white font-orbitron transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Terminal className="text-neon-cyan transition-all duration-300 group-hover:text-neon-purple" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan transition-all duration-300">
              AI BLUEPRINT
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="nav-link"
            >
              <FolderKanban size={18} className="text-neon-cyan" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              <UserRound size={18} className="text-neon-purple" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="nav-link"
            >
              <Wrench size={18} className="text-neon-cyan" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              <Mail size={18} className="text-neon-purple" />
              <span>Contact</span>
            </button>
            <div className="flex items-center gap-2 ml-4 border-l border-white/10 pl-4">
              <Moon size={18} className="text-nav-gray" />
              <Switch
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-neon-purple data-[state=unchecked]:bg-nav-gray"
              />
              <Sun size={18} className="text-nav-gray" />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={24} className="text-neon-purple" />
            ) : (
              <Menu size={24} className="text-neon-purple" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-deep-space-black/95 backdrop-blur-md border-t border-white/10 py-4 px-6 shadow-lg">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-3 text-nav-gray hover:text-white py-2 transition-colors"
            >
              <FolderKanban size={18} className="text-neon-cyan" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-3 text-nav-gray hover:text-white py-2 transition-colors"
            >
              <UserRound size={18} className="text-neon-purple" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="flex items-center gap-3 text-nav-gray hover:text-white py-2 transition-colors"
            >
              <Wrench size={18} className="text-neon-cyan" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-3 text-nav-gray hover:text-white py-2 transition-colors"
            >
              <Mail size={18} className="text-neon-purple" />
              <span>Contact</span>
            </button>
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <Moon size={18} className="text-nav-gray" />
              <Switch
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-neon-purple data-[state=unchecked]:bg-nav-gray"
              />
              <Sun size={18} className="text-nav-gray" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
