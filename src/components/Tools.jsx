import React from 'react';
import {
  Code2,
  Database,
  Cpu,
  FileCode,
  LineChart,
  Bot,
  Network,
  Braces,
  Github,
  FileInput,
  CloudCog,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const tools = [
  {
    name: 'Primary Engine',
    icon: <Bot size={24} />,
    proficiency: 95,
    description: 'GitHub Copilot, ChatGPT, Claude',
    link: 'https://github.com/features/copilot',
  },
  {
    name: 'Neural Networks',
    icon: <Network size={24} />,
    proficiency: 88,
    description: 'TensorFlow, PyTorch, Custom Architectures',
    link: 'https://www.tensorflow.org/',
  },
  {
    name: 'Visual Processor',
    icon: <LineChart size={24} />,
    proficiency: 85,
    description: 'DALL·E, Midjourney, Stable Diffusion',
    link: 'https://openai.com/dall-e-3',
  },
  {
    name: 'Natural Language',
    icon: <FileCode size={24} />,
    proficiency: 92,
    description: 'BERT, GPT, LLaMA, Fine-tuned Models',
    link: 'https://openai.com/gpt-4',
  },
  {
    name: 'Data Engine',
    icon: <Database size={24} />,
    proficiency: 82,
    description: 'Vector Databases, Pinecone, LangChain',
    link: 'https://www.pinecone.io/',
  },
  {
    name: 'Optimization',
    icon: <CloudCog size={24} />,
    proficiency: 90,
    description: 'Custom AI Scripts, Automation Tools',
    link: 'https://github.com/',
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 blueprint-heading">
            AI Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            System specifications of the AI tools that power my solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10 blueprint-card p-4 blueprint-terminal">
          <div className="font-mono text-sm mb-4">
            <p className="terminal-prompt text-green-400">
              user@ai-hybrid ~ $ system_specs --detailed
            </p>
            <p className="text-blue-400 ml-4">
              Initializing AI core components...
            </p>
            <p className="text-green-400 ml-4">All systems operational.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="border border-blueprint-light bg-black bg-opacity-70 rounded-lg p-4"
              >
                <div className="flex items-center mb-2">
                  <div className="mr-3 p-1.5 bg-blueprint-light rounded-md text-blueprint-accent">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {tool.name}
                    </h3>
                    <p className="text-gray-400 text-xs">{tool.description}</p>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500">
                      Capability Level
                    </span>
                    <Badge
                      variant="outline"
                      className="text-xs bg-blueprint-light text-blueprint-accent border-none px-2"
                    >
                      {tool.proficiency}%
                    </Badge>
                  </div>
                  <Progress
                    value={tool.proficiency}
                    className="h-1.5"
                    indicatorColor="bg-gradient-to-r from-blueprint-accent to-blueprint-highlight"
                  />

                  {tool.link && (
                    <div className="mt-3 text-right">
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-blueprint-accent hover:text-blueprint-highlight transition-colors"
                      >
                        <span>Access Documentation</span>
                        <Braces size={12} className="ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center blueprint-button"
          >
            <Github size={18} className="mr-2" />
            View AI Code Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tools;
