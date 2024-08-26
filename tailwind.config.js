module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      animation: {
        'pulse-delay-0': 'pulse 1s infinite 0s',
        'pulse-delay-200': 'pulse 1s infinite 0.2s',
        'pulse-delay-400': 'pulse 1s infinite 0.4s',
      },
    },
    fontFamily: {
      khmer: ["Kantumruy Pro", 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

