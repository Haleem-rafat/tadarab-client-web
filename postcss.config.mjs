const config = {
  plugins: [
    "@tailwindcss/postcss",
    [
      "autoprefixer",
      {
        // Target modern browsers to reduce polyfills
        overrideBrowserslist: [
          "last 2 versions",
          "> 1%",
          "not dead",
          "chrome >= 90",
          "firefox >= 88",
          "safari >= 14",
          "edge >= 90",
          "ios_saf >= 14",
          "android >= 90",
          "not ie 11",
          "not ie_mob 11",
          "not op_mini all"
        ],
        // Reduce unnecessary CSS polyfills
        flexbox: "no-2009",
        grid: "autoplace"
      }
    ]
  ],
};

export default config;
