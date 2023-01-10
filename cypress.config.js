const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8wfcym',
  e2e: {
    baseUrl: "http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
