import './button-menu-animate.scss'

export const ButtonMenuAnimate = (props) => {
    return (
        <label onClick={() => props.onClick()} htmlFor="check">
            <input type="checkbox" id="check"/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}