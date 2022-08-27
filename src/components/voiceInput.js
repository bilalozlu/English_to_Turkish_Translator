import { useState } from 'react';
import './voiceInput.scss';

function VoiceInput(props) {
    const [micPermission, setMicPermission] = useState("");
    const [recording, setRecording] = useState(false);
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();

    navigator.permissions.query(
        { name: 'microphone' }
    ).then(function (permissionStatus) {
        setMicPermission(permissionStatus.state);

        permissionStatus.onchange = function () {
            setMicPermission(permissionStatus.state);
        }
    });


    const checkAndStartSpeech = () => {
        if (micPermission === "denied") {
            alert("Please give microphone permission to translate with voice")
        }
        else if (recording) {
            stopSpeech();
        }
        else {
            startSpeech();
        }
    };

    const startSpeech = () => {
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US'

        recognition.onstart = () => {
            setRecording(true);
        }

        recognition.onend = () => {
            recognition.stop();
            setRecording(false);
        }
        
        try {
            recognition.start();
            recognition.onresult = (event) => {
                let word = event.results[0][0].transcript;
                props.inputChangeByVoice(word);
            }
        }
        catch {
            recognition.stop();
        }
    };

    const stopSpeech = () => {
        recognition.stop();
        setRecording(false);
    };

    return (
        <div>
            <img src={recording ? "mic.png" : "mute.png"} className={`micImg ${recording && 'recording'}`} alt="mic" onClick={() => checkAndStartSpeech()} />
        </div>
    );
}

export default VoiceInput;
