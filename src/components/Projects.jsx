import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Code2,
  ArrowRight,
  ArrowDown,
  Zap,
  FileInput,
  Cog,
  BadgeCheck,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Dashboard',
    description:
      'A real-time analytics dashboard with AI-powered insights and predictive modeling.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400',
    tags: ['React', 'TypeScript', 'TensorFlow.js', 'D3.js'],
    links: {
      demo: '#',
      github: '#',
    },
    caseStudy: {
      input:
        'Client needed advanced data visualization with predictive capabilities to monitor business metrics in real-time.',
      process: [
        'Implemented TensorFlow.js for on-device ML predictions',
        'Built custom D3.js visualizations for complex data representation',
        'Created an adaptive alert system using anomaly detection algorithms',
      ],
      output:
        'Delivered a dashboard that reduced decision-making time by 40% and increased forecast accuracy by 25%.',
    },
  },
  {
    id: 2,
    title: 'Neural Interface',
    description:
      'A brain-computer interface prototype for controlling digital environments with thoughts.',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400',
    tags: ['Python', 'PyTorch', 'WebGL', 'C++'],
    links: {
      demo: '#',
    },
    caseStudy: {
      input:
        'Research lab needed an interface to translate neural signals into digital commands for assistive technology development.',
      process: [
        'Developed signal processing pipeline using PyTorch',
        'Created real-time visualization system with WebGL',
        'Implemented adaptive learning algorithms to improve signal interpretation',
      ],
      output:
        'Created a prototype with 85% command recognition accuracy and 200ms response time, enabling basic digital navigation through thought alone.',
    },
  },
  {
    id: 3,
    title: 'Quantum Computing Simulator',
    description:
      'Educational platform for learning quantum computing principles through interactive simulations.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400',
    tags: ['React', 'Three.js', 'WebAssembly', 'Qiskit'],
    links: {
      demo: '#',
      github: '#',
    },
    caseStudy: {
      input:
        'University needed an accessible platform to teach quantum computing concepts to students with varying technical backgrounds.',
      process: [
        'Built interactive visualizations of quantum phenomena using Three.js',
        'Implemented quantum circuit simulator with WebAssembly for performance',
        'Integrated with Qiskit for authentic quantum programming experience',
      ],
      output:
        'Platform adopted by 3 universities, with students showing 60% better comprehension of quantum concepts compared to traditional teaching methods.',
    },
  },
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 blueprint-heading">
            AI System Outputs
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of integrated solutions demonstrating multi-domain
            expertise and technical capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Collapsible
              key={project.id}
              open={expandedId === project.id}
              onOpenChange={() => toggleExpand(project.id)}
              className="h-full"
            >
              <Card className="project-card overflow-hidden flex flex-col h-full relative group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blueprint-accent/10 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="blueprint-button py-2 flex items-center gap-2">
                    <Zap size={18} className="animate-pulse" /> View Case Study
                  </div>
                </div>

                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blueprint-dark/80"></div>
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <HoverCard key={index}>
                        <HoverCardTrigger>
                          <span className="tech-badge cursor-help flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-blueprint-accent mr-1"></div>
                            {tag}
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="blueprint-card border-blueprint-accent">
                          Technology: {tag}
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>

                  <CollapsibleTrigger className="flex items-center gap-2 text-blueprint-accent hover:text-blueprint-highlight focus:outline-none transition-colors w-full justify-between mt-auto">
                    <span className="flex items-center">
                      <Code2 size={16} className="mr-1" /> Case Study
                    </span>
                    {expandedId === project.id ? (
                      <ArrowDown size={16} className="transition-transform" />
                    ) : (
                      <ArrowRight size={16} className="transition-transform" />
                    )}
                  </CollapsibleTrigger>
                </div>
              </Card>

              <CollapsibleContent>
                <div className="blueprint-card mt-2 p-6 border-t-2 border-blueprint-accent animate-fade-in">
                  <div className="mb-4">
                    <div className="flex items-center text-white font-medium mb-2">
                      <FileInput
                        size={18}
                        className="mr-2 text-blueprint-accent"
                      />
                      <h4 className="text-lg">Input</h4>
                    </div>
                    <p className="text-gray-400 pl-6">
                      {project.caseStudy.input}
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center text-white font-medium mb-2">
                      <Cog size={18} className="mr-2 text-blueprint-accent" />
                      <h4 className="text-lg">Process</h4>
                    </div>
                    <ul className="text-gray-400 pl-6 space-y-1">
                      {project.caseStudy.process.map((step, i) => (
                        <li key={i} className="flex items-start">
                          <div className="min-w-4 mr-2 text-blueprint-accent">
                            •
                          </div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center text-white font-medium mb-2">
                      <BadgeCheck
                        size={18}
                        className="mr-2 text-blueprint-accent"
                      />
                      <h4 className="text-lg">Output</h4>
                    </div>
                    <p className="text-gray-400 pl-6">
                      {project.caseStudy.output}
                    </p>
                  </div>

                  <div className="flex gap-3 mt-6 pt-2 border-t border-blueprint-light">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="text-blueprint-accent hover:text-blueprint-highlight flex items-center gap-1"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="text-blueprint-accent hover:text-blueprint-highlight flex items-center gap-1"
                      >
                        <Github size={16} /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="blueprint-button flex items-center gap-2">
            <Code2 size={18} /> View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
