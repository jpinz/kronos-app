const data = require("./site.json");

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: data.colorPrimary,
        secondary: data.colorSecondary
      },
      backgroundColor: theme => ({
        primary: data.colorPrimary,
        secondary: data.colorSecondary
      })
    }
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
