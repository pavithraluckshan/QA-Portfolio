const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'f5ec4q',
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Pattern for test specs
    baseUrl: 'https://ccs-productionnext.kinderm8.com.au', // Base URL for tests
    chromeWebSecurity: false, // To handle cross-origin issues
    experimentalStudio: true, // Correctly positioned outside of setupNodeEvents

     // ✅ Add global timeouts here
    defaultCommandTimeout: 20000, // For commands like cy.get, cy.contains, etc.
    pageLoadTimeout: 60000,       // For cy.visit page load
    requestTimeout: 30000,        // For cy.request, cy.intercept, etc.
    responseTimeout: 30000,       // For waiting on XHR/AJAX

    
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          // Disable Chrome password manager and leak detection popups
          launchOptions.args.push(
            '--disable-password-manager-reauthentication',
            '--disable-save-password-bubble',
            '--disable-password-generation',
            '--disable-password-manager',
            '--disable-features=PasswordLeakDetection'
          );
        }
        return launchOptions;
      });
      return config;
    },
  },
});