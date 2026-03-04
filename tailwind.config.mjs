/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecf3fb',
          100: '#d9e8f7',
          500: '#1f5ea8',
          700: '#0f3d75',
          900: '#081d39'
        }
      },
      boxShadow: {
        glow: '0 20px 60px rgba(15, 61, 117, 0.12)'
      }
    }
  },
  plugins: []
};
