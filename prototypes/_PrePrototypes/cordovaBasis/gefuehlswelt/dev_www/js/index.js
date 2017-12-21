// TEMPLATES
import Home from './templates/home.vue';
import Write from './templates/write.vue';
import Speech from './templates/speech.vue';
import TextEdit from './templates/text.vue';
import Database from './templates/database.vue';

// APPLICATION
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.setupVue();
        //document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        window.plugins.speechRecognition.requestPermission(successCallback, errorCallback)
        
        function successCallback(a){
          console.log('iosSpeach: success', a);
        }
    
        function errorCallback(error){
          console.log('iosSpeach: error', error);
        }

        audioinput.start({
            streamToWebAudio: true
        });
    
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },

    // Vue.js
    setupVue: function() {

        // 1. Import Templates on Top

        // 2. Set Route to Template
        const routes = [
            { path: '/home', component: Home},
            { path: '/write', component: Write},
            { path: '/text', component: TextEdit},
            { path: '/speech', component: Speech},
            { path: '/database', component: Database}
        ]

        // ROUTER INIT
        // Create Router
        const router = new VueRouter({
            routes // kurz für 'routes: routes'
        })

        // RUN APP
        // Run this shit.
        const vm = new Vue({
            el: "#vue-instance",
            // COMPONENTS
            // ROUTER
            router,
            // DATA STORE
            data: {
                title: 'Hello from Vue',
                para: 'awesome to be here!'
            },
        });

    }
};

app.initialize();