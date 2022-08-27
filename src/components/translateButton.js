import PropTypes from 'prop-types';
import './translateButton.scss';

function TranslateButton(props) {
    return (
        <div>
            <button className='translateButton' onClick={props.action}>
                <img src={"arrow.png"} className="arrowImg" alt="arrow" />
                <p>Translate</p>
            </button>
        </div>
    );
}

TranslateButton.propTypes = {
    action: PropTypes.func
}

export default TranslateButton;