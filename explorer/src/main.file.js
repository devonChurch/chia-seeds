import Vue from 'vue';
import VueRouter from 'vue-router'
import singleSpaVue from 'single-spa-vue';
import App from './App.file.vue';
import SubjectList from './views/SubjectList.vue';
import FileList from './views/FileList.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/library/",
  routes: [{
    path: "/",
    component: SubjectList
  }, {
    path: "/:subject/",
    component: FileList
  }]
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