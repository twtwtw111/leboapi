import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/iview.js";
import 'view-design/dist/styles/iview.css';
//导入全局样式
import './assets/css/global.css';
import api from "./utiles/api"; // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上
import {
  Message
} from "view-design"
Vue.prototype.$message = Message
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");