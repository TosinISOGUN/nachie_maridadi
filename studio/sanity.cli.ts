import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'qwpjf2nw',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for this studio.
   * Learn more at https://www.sanity.io/docs/scheduled-updates
   */
  studioHost: 'nachie-maridadi',
  deployment: {
    appId: 'lescrt28ci7bk2ur4cjtdfvd',
  },
});


