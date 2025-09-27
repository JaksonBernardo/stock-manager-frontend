import '../../css/ButtonLogin.css';

const ButtonLogin = (props) => {

    

    return(
        <button
            type="submit"
            className="blue-button"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )

}

export default ButtonLogin;
