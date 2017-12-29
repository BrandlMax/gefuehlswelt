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
      LayerCount: 0,
      layers: [], 
    },
    mutations: {
        addLayer: (state, Layer) => {
            Layer.id = state.LayerCount;
            state.LayerCount++;
            state.layers.push(Layer);
            console.log('addLayer', Layer)  
        },
        removeLayer: (state, Layer) => {
            state.layers.splice(Layer.index, 1);
            console.log('removedLayer', Layer.index)  
        } 
    }
  })

const vm = new Vue({
    router,
    store
}).$mount('#app');
