import './App.scss';

function TranslateButton(props) {
    return (
        <>
            <button className='translateButton' onClick={() => props.action()}>
                <img src={"arrow.png"} className="arrowImg" alt="arrow" />
                <p>Translate</p>
            </button>
        </>
    );
}

export default TranslateButton;