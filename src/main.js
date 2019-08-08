import Vue from 'vue'
import App from './App.vue'
import draggable from 'vuedraggable'
Vue.config.productionTip = false

Vue.use(draggable)
new Vue({
  render: h => h(App),
}).$mount('#app')
