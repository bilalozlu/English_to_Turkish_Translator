function OutputBox(props) {
    return (
        <div>
            <input value={props.outputText} disabled></input>
        </div>
    );
}

export default OutputBox;