/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'resume': "url('../src/assets/resume.svg')",
        'linkedin': "url('../src/assets/linkedin.svg')",
        'github': "url('../src/assets/github.svg')",
        'grad': 'linear-gradient(to right, theme(colors.fuchsia.400), theme(colors.emerald.300), theme(colors.sky.400), theme(colors.fuchsia.400), theme(colors.sky.400), theme(colors.emerald.300), theme(colors.indigo.400))',
        'grad2': 'linear-gradient(to right, theme(colors.fuchsia.400), theme(colors.fuchsia.100), theme(colors.red.300), theme(colors.amber.400), theme(colors.red.300), theme(colors.fuchsia.100), theme(colors.fuchsia.400))',
        'night-sky': `
          radial-gradient(at 39% 55%, hsla(27,85%,13%,0.1) 0px, transparent 50%),
          radial-gradient(at 62% 50%, hsla(120,95%,15%,0.1) 0px, transparent 50%),
          radial-gradient(at 15% 15%, hsla(240,91%,11%,1) 0px, transparent 50%),
          radial-gradient(at 91% 26%, hsla(225,94%,9%,1) 0px, transparent 50%),
          radial-gradient(at 65% 10%, hsla(211,92%,9%,1) 0px, transparent 50%),
          radial-gradient(at 16% 89%, hsla(266,90%,14%,1) 0px, transparent 50%),
          radial-gradient(at 89% 80%, hsla(287,90%,9%,1) 0px, transparent 50%),
          radial-gradient(at 64% 92%, hsla(256,89%,10%,1) 0px, transparent 50%);
        `
      },
      animation: {
        'gradient': 'gradient 3s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: {
            'background-position': '-200% center'
          },
        }
      },
    },
  },
  plugins: [],
}

