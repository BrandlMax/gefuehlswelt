cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
        "id": "cordova-plugin-speechrecognition.SpeechRecognition",
        "pluginId": "cordova-plugin-speechrecognition",
        "merges": [
            "window.plugins.speechRecognition"
        ]
    },
    {
        "file": "plugins/cordova-plugin-apiai/www/lib/q.js",
        "id": "cordova-plugin-apiai.Q",
        "pluginId": "cordova-plugin-apiai",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-apiai/www/ApiAIPlugin.js",
        "id": "cordova-plugin-apiai.ApiAIPlugin",
        "pluginId": "cordova-plugin-apiai",
        "clobbers": [
            "window.ApiAIPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-apiai/www/ApiAIPromises.js",
        "id": "cordova-plugin-apiai.ApiAIPromises",
        "pluginId": "cordova-plugin-apiai",
        "clobbers": [
            "window.ApiAIPromises"
        ]
    },
    {
        "file": "plugins/cordova-plugin-audioinput/www/audioInputCapture.js",
        "id": "cordova-plugin-audioinput.AudioInput",
        "pluginId": "cordova-plugin-audioinput",
        "clobbers": [
            "audioinput"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-speechrecognition": "1.1.2",
    "cordova-plugin-apiai": "1.7.4",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-audioinput": "0.3.0"
}
// BOTTOM OF METADATA
});