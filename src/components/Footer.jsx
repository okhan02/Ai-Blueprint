import React from 'react';
import { Github, Linkedin, X, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-blueprint-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-blueprint-accent font-semibold text-lg">
              AI Blueprint
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} | All Rights Reserved
            </p>
          </div>

          <div className="flex space-x-5">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-blueprint-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-blueprint-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Profile"
              className="text-gray-400 hover:text-blueprint-accent transition-colors"
            >
              <X size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              aria-label="Email Contact"
              className="text-gray-400 hover:text-blueprint-accent transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="text-gray-400 hover:text-blueprint-accent transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
