// Import Werkzeuge.
import Beispielwerkzeug from './werzeuge/beispiel.vue';

// Hier den Path eingeben wo ihr in der URL zu eurem Werkzeug kommt.
const routes = [
    { path: '/beispielwerkzeug', component: Beispielwerkzeug}
]

const router = new VueRouter({
    routes
})

const vm = new Vue({
    el: "#vue-instance",
    router,
    data: {
    },
});
