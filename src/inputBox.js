import { useState } from 'react';
import VoiceInput from './voiceInput';

function InputBox(props) {
    const [input, setInput] = useState("");

    const handleInputChange = (text) => {
        setInput(text);
        props.enterInputText(text);
    };

    return (
        <div>
            <input value={input} onChange={(e) => handleInputChange(e.target.value)}></input>
            <VoiceInput inputChangeByVoice={handleInputChange} />
        </div>
    );
}

export default InputBox;