import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NotFound from './components/NotFound.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';

const app = createApp(App);

// Register the NotFound component globally
app.component('NotFound', NotFound);

// Mount the Vue app with the router
app.use(router).mount('#app');
