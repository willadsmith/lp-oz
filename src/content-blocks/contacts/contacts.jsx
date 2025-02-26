import {Button, Flex, Space} from "antd";
import QrVk from './../../assets/img/qr_vk.jpg'
import './contacts.scss'
import AboutMePhoto from "../../assets/img/about-me-photo.jpg";

function Contacts(props) {
    return (
        <Flex id={props.id} className='contacts-block' vertical={true}>
            <Space className='contacts-block-content'>
                <Space className='contacts-block-content-title'>
                    <span className='line'></span>
                    <>Контакты</>
                </Space>
                <Space className='contacts-block-content-buttons-block'>
                    <Space className='contacts-block-content-buttons-block-1' vertical={true}>
                        <img style={{ borderRadius: 4, marginBottom: 20, marginLeft: 30 }} alt='qr' src={QrVk} width='250px' />
                        <Button className='button-contacts-main'>
                            Отправить заявку
                        </Button>
                    </Space>
                    <Space className='contacts-block-content-buttons-block-2' >
                        <Button className='button-contacts-main'>Instagram</Button>
                        <Button className='button-contacts-main'>Вконтакте</Button>
                        <Button className='button-contacts-main'>Telegram</Button>
                    </Space>
                    <Space className='contacts-block-content-buttons-block-3'>
                        <img className='person-photo-about-me' alt='about-me-photo' width={400} height={280} src={AboutMePhoto}/>
                    </Space>
                </Space>
            </Space>
        </Flex>
    )
}

export default Contacts;