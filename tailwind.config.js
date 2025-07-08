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
        'gradient-x': 'gradientX 6s ease infinite',
        'aurora': 'aurora 10s ease-in-out infinite',
        'tea': 'tea 10s ease-in-out infinite',
        'floating': 'floating 6s ease-in-out infinite',
      },
      keyframe: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        aurora: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg)' },
          '50%': { transform: 'translateX(-50%) translateY(-55%) rotate(180deg)' },
        },
        tea: {
          '0%': { backgroundColor: '#d0f0c0' },  // light mint green
          '25%': { backgroundColor: '#f0fff0' }, // tea foam white
          '50%': { backgroundColor: '#cdeac0' }, // soft matcha
          '75%': { backgroundColor: '#e6f9d0' }, // herbal tint
          '100%': { backgroundColor: '#d0f0c0' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      }
      
    },
      fontFamily: {
        khmer: ["Poppins",'Noto Serif Khmer']
      }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

