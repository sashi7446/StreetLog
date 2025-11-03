import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        'bg-primary': '#F9F9F9',
        'bg-secondary': '#FFFFFF',
        'bg-dark': '#31313B',

        // Text colors
        'text-primary': '#31313B',
        'text-secondary': '#6B7280',
        'text-muted': '#9CA3AF',

        // Brand colors (modern, calm, cool)
        'brand': {
          primary: '#9BA7AB',
          hover: '#8A969A',
        },

        // Accent color (deep blue for CTAs)
        'accent': {
          primary: '#374B7C',
          hover: '#2D3D63',
        },

        // Tournament scale colors
        'tournament': {
          world: '#EF4444',
          national: '#F97316',
          regional: '#374B7C',
          online: '#10B981',
        },
      },
    },
  },
  plugins: [],
};
export default config;
