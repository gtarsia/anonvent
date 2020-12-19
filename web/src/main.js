import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// Vue 3 config to make vue extension work
// config.devtools = process.env.NODE_ENV === 'development'
const app = createApp(App)
const hook = window.__VUE_DEVTOOLS_GLOBAL_HOOK__
if (hook && hook.Vue) {
  hook.Vue = app.constructor
}
app.mount('#app')
