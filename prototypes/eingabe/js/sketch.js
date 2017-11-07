$('body').on('touchmove', function (e) {
    if (!$('.scrollable').has($(e.target)).length) e.preventDefault();
});



var rec = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
rec.onResult = showResult; // bind callback function to trigger when speech is recognized
rec.onError = onError;

rec.continuous = true;
rec.interimResults = false;

let micState = false;
let writeState = false;
let firstTime = true;
let writtenText = "";

let output = document.getElementById('output');
let outputText = "";

function showResult(){
    console.log(rec.resultString); // log the result
    if(micState){
        addText(rec.resultString);
    }
}

function onError(){
    console.log("Error");
}

function addText(newText){
    outputText = outputText + " " + newText;
    output.innerHTML = outputText;
}

$( "#listen" ).click(function() {
    if(!micState){
        if(firstTime){
            rec.start(); // start listening
        }
        micState = true;
        $( "#micState" ).html("settings_voice");
    }else{
        console.log(rec);
        $( "#micState" ).html("mic");
        micState = false;
        firstTime = false;
    }
    
});

$( "#write" ).click(function() {
    if(writeState){
        addText(writtenText);
    }
    $( "#handwritter" ).toggleClass( 'background', 'overlay' );
    writeState = !writeState
        
});

document.querySelector('myscript-text-web').addEventListener('exported', (event) => {
    console.log(event.detail.exports['text/plain']);
    writtenText = event.detail.exports['text/plain'];
});

