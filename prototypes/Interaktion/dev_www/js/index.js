// Import Werkzeuge.
import Home from './werzeuge/home.vue';
import Beispielwerkzeug from './werzeuge/beispiel.vue';

// Store
Vue.use(Vuex)

// Hier den Path eingeben wo ihr in der URL zu eurem Werkzeug kommt.
const routes = [
    {path: '/', component: Home },
    {name: 'beispielwerkzeug', path: '/beispielwerkzeug', component: Beispielwerkzeug}
]

const router = new VueRouter({
    routes
})

// Init Global Store
// STORE
const store = new Vuex.Store({
    state: {
      someData: ' ',
    },
    mutations: {
        example: (state, query) => {
          console.log('example', state, query);
        }
    }
  })

const vm = new Vue({
    router,
    store
}).$mount('#app');
