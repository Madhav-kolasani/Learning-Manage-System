/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'course-details-heading-small': ['26px', '36px'],
        'course-details-heading-large': ['36px', '44px'],
        'home-heading-small': ['28px', '34px'],
        'home-heading-large': ['48px', '56px'],
        'default': ['15px', '21px'],
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      colors: {
        primary: '#6366f1',
        secondary: '#f472b6',
        accent: '#06b6d4',
        background: '#f8fafc',
        surface: '#fff',
        muted: '#e5e7eb',
        dark: '#18181b',
      },
      animation: {
        fade: 'fadeIn 0.8s ease-in',
        bounce: 'bounce 1s infinite',
        slide: 'slideIn 0.7s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
