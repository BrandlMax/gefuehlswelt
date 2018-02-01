// Import Werkzeuge.
import page_0_intro from './components/page_0_intro.vue';
import page_1_Cover from './components/page_1_Cover.vue';
import page_2_Specs from './components/page_2_Specs.vue';
import page_3_ProductSphaeren from './components/page_3_ProductSphaeren.vue';
import page_4_ProductSplitter from './components/page_4_ProductSplitter.vue';
import page_5_ProductWerkzeuge from './components/page_5_ProductWerkzeuge.vue';
import page_6_ProductHilfe from './components/page_6_ProductHilfe.vue';
import page_6_ProductInspire from './components/page_6_ProductInspire.vue';
import page_7_Styleguide from './components/page_7_Styleguide.vue';
import page_8_Userstory from './components/page_8_Userstory.vue';
import page_9_Persona from './components/page_9_Persona.vue';
import page_10_Kostenanalyse from './components/page_10_Kostenanalyse.vue';
import page_11_Marke from './components/page_11_Marke.vue';
import page_12_Systemdiagramm from './components/page_12_Systemdiagramm.vue';
import page_13_ERM from './components/page_13_ERM.vue';
import page_14_PrototypAufbau from './components/page_14_PrototypAufbau.vue';
import page_15_PrototypFunktion from './components/page_15_PrototypFunktion.vue';
import page_16_Kontakt from './components/page_16_Kontakt.vue';

// PATHS
const routes = [
    {path: '/', name:'0', component: page_0_intro, title:'intro', color: 'turkis'},
    {path: '/1', name:'1', component: page_1_Cover, title:'Covers', color: 'turkis'},
    {path: '/2', name:'2', component: page_2_Specs, title:'Specs', color: 'turkis'},
    {path: '/3', name:'3', component: page_3_ProductSphaeren, title:'Sphären', color: 'turkis'},
    // {path: '/4', name:'4', component: page_4_ProductSplitter, title:'Splitter', color: 'turkis'},
    {path: '/5', name:'5', component: page_5_ProductWerkzeuge, title:'Tools', color: 'turkis'},
    {path: '/6a', name:'6a', component: page_6_ProductInspire, title:'Inspire', color: 'turkis'},
    {path: '/6b', name:'6b', component: page_6_ProductHilfe, title:'Hilfe', color: 'turkis'},
    {path: '/7', name:'7', component: page_7_Styleguide, title:'Styleguide', color: 'rose'},
    {path: '/8', name:'8', component: page_8_Userstory, title:'Userstory', color: 'rose'},
    {path: '/9', name:'9', component: page_9_Persona, title:'Persona', color: 'rose'},
    {path: '/10', name:'10', component: page_10_Kostenanalyse, title:'Kostenanalyse', color: 'orange'},
    {path: '/11', name:'11', component: page_11_Marke, title:'Marke', color: 'orange'},
    {path: '/12', name:'12', component: page_12_Systemdiagramm, title:'Systemdiagramm', color: 'red'},
    {path: '/13', name:'13', component: page_13_ERM, title:'ERM', color: 'red'},
    {path: '/14', name:'14', component: page_14_PrototypAufbau, title:'Prototyp Aufbau', color: 'red'},
    // {path: '/15', name:'15', component: page_15_PrototypFunktion, title:'Prototyp Funktion', color: 'red'},
    {path: '/16', name:'16', component: page_16_Kontakt, title:'Kontakt', color: 'turkis'}
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
        lang: true, // true = de
        persona: 'normal',
        userstory: '7',
        specs: 'front',

    },
    mutations: {
        changeLanguage: (state, newName) => {
            state.lang = !state.lang  
        },
        changeSliderState: (state, newState) => {
            if(newState.name === 'persona'){
                state.persona = newState.sliderState
            }else if(newState.name === 'userstory'){
                state.userstory = newState.sliderState
            } else if(newState.name === 'specs'){
                state.specs = newState.sliderState
            }  
        },
    },
})

// RUN THIS SHIT.
const vm = new Vue({
    router,
    store
}).$mount('#app');


// DEBUGGIN'
// window.onresize = function(){
//     function gcd (a, b) {
//         return (b == 0) ? a : gcd (b, a%b);
//     }

//     var w = window.innerHeight;
//     var h = window.innerWidth;
//     var r = gcd (w, h);

//     console.log('Window Ratio Data', [{
//         dimensions: w + ' x ' + h,
//         GCD: r,
//         Aspect: w/r + ":" +  h/r
//     }])
//     console.log('Kennzahl1', w/h);
//     // WENN KENNZAHL 2 größer als 2 dann Passt das Buch nicht mehr hinein
//     console.log('Kennzahl2', h/w);
//     console.log('Kennzahl3', w-h);
//     console.log('Kennzahl4', h-w);

// };