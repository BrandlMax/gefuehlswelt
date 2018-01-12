// Import Tools
import VuexPersistence from 'vuex-persist';
// Import Pages.
import Overview from './components/pages/overview.vue';
import JournalEntry from './components/pages/entry.vue';
// Plugin
import VuexUndoRedo from './plugins/vuex-undo-redo.js';

// Store
Vue.use(Vuex);

// Persist

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

// Hier den Path eingeben wo ihr in der URL zu eurem Werkzeug kommt.
const routes = [{
        name: 'Overview',
        path: '/',
        component: Overview
    },
    {
        name: 'Entry',
        path: '/entry/:id',
        component: JournalEntry
    }
];

const router = new VueRouter({
    routes
});

// Init Global Store

// STORE
const store = new Vuex.Store({
    state: {
        firstload: true,
        loadState: {},
        LayerCount: 0,
        layers: [],
        JournalCount: 0,
        journals: [],
        curAccessPoint: 2,
        access: [{
                name: 'kontakt@brandl-maximilian.de',
                applicationKey: '4285008c-661a-4ba1-964f-170b3808428c',
                hmacKey: '061d41b0-2693-40fe-a59e-a5a69db5433b'
            },
            {
                name: 'hi@brandl-maximilian.de',
                applicationKey: '0f0fb25e-f945-4fb3-b05f-54e9aac8c474',
                hmacKey: '26b54967-4381-4fa8-98e7-437a409f16e7'
            },
            {
                name: 'Other',
                applicationKey: '22bb89b2-fd1a-41c1-88f4-267b2246326b',
                hmacKey: '39b70b53-6c54-4e8c-b8e4-e5c0e4081324'
            }
        ]
    },
    mutations: {
        emptyState(state) {

            this.replaceState({
                firstload: true,
                loadState: {},
                LayerCount: 0,
                layers: [],
                JournalCount: 0,
                journals: [],
                curAccessPoint: 2,
                access: [{
                        name: 'kontakt@brandl-maximilian.de',
                        applicationKey: '4285008c-661a-4ba1-964f-170b3808428c',
                        hmacKey: '061d41b0-2693-40fe-a59e-a5a69db5433b'
                    },
                    {
                        name: 'hi@brandl-maximilian.de',
                        applicationKey: '0f0fb25e-f945-4fb3-b05f-54e9aac8c474',
                        hmacKey: '26b54967-4381-4fa8-98e7-437a409f16e7'
                    },
                    {
                        name: 'Other',
                        applicationKey: '22bb89b2-fd1a-41c1-88f4-267b2246326b',
                        hmacKey: '39b70b53-6c54-4e8c-b8e4-e5c0e4081324'
                    }
                ]
            });
        },

        defineEmptyState(state, data) {
            state.loadState = JSON.stringify(state);
            state.firstload = false;
        },
        addLayer: (state, Layer) => {
            Layer.id = state.LayerCount;
            state.LayerCount++;
            state.layers.push(Layer);
            console.log('addLayer', Layer);
        },

        updateLayerTool: (state, ToolData) => {

            //console.log(ToolData);

            state.layers.forEach((l) => {
                //console.log('filter',[l.id, ToolData.layerID]);    
                if (l.id === ToolData.layerID) {
                    l.tool.toolname = ToolData.toolName;
                }
            });

        },

        updateToolSaveData: (state, saveData) => {
            console.log('Update Save Data', saveData);

            state.layers.forEach((l) => {
                //console.log('filter',[l.id, ToolData.layerID]);    
                if (l.id === saveData.id) {
                    l.tool.tooldata.push.apply(l.tool.tooldata, saveData.data);
                }
            });
        },

        removeLayer: (state, Layer) => {
            state.layers.splice(Layer.index, 1);
            console.log('removedLayer', Layer.index);
        },

        addJournal: (state, Journal) => {
            Journal.id = state.JournalCount;
            state.JournalCount++;
            state.journals.push(Journal);
            console.log('addJournal', Journal);
        },

        removeJournal: (state, Journal) => {
            state.journals.splice(Journal.index, 1);
            console.log('removedJournal', Journal.index);
        },
    },
    plugins: [vuexLocal.plugin]
});

// Plugins
Vue.use(VuexUndoRedo);
//console.log(VuexUndoRedo);

// Run this Shit.
const vm = new Vue({
    router,
    store
}).$mount('#app');