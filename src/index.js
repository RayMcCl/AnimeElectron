import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import AnimeJS from 'vue-plugin-animejs';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue'

Vue.use(BootstrapVue);
Vue.use(AnimeJS);

new Vue({
    render: h => h(App)
}).$mount('#app')
  