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
        lang: true, // true = de
    },
    mutations: {
        changeLanguage: (state, newName) => {
            state.lang = !state.lang  
        },
    },
})

// RUN THIS SHIT.
const vm = new Vue({
    router,
    store
}).$mount('#app');


// DEBUGGIN'
window.onresize = function(){
    function gcd (a, b) {
        return (b == 0) ? a : gcd (b, a%b);
    }

    var w = window.innerHeight;
    var h = window.innerWidth;
    var r = gcd (w, h);

    console.log('Window Ratio Data', [{
        dimensions: w + ' x ' + h,
        GCD: r,
        Aspect: w/r + ":" +  h/r
    }])
    console.log('Kennzahl1', w/h);
    // WENN KENNZAHL 2 größer als 2 dann Passt das Buch nicht mehr hinein
    console.log('Kennzahl2', h/w);
    console.log('Kennzahl3', w-h);
    console.log('Kennzahl4', h-w);
   
};