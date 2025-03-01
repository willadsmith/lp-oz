import './button-menu-animate.scss'

export const ButtonMenuAnimate = (props) => {
    return (
        <label onClick={(e) => props.onClick(e)} htmlFor="check">
            <input type="checkbox" id="check"/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}