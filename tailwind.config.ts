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
        'bg-primary': '#FAFAFA',
        'bg-secondary': '#FFFFFF',
        'bg-dark': '#1F2937',

        // Text colors
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
        'text-muted': '#9CA3AF',

        // Brand colors
        'brand': {
          primary: '#3B82F6',
          hover: '#2563EB',
        },

        // Tournament scale colors
        'tournament': {
          world: '#EF4444',
          national: '#F97316',
          regional: '#3B82F6',
          online: '#10B981',
        },
      },
    },
  },
  plugins: [],
};
export default config;
