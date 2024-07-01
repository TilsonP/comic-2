import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import feather from 'vue-icon'

import '@/assets/scss/main.scss'

Vue.config.productionTip = false;
Vue.use(feather, 'v-icon');

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");