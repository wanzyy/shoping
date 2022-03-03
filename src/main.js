import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery'
import 'jquery/dist/jquery.min.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).use(router).mount('#app')
