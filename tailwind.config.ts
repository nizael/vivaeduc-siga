import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translate(50%,20px)', opacity: '0' },
          '100%': { transform: 'translate(50%,0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out',
      },
      colors: {
        // background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#4D44B5',
        secondary: '#FB7D5B',
        'bg-primary': '#4D44B5',
        'bg-secondary': '#C1BBEB',
        'bg-tertiary': '#dcd9f0',
        'text-primary': '#303972',
        accent: '#FCC43E',
        background: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
