import PropTypes from 'prop-types';
import './outputBox.scss';

function OutputBox(props) {
    return (
        <div className="outputBox">
            <textarea value={props.outputText} readOnly></textarea >
        </div>
    );
}

OutputBox.propTypes = {
    outputText: PropTypes.string
}

export default OutputBox;