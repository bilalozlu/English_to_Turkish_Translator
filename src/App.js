import { useEffect, useState } from 'react';
import InputBox from './inputBox';
import OutputBox from './outputBox';
import History from './history'
import './App.css';

function App() {
  const [inputInEnglish, setInputInEnglish] = useState("");
  const [outputInTurkish, setOutputInTurkish] = useState("");
  const [history, setHistory] = useState(localStorage.getItem("history"));


  const handleInputText = (text) => {
    setInputInEnglish(text);
  };

  const translate = () => {
    if (inputInEnglish === "" || inputInEnglish === null) {
      setOutputInTurkish("");
    }
    else {
      try {
        async function resFunc() {
          let res = await fetch("https://translate.argosopentech.com/translate", {
            method: "POST",
            body: JSON.stringify({
              q: inputInEnglish,
              source: "en",
              target: "tr",
            }),
            headers: { "Content-Type": "application/json" }
          });
          res = await res.json();
          setOutputInTurkish(res.translatedText);
        }
        resFunc();
      }
      catch {
        console.error("cannot get api result")
      }
    }
  };

  useEffect(() => {
    if (outputInTurkish !== "" && outputInTurkish !== null) {
      let results = history ? JSON.parse(localStorage.getItem("history")) : [];
      results.unshift(inputInEnglish + " : " + outputInTurkish);
      localStorage.setItem("history", JSON.stringify(results));
      setHistory(JSON.stringify(results));
    }
  }, [outputInTurkish]); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className='App'>
      <div className='title'>
        <h2>Spaceship Mission (Turkish Translation)</h2>
      </div>
      <div className="body">
        <InputBox enterInputText={handleInputText} />
        <img src={"arrow.png"} className="arrowImg" alt="arrow" onClick={() => translate()} />
        <OutputBox outputText={outputInTurkish} />
      </div>
      <div className='history'>
        <h2>History</h2>
        <History translatedList={JSON.parse(history)}/>
      </div>
    </div>
  );
}

export default App;
