import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        '1.1': '1.1',
      },
    },
  },
  plugins: [],
};

export default config;
