import { useEffect, useState } from 'react';
import InputBox from './components/inputBox';
import TranslateButton from './components/translateButton';
import OutputBox from './components/outputBox';
import History from './components/history';
import './App.scss';

function App() {
  const [inputInEnglish, setInputInEnglish] = useState("");
  const [outputInTurkish, setOutputInTurkish] = useState("");
  const [lastTranslation, setLastTranslation] = useState("");
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
          let res = await fetch('https://lingva.ml/api/v1/en/tr/' + inputInEnglish);
          res = await res.json();
          setOutputInTurkish(res.translation);
          setLastTranslation(inputInEnglish + " : " + res.translation)
        }
        resFunc();
      }
      catch {
        console.error("cannot get api result")
      }
    }
  };

  useEffect(() => {
    if (lastTranslation !== "" && lastTranslation !== null) {
      let results = JSON.parse(localStorage.getItem("history")) || [];
      results.unshift(lastTranslation);
      localStorage.setItem("history", JSON.stringify(results));
      setHistory(JSON.stringify(results));
    }
  }, [lastTranslation]);


  return (
    <div className='App'>
      <div className='title'>
        <h2>English to Turkish Translation</h2>
      </div>
      <div className="body">
        <InputBox enterInputText={handleInputText} />
        <TranslateButton action={translate} />
        <OutputBox outputText={outputInTurkish} />
      </div>
      <div className='historyArea'>
        <History translatedList={JSON.parse(history)} />
      </div>
    </div>
  );
}

export default App;
