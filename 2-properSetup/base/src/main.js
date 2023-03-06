// This is the entry point of our application.
// Since we don't have a globally available Vue object anymore, then we simply import from vue and mount it
import { createApp } from 'vue';
// Remember, there are default exports and named exports. If we have a default export, then there are no curlies.
// If there are curlies, then it's a named import. These can be combined into a single statement as well.
// The importing pattern is purely a JS function, nothing to do with any library or framework.
import AsWeAreUsingADefaultExportHereThenWeCanNameThisWhatever from './App.vue';

createApp(AsWeAreUsingADefaultExportHereThenWeCanNameThisWhatever).mount('#app');
