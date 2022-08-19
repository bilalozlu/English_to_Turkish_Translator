import './App.css';

function App() {

  navigator.permissions.query(
    { name: 'microphone' }
).then(function(permissionStatus){

    console.log(permissionStatus.state); // granted, denied, prompt

    permissionStatus.onchange = function(){
        console.log("Permission changed" + permissionStatus.state);
    }

})


  const grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
  const recognition = new window.webkitSpeechRecognition();
  const speechRecognitionList = new window.webkitSpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  
  const startSpeech = () => {
    recognition.continuous = true;
    recognition.interimresults = false;
    recognition.lang = 'en-US'
    recognition.grammars = speechRecognitionList;

    recognition.onstart = (e) => {
      // called immediately after .start() as expected
      console.log("onstart");
    }
    recognition.onend = () => {
      // called immediately after onstart, not as expected
      console.log("onend");
    }

    recognition.start();
    recognition.onresult = (event) => {
      console.log("asdasdasdasd")
      //handle result in here
      let word = event.results[0][0].transcript;
      console.log("word",word);
      recognition.stop();
    }
  }
  
  const abortSpeech = () => {
    recognition.abort();
    console.log('Speech recognition aborted.');
  }
  
  const stopSpeech = () => {
    recognition.stop();
    console.log('Speech recognition has stopped.');
  }

  recognition.onresult = (event) => {
    //handle result in here
    let word = event.results[0][0].transcript;
    console.log(word);
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => startSpeech()}>PLAY</button>
        <button onClick={() => stopSpeech()}>STOP</button>
      </header>
    </div>
  );
}

export default App;
