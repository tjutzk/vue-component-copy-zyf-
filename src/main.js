import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import returnHome from './minix/return'
import './utils/commonStyle.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.mixin(returnHome)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
