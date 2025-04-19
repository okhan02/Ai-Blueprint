import React from 'react';
import {
  Brain,
  Cpu,
  Database,
  Terminal,
  Code,
  Layers,
  Palette,
  Users,
  Zap,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const skills = [
  {
    name: 'AI Integration',
    level: 90,
    icon: <Brain className="text-blue-400" />,
  },
  {
    name: 'Frontend Development',
    level: 95,
    icon: <Code className="text-green-400" />,
  },
  {
    name: 'Backend Architecture',
    level: 85,
    icon: <Database className="text-purple-400" />,
  },
  { name: 'System Design', level: 80, icon: <Cpu className="text-red-400" /> },
  {
    name: 'UX Design',
    level: 85,
    icon: <Palette className="text-yellow-400" />,
  },
  {
    name: 'DevOps & Automation',
    level: 75,
    icon: <Terminal className="text-teal-400" />,
  },
  {
    name: 'AI Prompt Engineering',
    level: 92,
    icon: <Zap className="text-amber-400" />,
  },
  {
    name: 'Client Management',
    level: 88,
    icon: <Users className="text-indigo-400" />,
  },
  {
    name: 'Stack Integration',
    level: 82,
    icon: <Layers className="text-rose-400" />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute -top-10 right-10 w-40 h-40 bg-blueprint-accent rounded-full filter blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 blueprint-heading">
              The Human-AI Hybrid
            </h2>
            <p className="text-xl text-gray-400">
              Optimized synergy between human creativity and artificial
              intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Avatar and Bio Column */}
            <div className="md:col-span-1">
              <div className="blueprint-card flex flex-col items-center text-center">
                <div className="relative mb-6 mt-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blueprint-accent to-blueprint-highlight rounded-full blur-md opacity-30"></div>
                  <Avatar className="w-40 h-40 border-2 border-blueprint-accent relative">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                      alt="Developer"
                    />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="absolute top-0 left-0 w-full h-full mix-blend-overlay bg-grid-pattern opacity-30 rounded-full"></div>
                </div>

                <h3 className="text-xl font-bold text-blueprint-accent">
                  Dev Name
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Human-AI Interface Engineer
                </p>

                <div className="mb-4 mt-2">
                  {[
                    'Prompt Specialist',
                    'Full-Stack',
                    'Interface Designer',
                  ].map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="mr-1 mb-1 bg-blueprint-light"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Separator className="mb-4 bg-blueprint-light" />

                <div className="blueprint-terminal w-full text-left p-3 text-sm">
                  <p className="terminal-prompt">user@ai-hybrid ~ $</p>
                  <p className="pl-4 text-green-400 opacity-90">
                    I harness AI to craft apps and websites that solve real
                    problems—fast.
                  </p>
                  <p className="terminal-prompt mt-2">user@ai-hybrid ~ $</p>
                  <p className="pl-4 text-green-400 opacity-90">
                    The human in the loop providing vision, context, and purpose
                    to AI tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Column */}
            <div className="md:col-span-2">
              <div className="blueprint-card h-full">
                <h3 className="text-xl font-semibold mb-4 text-blueprint-accent flex items-center">
                  <Terminal className="mr-2" size={20} />
                  <span>System Capabilities</span>
                </h3>

                <Card className="bg-black border-blueprint-light mb-6">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400">
                        $ exec skills_analysis.sh
                      </span>
                      <span className="text-xs text-gray-400">ACTIVE</span>
                    </div>
                    <div className="space-y-5">
                      {skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {skill.icon}
                              <span>{skill.name}</span>
                            </div>
                            <span className="text-sm text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress
                            value={skill.level}
                            className="h-2 bg-blueprint-light"
                            indicatorColor={`bg-gradient-to-r from-blueprint-accent to-blueprint-highlight`}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold mb-3 text-blueprint-accent">
                  Integration Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="stat-card">
                    <h3 className="text-4xl font-bold text-blueprint-accent">
                      5+
                    </h3>
                    <p className="text-gray-400">Years Experience</p>
                  </div>
                  <div className="stat-card">
                    <h3 className="text-4xl font-bold text-blueprint-accent">
                      20+
                    </h3>
                    <p className="text-gray-400">Projects</p>
                  </div>
                  <div className="stat-card">
                    <h3 className="text-4xl font-bold text-blueprint-accent">
                      10+
                    </h3>
                    <p className="text-gray-400">Technologies</p>
                  </div>
                  <div className="stat-card">
                    <h3 className="text-4xl font-bold text-blueprint-accent">
                      99%
                    </h3>
                    <p className="text-gray-400">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blueprint-card">
            <h3 className="text-xl font-semibold mb-4 text-blueprint-accent">
              Core Approach
            </h3>
            <p className="text-gray-300 mb-6">
              As a multidisciplinary developer with expertise in AI integration,
              I specialize in creating enhanced digital experiences where
              artificial intelligence and human creativity combine. I operate as
              the critical "human in the loop" - providing the direction,
              ethical oversight, and creative vision that transforms powerful AI
              tools into meaningful solutions that solve real business
              challenges.
            </p>
            <div className="blueprint-terminal">
              <p className="text-sm text-gray-400 mb-2">
                // The Human-AI Workflow
              </p>
              <p className="text-green-400 text-sm">
                <span className="text-blueprint-accent">function</span>{' '}
                createSolution(<span className="text-yellow-400">problem</span>)
                &#123;
                <br />
                &nbsp;&nbsp;const{' '}
                <span className="text-purple-400">humanInsight</span> =
                analyze(problem);
                <br />
                &nbsp;&nbsp;const{' '}
                <span className="text-purple-400">aiTools</span> =
                selectOptimalAIStack(humanInsight);
                <br />
                &nbsp;&nbsp;const{' '}
                <span className="text-purple-400">prototype</span> =
                combineHumanAICapabilities(humanInsight, aiTools);
                <br />
                &nbsp;&nbsp;return refineAndOptimize(prototype);
                <br />
                &#125;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
