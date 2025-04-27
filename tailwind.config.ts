
import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Black from logo background
          '50': '#F5F5F5',
          '100': '#E0E0E0',
          '600': '#333333',
        },
        secondary: {
          DEFAULT: '#F0B441', // Gold/Yellow from logo border
          '50': '#FFF4D9',
          '100': '#FFE7B3',
        },
        accent: {
          DEFAULT: '#F0B441', // Using the gold/yellow as an accent color
        }
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(to bottom, #F0B441, #000000)',
      }
    },
  },
  plugins: [nextui()],
} satisfies Config;

export default config;
