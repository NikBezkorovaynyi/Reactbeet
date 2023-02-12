import './button.scss'

function Button(props){
    return(
        <button id='butt' className={`button ${props.className}`}>{props.name || "Start"}</button>
    )
}
export default Button