import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mixin(mixins)
app.mount('#app')
app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})

window.Kakao.init("c02c58cc6dff4d37f920a0170f738634");