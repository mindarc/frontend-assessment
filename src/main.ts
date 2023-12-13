import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap assets
import './assets/scss/styles.scss';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as bootstrap from 'bootstrap';

const app = createApp(App);
app.use(router);

app.mount('#app');
