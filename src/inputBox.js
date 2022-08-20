import { useState } from 'react';
import VoiceInput from './voiceInput';
import './App.css';

function InputBox(props) {
    const [input, setInput] = useState("");

    const handleInputChange = (text) => {
        setInput(text);
        props.enterInputText(text);
    };

    return (
        <div className='inputBox'>
            <textarea className="inputAreaOfInputBox" value={input} onChange={(e) => handleInputChange(e.target.value)}></textarea >
            <VoiceInput inputChangeByVoice={handleInputChange} />
        </div>
    );
}

export default InputBox;