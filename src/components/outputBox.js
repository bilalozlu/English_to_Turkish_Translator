import './outputBox.scss';

function OutputBox(props) {
    return (
        <div className="outputBox">
            <textarea value={props.outputText} readOnly></textarea >
        </div>
    );
}

export default OutputBox;