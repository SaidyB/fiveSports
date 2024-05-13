/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fondo: '#ffffff',
        register: '#2C62B2',
        negro: '#000000'
        
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

