import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'

const GStore = reactive({ flashMessage: '' })

createApp(App).use(router).use(createPinia()).provide('GStore', GStore).mount('#app')
