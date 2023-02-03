/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        md1: '886px',
        x: '400px',
        x1: '300px'
      },
      fontFamily: {
        oxanium: ['Oxanium'],
        lato: ['Lato'],
      },
      colors: {
        primary: {100: '#140C1F'},
        tertiary: {100: 'rgba(173, 26, 175, 1)'},
        call: {butn: 'rgba(173, 26, 175, 0.05)'}
      },
      backgroundImage: {
        glass: 'linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        glass1: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
        grad: 'linear-gradient(90.13deg, #FFFFFF 0%, #F81DFB 99.96%)',
        light: "url('images/Vector (4).png')",
        wavy: "url('images/pic (2).png')",
      }
    },
  },
  plugins: [],
}
