import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'
import 'amfe-flexible'

async function bootstrap() {
    const app = createApp(App)
    // setupStore(app)
    await setupRouter(app)
    app.mount('#app')
}

await bootstrap()