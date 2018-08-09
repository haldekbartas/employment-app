import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'   
import VeeValidate from 'vee-validate';
import VoerroTagsInput from '@voerro/vue-tagsinput';

import Typewriter from 'vue-typewriter';
Vue.use(Typewriter);

Vue.component('tags-input', VoerroTagsInput);
Vue.use(VeeValidate);
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
