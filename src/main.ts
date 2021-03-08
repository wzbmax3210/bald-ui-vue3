import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/xxx', component: HelloWorld }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
