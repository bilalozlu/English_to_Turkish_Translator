import './App.css';

function OutputBox(props) {
    return (
        <div className="outputBox">
            <textarea value={props.outputText} readonly></textarea >
        </div>
    );
}

export default OutputBox;