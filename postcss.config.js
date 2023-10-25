module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "@fullhuman/postcss-purgecss": {
      content: ["./src/**/*.html", "./src/**/*.ts"],
    },
  },
};
