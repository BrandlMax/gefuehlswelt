// Import Werkzeuge.
import Docu from './components/docu.vue';
import Chapter from './components/chapter.vue';
import Content from './content';

// PATHS
const routes = [
    {path: '/', component: Docu},
    {name: 'Chapter', path: '/chapter/:id', component: Chapter}
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
        name: 'Interactive Documentation Template',
        chapters: Content,
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

