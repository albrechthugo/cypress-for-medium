import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.ts',
    baseUrl: 'http://localhost:5173',
    experimentalRunAllSpecs: true,
    video: false,
    screenshotOnRunFailure: false,
    viewportHeight: 640,
    viewportWidth: 360
  },
});
