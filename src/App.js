import { useState, useEffect } from 'react';
import InputBox from './inputBox';
import OutputBox from './outputBox';
import History from './history'
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
    <div className='App'>
      <div className='title'>
        <h2>Spaceship Mission (Turkish Translation)</h2>
      </div>
      <div className="body">
        <InputBox enterInputText={handleInputText} />
        <img src={"arrow.png"} className="arrowImg" alt="arrow" />
        <OutputBox outputText={outputInEnglish} />
      </div>
      <div className='history'>
        <h2>History</h2>
        <History />
      </div>
    </div>
  );
}

export default App;
