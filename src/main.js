import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import DataV from '@jiaminghi/data-view'

Vue.use(DataV)
Vue.use(VueMaterial)

// change multiple options
Vue.material = {
  ...Vue.material,
  locale: {
    ...Vue.material.locale,
    dateFormat: 'dd/MM/yyyy',
    firstDayOfAWeek: 1
  }
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
