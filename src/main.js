import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './styles/main.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// createApp.use(VueSweetalert2)
// createApp.config.productionTip = false

// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(store).use(router).use(VueSweetalert2).mount('#app')
