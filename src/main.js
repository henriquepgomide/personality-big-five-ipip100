import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy)

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
