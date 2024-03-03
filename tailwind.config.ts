import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    variants: {
      extends: {
        backgroundOpacity: ['active']
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    screens: {
      sm: { max: '767px' },
      md: { max: '1023px' },
      lg: { max: '1279px' },
      xl: { max: '1535px' },
      '2xl': { min: '1536px' }
    }
  },
  plugins: []
};
export default config;
