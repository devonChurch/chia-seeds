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
    getters: {},
    actions: {},
}


export const createStore = (() => {
    let store;

    return (Vue) => {
        // Vuex MUST be called with the version of Vue associated to the current
        // application instance requesting access to the store.
        //
        // Vuex MUST be called BEFORE the creation of the store.
        Vue.use(Vuex);

        if (!store) {
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
