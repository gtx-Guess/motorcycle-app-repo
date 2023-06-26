import '../styles/error-bubble.css';

const ErrorBubble = ({ text='default text' }) => {
    return(
        <div id='errorBubbleDiv' className={'errorBubble'}>
            <p>{text}</p>
        </div>
    )
};

export default ErrorBubble;