import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro,svelte}', './pages/**/*.{ts,tsx,js,jsx,astro,svelte}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          ubuntu_bold: { value: 'var(--font-ubuntu-bold), sans-serif' },
          ubuntu_medium: { value: 'var(--font-ubuntu-medium), sans-serif' },
          ubuntu_regular: { value: 'var(--font-ubuntu-regular), sans-serif' }
        }
      },
      breakpoints: {
        xsm: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
