import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'G-207WPXT7T8' },
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
