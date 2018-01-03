// Import Werkzeuge.
import Overview from './components/pages/overview.vue';
import JournalEntry from './components/pages/entry.vue';

// Store
Vue.use(Vuex)

// Hier den Path eingeben wo ihr in der URL zu eurem Werkzeug kommt.
const routes = [
    {path: '/', component: Overview},
    {name: 'Entry', path: '/entry/:id', component: JournalEntry}
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
      JournalCount: 0,
      journals: [],
      access:{
         
        // kontakt@brandl-maximilian.de
        // applicationKey: '4285008c-661a-4ba1-964f-170b3808428c',
        // hmacKey: '061d41b0-2693-40fe-a59e-a5a69db5433b'
        

        // hi@brandl-maximilian.de
        //applicationKey: '0f0fb25e-f945-4fb3-b05f-54e9aac8c474',
        //hmacKey: '26b54967-4381-4fa8-98e7-437a409f16e7'

        // Other
         applicationKey: '22bb89b2-fd1a-41c1-88f4-267b2246326b',
         hmacKey: '39b70b53-6c54-4e8c-b8e4-e5c0e4081324'
        
      } 
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
        },

        addJournal: (state, Journal) => {
            Journal.id = state.JournalCount;
            state.JournalCount++;
            state.journals.push(Journal);
            console.log('addJournal', Journal)  
        },
        removeJournal: (state, Journal) => {
            state.journals.splice(Journal.index, 1);
            console.log('removedJournal', Journal.index)  
        }  
    }
  })

const vm = new Vue({
    router,
    store
}).$mount('#app');
