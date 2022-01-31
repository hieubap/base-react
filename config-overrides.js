const path = require("path");

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      "src": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      "core": path.resolve(__dirname, "src/core"),
      "data-access": path.resolve(__dirname, "src/data-access"),
      "layouts": path.resolve(__dirname, "src/layouts"),
      "lng": path.resolve(__dirname, "src/lng"),
      "redux": path.resolve(__dirname, "src/redux"),
      "utils": path.resolve(__dirname, "src/utils"),
      "variables": path.resolve(__dirname, "src/variables"),
      "views": path.resolve(__dirname, "src/views"),
    },
  };

  return config;
};
