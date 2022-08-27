import { useState } from 'react';
import PropTypes from 'prop-types';
import './history.scss';

function History(props) {
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);

    return (
        <div className="history">
            <div className='historyToggle'>
                <h2>History</h2>
                <img src={"arrow.png"}
                    className={`toggleImg ${isHistoryOpen ? 'open' : 'closed'}`}
                    onClick={() => setIsHistoryOpen(!isHistoryOpen)} alt="history" />
            </div>
            {!isHistoryOpen ? null :
                props.translatedList ?
                    props.translatedList.map(a =>
                        <p key={a}>{a}</p>
                    )
                    : <p>You did not translate anything yet, try one please</p>}

        </div>
    );
}

History.propTypes = {
    translatedList: PropTypes.array
}

export default History;