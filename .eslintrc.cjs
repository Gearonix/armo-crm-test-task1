const { presets, configure } = require("eslint-kit");

console.log(presets.react);

module.exports = configure({
  mode: "only-errors",
  presets: [
    presets.react(),
    presets.node(),
    presets.typescript(),
    presets.imports(),
    presets.prettier(),
  ],
  extend: {
    rules: {
      quotes: [2, "single", { avoidEscape: true }],
      semi: [2, "never"],
    },
  },
});
