
function Button({ name, onButtonClick }) {
    return (
        <button className='button' onClick={onButtonClick}>{name}</button>
    );
}

export default Button;