import './header.scss'
import LadyPersonResize from '../../assets/img/lady_person-without-bg_resize.png';
import { Divider, Flex, Space } from 'antd';
import ContactMeButton from "../../components/contact-me-button/contact-me-button";

function Header(props) {
    return (
        <Flex className="header-block" direction="row" justify='center' alignItems="center">
            <Flex className='header-block-title-desktop' vertical={true} alignItems="center" justify="center">
                <h3 className='title-vacancy'>Адвокат</h3>
                <h1 className='title-firstname'>Ольга Забалуева</h1>
                <Divider className='header-block-divider'/>
                <h4 className='title-slogan'> - Ваш надёжный защитник - </h4>
                <Flex className='header-block-button-desktop' justify='flex-end' alignItems="center">
                    <ContactMeButton onPress={() => props.openModalHandler()} />
                </Flex>
            </Flex>
            <Flex  alignItems="center" justify="center">
                <Space className='person-photo'>
                    <Flex className='header-block-title-mobile'>
                        <h3 className='title-vacancy'>Адвокат</h3>
                        <h1 className='title-firstname'>Ольга <br/>Забалуева</h1>
                        <Divider className='header-block-divider'/>
                        <h4 className='title-slogan'> - Ваш надёжный защитник - </h4>
                        <ContactMeButton onPress={() => props.openModalHandler()} />
                    </Flex>
                    <img className='lady-person-photo' alt={'lady-person'} height={700} src={LadyPersonResize}/>
                </Space>
            </Flex>
        </Flex>
    )
}

export default Header;