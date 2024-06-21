import { createApp } from 'vue';
import App from './App.vue';
// import { OhVueIcon } from 'oh-vue-icons';  // Import the plugin itself
import router from './routes';
 
const app = createApp(App);
 
app.use(router).mount('#app');
 
