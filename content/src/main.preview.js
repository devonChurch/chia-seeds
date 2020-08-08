import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.preview.vue';
import singleSpaVue from 'single-spa-vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
});

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;