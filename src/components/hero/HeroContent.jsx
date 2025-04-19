import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Braces } from 'lucide-react';

export const HeroContent = () => {
  return (
    <div className="container mx-auto px-4 z-10 py-32">
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        <h1 className="mb-6 font-oswald">
          <span className="text-5xl md:text-7xl text-white font-medium">
            Hi, I'M{' '}
          </span>
          <span className="text-5xl md:text-7xl text-white font-bold">
            OSAMA
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white font-oswald mb-8">
          Creative Web Developer | AI-Powered Digital Experiences
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            className="blueprint-button group"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white group"
          >
            <Braces className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            View Source
          </Button>
        </div>
      </div>
    </div>
  );
};
