import './header.scss'
import LadyPerson from './../assets/img/lady_person-without-bg.png';
import { Divider, Flex, Space } from 'antd';
import ContactMeButton from "../components/contact-me-button/contact-me-button";

function Header(props) {
    return (
        <Flex className="header-block" direction="row" justify='center' alignItems="center">
            <Flex className='header-block-title' vertical={true} alignItems="center" justify="center">
                <h3 className='title-vacancy'>Адвокат</h3>
                <h1 className='title-firstname'>Ольга Забалуева</h1>
                <Divider style={{background: '#fff'}}/>
                <h4 className='title-slogan'> - Ваш надёжный защитник - </h4>
                <Flex justify='flex-end' alignItems="center">
                    <ContactMeButton onPress={() => props.openModalHandler()} />
                </Flex>
            </Flex>
            <Flex>
                <Space className='person-photo'>
                    <img alt={'lady-person'} height={700} src={LadyPerson}/>
                </Space>
            </Flex>
        </Flex>
    )
}

export default Header;