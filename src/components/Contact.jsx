import React, { useState, useEffect } from 'react';
import { Send, AtSign, MapPin, Terminal, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botMessages, setBotMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const chatbotMessages = [
    'Initializing connection sequence...',
    'How can I assist with your project today?',
    'Ready to collaborate on AI-powered solutions.',
    'Human-AI collaboration activated.',
  ];

  useEffect(() => {
    if (currentIndex < chatbotMessages.length) {
      const timer = setTimeout(() => {
        setBotMessages((prev) => [...prev, chatbotMessages[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Connection sequence initiated',
        description:
          'Your message has been received. Expect human-enhanced AI response soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 blueprint-heading">
              AI-Assisted Outreach
            </h2>
            <p className="text-xl text-gray-400">
              Establish a direct communication channel for human-AI
              collaborative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="blueprint-card h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blueprint-light rounded-full">
                    <Bot size={20} className="text-blueprint-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-blueprint-accent">
                    AI Communication Hub
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-blueprint-light rounded-full">
                      <AtSign size={20} className="text-blueprint-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-gray-400">hello@aiblueprint.dev</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-blueprint-light rounded-full">
                      <MapPin size={20} className="text-blueprint-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Location</h4>
                      <p className="text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blueprint-light">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal size={18} className="text-blueprint-accent" />
                    <h4 className="text-lg font-semibold">AI Assistant</h4>
                  </div>
                  <div className="blueprint-terminal h-48 overflow-y-auto">
                    {botMessages.map((message, index) => (
                      <p
                        key={index}
                        className="terminal-prompt mb-3 typing-animation"
                      >
                        {message}
                      </p>
                    ))}
                    <div className="typing-cursor"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="blueprint-card">
                <h3 className="text-xl font-bold mb-6 text-blueprint-accent">
                  Initiate Communication
                </h3>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="bg-blueprint-light border-blueprint-light text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="bg-blueprint-light border-blueprint-light text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I assist with your project today?"
                      required
                      className="bg-blueprint-light border-blueprint-light text-white min-h-[150px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      id="ai-assist"
                      className="bg-blueprint-light border-blueprint-light"
                    />
                    <label
                      htmlFor="ai-assist"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                    >
                      Enable AI-enhanced response suggestions
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="blueprint-button w-full mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? 'Initiating...'
                      : 'Initiate Connection Sequence'}{' '}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
