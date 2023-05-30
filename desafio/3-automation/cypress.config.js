const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
    watchForFileChanges: false,
		viewportWidth: 1280,
		viewportHeight: 720,
		baseUrl: 'https://blog.idwall.co/',
		chromeWebSecurity: false,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
