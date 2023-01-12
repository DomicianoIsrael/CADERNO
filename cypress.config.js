const { defineConfig } = require("cypress");
{
  "defaultCommandTimeout"; 10000
}

{
  "reporter"; "mochawesome",
    "reporterOptions"; {
    "reportDir"; "cypress/report/mochawesome-report",
      "overwrite"; true,
        "html"; true,
          "json"; false,
            "timestamp"; "mmddyyyy_HHMMss"
  }
}


module.exports = defineConfig({
  projectId: '8wfcym',
  e2e: {
    baseUrl: "http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/",
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },

  },
});
