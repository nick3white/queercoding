import { defineConfig } from "@pandacss/dev";

const config = {
  conditions: {
    arst: "[data-theme=arst]",
    flowersBerries: "[data-theme=flowers-berries]",
    flowers: "[data-theme=flowers]",
    flowersWithSun: "[data-theme=flowers-with-sun]",
    growing: "[data-theme=growing]",
    ibm: "[data-theme=ibm]",
    nightlights: "[data-theme=nightlights]",
    trees: "[data-theme=trees]",
    winterChicago: "[data-theme=winter-chicago]",
    winter: "[data-theme=winter]",
    wood: "[data-theme=wood]",
  },
};

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
