// Import Werkzeuge.
import Docu_One from './components/docu_page1.vue';

// PATHS
const routes = [
    {path: '/', component: Docu_One},
]

const router = new VueRouter({
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes
})

// STORE
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: 'Interactive Documentation',
    },
    mutations: {
        changeName: (state, newName) => {
            state.name = newName  
        },
    },
})

// RUN THIS SHIT.
const vm = new Vue({
    router,
    store
}).$mount('#app');

