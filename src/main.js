import Vue from 'vue'
import ElementUI from 'element-ui'    // eleUI组件库
import axios from 'axios'

import App from './App.vue'   //组件入口
import router from './router'   //路由

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
