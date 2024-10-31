/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.razor", // Include all .razor files across all directories
    "./**/*.html", // Include all .html files across all directories
    "./**/*.cshtml", // If you're using .cshtml files, you can include them too
    "./**/*.js", // Add .js files if you have inline Tailwind classes in scripts
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
