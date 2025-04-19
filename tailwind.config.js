import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo2: ['Exo 2', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        // AI Blueprint custom colors
        blueprint: {
          dark: '#0F172A', // Deep navy blue
          medium: '#1E293B', // Medium navy blue
          light: '#334155', // Light navy blue
          accent: '#3B82F6', // Electric blue
          highlight: '#8B5CF6', // Purple highlight
        },
        // New color palette
        'deep-space-black': '#0A0F2B',
        'neon-cyan': '#00AAFF',
        'neon-purple': '#6A00FF',
        'subtitle-gray': '#DDDDDD',
        'dim-gray': '#BBBBBB',
        'nav-gray': '#CCCCCC',
        'dark-gray': '#333333',
        // New metallic colors
        'metallic-silver': '#C0C0C0',
        'metallic-chrome': '#E0E0E0',
        'metallic-steel': '#B0B7C0',
        'ai-pink': '#D81B60',
        'ai-blue': '#1A237E',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'heading-fade-in-zoom': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'pulse-subtle': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 15px rgba(106, 0, 255, 0.7)',
          },
          '50%': {
            opacity: '0.9',
            boxShadow: '0 0 25px rgba(106, 0, 255, 0.9)',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            opacity: '0.6',
            filter: 'blur(30px)',
          },
          '50%': {
            opacity: '0.8',
            filter: 'blur(40px)',
          },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
          '25%, 75%': { opacity: '0.85' },
          '10%, 30%, 70%, 90%': { opacity: '0.9' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        typing: 'typing 3.5s steps(40, end)',
        blink: 'blink 1s step-end infinite',
        'pulse-slow': 'pulse-slow 4s infinite',
        float: 'float 6s ease-in-out infinite',
        'heading-fade-in': 'heading-fade-in-zoom 1.5s ease-out forwards',
        'fade-in-1': 'fade-in 0.5s ease-out forwards 1.5s',
        'fade-in-2': 'fade-in 0.5s ease-out forwards 2s',
        'fade-in-3': 'fade-in 0.5s ease-out forwards 2.5s',
        'fade-in-4': 'fade-in 0.8s ease-out forwards 3s',
        'pulse-subtle': 'pulse-subtle 2s infinite',
        'glow-pulse': 'glow-pulse 4s infinite',
        flicker: 'flicker 3s infinite',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)',
        'tech-gradient': 'linear-gradient(to bottom right, #3B82F6, #8B5CF6)',
        'gradient-title': 'linear-gradient(to right, #6A00FF, #00AAFF)',
      },
    },
  },
  plugins: [animate],
};
