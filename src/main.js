import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {setupRouter} from './router'
import 'amfe-flexible'

const app = createApp(App)
// setupStore(app)
setupRouter(app)
app.mount('#app')