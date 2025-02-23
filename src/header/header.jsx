import './header.scss'
import {Image} from "antd";

function Header() {
    return (
        <div className="header-block">
           <Image alt={'lady-person'} src={require('../assets/img/lady-person.jpg')} />
        </div>
    )
}

export default Header;