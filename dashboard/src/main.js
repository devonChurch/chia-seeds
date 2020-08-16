import Vue from 'vue';
import Vuex from 'vuex'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

// const shellStore = () => import('shell/store');

// const { createStore } = await import('shell/store');
// console.log(shellStore);

// shellStore.then(module => console.log(module))

// import('shell/store').then(module => console.log(module));



// async function load() {
//   let say = await import('shell/store');
//   say.hi(); // Hello!
//   say.bye(); // Bye!
//   say.default(); // Module loaded (export default)!
// }

// load();


// Vue.use(Vuex)
// let vueLifecycles

// (async () => {

//   const everything = await shellStore();
//   console.log('async import', everything);

//   vueLifecycles = singleSpaVue({
//     Vue,
//     appOptions: {
//       render: (h) => h(App),
//     },
//   });

// })();





// Vue.use(Vuex)

// const vueLifecycles = singleSpaVue({
//   Vue,
//   appOptions: {
//     render: (h) => h(App),
//     store: createStore()
//   },
// });

// export const bootstrap = vueLifecycles.bootstrap;
// export const mount = vueLifecycles.mount;
// export const unmount = vueLifecycles.unmount;


export default import('shell/store').then(module => {
  console.log('store | module', module);
  console.log('store | module.createStore', module.createStore);
  
  // Vue.use(Vuex);

  const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
      render: (h) => h(App),
      store: module.createStore(Vue)
    },
  });

  return {
    bootstrap: vueLifecycles.bootstrap,
    mount: vueLifecycles.mount,
    unmount: vueLifecycles.unmount,
  };
});