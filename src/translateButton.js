import './App.scss';

function TranslateButton(props) {
    return (
        <div>
            <button className='translateButton' onClick={() => props.action()}>
                <img src={"arrow.png"} className="arrowImg" alt="arrow" />
                <p>Translate</p>
            </button>
        </div>
    );
}

export default TranslateButton;