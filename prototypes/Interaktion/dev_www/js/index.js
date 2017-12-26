// Import Werkzeuge.
import App from './components/app.vue';

// Store
Vue.use(Vuex)

// Hier den Path eingeben wo ihr in der URL zu eurem Werkzeug kommt.
const routes = [
    {path: '/', component: App},
]

const router = new VueRouter({
    routes
})

// Init Global Store
// STORE
const store = new Vuex.Store({
    state: {
      someData: 'Hello World',
      Gesten: [], 
    },
    mutations: {
        exampleMutation: (state, query) => {
          console.log('example', state, query);
        }
    }
  })

const vm = new Vue({
    router,
    store
}).$mount('#app');
