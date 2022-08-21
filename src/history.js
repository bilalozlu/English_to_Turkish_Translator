import './App.css';

function History(props) {
    return (
        <div className="history">
            {props.translatedList ? 
                props.translatedList.map(a => 
                <p key={a}>{a}</p>
            )
            : <p>You did not translate anything yet, try one please</p>}
        </div>
    );
}

export default History;