import { useState } from 'react';

function VoiceInput(props) {
    const [micPermission, setMicPermission] = useState("");

    navigator.permissions.query(
        { name: 'microphone' }
    ).then(function (permissionStatus) {
        setMicPermission(permissionStatus.state);

        permissionStatus.onchange = function () {
            setMicPermission(permissionStatus.state);
        }
    });

    const recognition = new window.webkitSpeechRecognition();

    const checkPermissionAndStartSpeech = () => {
        if (micPermission === "denied") {
            alert("Please, give microphone permission to translate with voice")
        }
        else {
            startSpeech();
        }
    };

    const startSpeech = () => {
        recognition.interimResults = true;
        recognition.lang = 'en-US'

        recognition.onend = () => {
            recognition.stop();
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

    return (
        <div>
            <button onClick={() => checkPermissionAndStartSpeech()}>PLAY</button>
        </div>
    );
}

export default VoiceInput;