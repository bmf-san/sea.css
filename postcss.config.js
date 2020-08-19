module.exports = {
  plugins: [
    require("postcss-import")(),
    require("autoprefixer")(),
    require("cssnano")({
      autoprefixer: false,
    }),
  ],
};
