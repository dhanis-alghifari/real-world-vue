import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import GStore from './stores/store'


createApp(App).use(router).provide('GStore', GStore).use(createPinia()).mount('#app')
