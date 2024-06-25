import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        lightBase: 'var(--light-base)',
        darkBlue: 'var(--dark-blue)',
        primaryColor: 'var(--primary-color)',
      },
      boxShadow: {
        custom: '0px 3px 10px 2px rgba(20, 42, 63, 0.1)',
      },
      fontSize: {
        title: '3rem',
        title2: '2.25rem',
        paragraph1: '1.5rem',
        paragraph2: '1.25rem',
        paragraph3: '1rem',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
