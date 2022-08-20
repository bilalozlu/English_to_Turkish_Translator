import { useState, useEffect } from 'react';
import InputBox from './inputBox';
import OutputBox from './outputBox';
import './App.css';

function App() {
  const [inputInTurkish, setInputInTurkish] = useState("");
  const [outputInEnglish, setOutputInEnglish] = useState("");

  const handleInputText = (text) => {
    setInputInTurkish(text);
  };

  useEffect(() => {
    if (inputInTurkish === "" || inputInTurkish === null) {
      setOutputInEnglish("");
    }
    else {
      try {
        async function resFunc() {
          let res = await fetch("https://translate.argosopentech.com/translate", {
            method: "POST",
            body: JSON.stringify({
              q: inputInTurkish,
              source: "en",
              target: "tr",
            }),
            headers: { "Content-Type": "application/json" }
          });
          res = await res.json();
          setOutputInEnglish(res.translatedText);
        }
        resFunc();
      }
      catch {
        console.error("cannot get api result")
      }
    }
  }, [inputInTurkish]);


  return (
    <div className="App">
      <InputBox enterInputText={handleInputText} />
 
      <OutputBox outputText={outputInEnglish} />
    </div>
  );
}

export default App;
