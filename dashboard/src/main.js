import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
const { createStore } = await import('shell/store');

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    store: createStore(Vue)
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;