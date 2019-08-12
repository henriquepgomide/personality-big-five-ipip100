import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy);
Vue.use(VueResource);


new Vue({
  render: h => h(App),
}).$mount('#app')
