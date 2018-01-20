// Import Werkzeuge.
import page_0_intro from './components/page_0_intro.vue';
import page_1_test from './components/page_1_test.vue';
import page_2_test2 from './components/page_2_test2.vue';

// PATHS
const routes = [
    {path: '/', name:'0', component: page_0_intro, title:'intro', color: 'turkis'},
    {path: '/1', name:'1', component: page_1_test, title:'second', color: 'turkis'},
    {path: '/2', name:'2', component: page_2_test2, title:'third', color: 'red'},
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

