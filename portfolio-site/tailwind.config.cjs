/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
    // you dont need `purge: enabled: production` because you are using jit
    purge: [ 
      "./src/**/*.svelte",
      // may also want to include HTML files
      "./src/**/*.html"
    ],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
