// Import Werkzeuge.
import Docu from './components/docu.vue';

// Plugins
// https://eddiemf.github.io/vue-affix/
import VueAffix from 'vue-affix';
Vue.use(VueAffix);

// https://github.com/eddiemf/vue-scrollactive
import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

// PATHS
const routes = [
    {path: '/', component: Docu},
]

const router = new VueRouter({
    mode: 'history',
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
        name: 'Interactive Documentation Template',
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

