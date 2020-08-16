// export function hi() {
//   alert(`Hello`);
// }

// export function bye() {
//   alert(`Bye`);
// }

// export default function () {
//   alert("Module loaded (export default)!");
// }

// const something = function() {
//     console.log(someting)
// };

// export default something;

// export const logUserIn = () => {};
// export const logUserOut = () => {};

import Vuex from 'vuex'

const shellModule = {
    namespaced: true,
    state: () => ({
        isUserLoggedIn: false,
        userName: '',
        userType: ''
    }),
    mutations: {
        logUserIn: (state, payload) => {
            state.isUserLoggedIn = true;
            state.userName = payload.userName;
            state.userType = payload.userType;
        },
        logUserOut: (state) => {
            state.isUserLoggedIn = false;
            state.userName = state.userType = "";
        }
    },
    getters: {

    },
    // actions:
}



// export default store = new Vuex.Store({
//     modules: {
//         shell: shellModule
//     }
// });

// const createStore = () => new Vuex.Store({
//     modules: {
//         shell: shellModule
//     }
// });

export const createStore = (() => {
    let store;

    return (Vue) => {
        console.log('Creating store', Vue);

        Vue.use(Vuex);

        if (!store) {
            console.log('Creating BRAND NEW store');
            store = new Vuex.Store({
                modules: { shell: shellModule }
            });
        }
        
        return store;
    };
})();

export const logUserIn = (data) =>
    new Promise((resolve) =>
        setTimeout(() => {
            const { userName, userType } = data;
            resolve(
                store.commit('shell/logUserIn', { userName, userType })
            );
        }, 1000));

export const logUserOut = (data) =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve(
                store.commit('shell/logUserOut')
            );
        }, 1000));
