/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stripes': "url('../src/assets/striped_bg.svg')",
        'resume': "url('../src/assets/resume.svg')",
        'linkedin': "url('../src/assets/linkedin.svg')",
        'github': "url('../src/assets/github.svg')",
        'grad': 'linear-gradient(to right, theme(colors.fuchsia.400), theme(colors.emerald.300), theme(colors.sky.400), theme(colors.fuchsia.400), theme(colors.sky.400), theme(colors.emerald.300), theme(colors.indigo.400))',
        'grad2': 'linear-gradient(to right, theme(colors.fuchsia.400), theme(colors.fuchsia.100), theme(colors.red.300), theme(colors.amber.400), theme(colors.red.300), theme(colors.fuchsia.100), theme(colors.fuchsia.400))',
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

