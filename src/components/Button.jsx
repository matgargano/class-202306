import './Button.css';

const Button = ({onClick, children, theme, disabled}) => {

    
    return <button disabled={disabled} className={`Button ${theme}`} onClick={onClick} >{children}</button>


}


Button.defaultProps = {
    theme: 'dark',
    disabled: false,
}

export default Button;
