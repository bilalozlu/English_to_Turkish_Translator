import { useState } from 'react';
import PropTypes from 'prop-types';
import VoiceInput from './voiceInput';
import './inputBox.scss';

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

InputBox.propTypes = {
    enterInputText: PropTypes.func
}

export default InputBox;