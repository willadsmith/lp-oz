import { Flex, Space } from "antd";
import './contacts.scss'
import ContactMeButtonDark from "../../components/contact-me-button-dark/contact-me-button-dark";
import ButtonDarkSocial from "../../components/button-dark-social/button-dark-social";

// qr
import QrVk from './../../assets/img/qr_vk.jpg'
import HelmetComponent from "../../components/helmet/HelmetComponent";

function Contacts(props) {
    return (
        <Flex id={props.id} className='contacts-block' vertical={true}>
            <HelmetComponent title='Контакты' />
            <Space className='contacts-block-content'>
                <Space className='contacts-block-content-title'>
                    <span className='line'></span>
                    <>Контакты</>
                    <span className='line2'></span>
                </Space>
            </Space>
            <Space className='contacts-block-content-buttons-block'>
                <Space className='contacts-block-item-secondary'>
                    <Space className='contacts-block-content-buttons-block-1' vertical={true}>
                        <img className='vk-qr-block' style={{ borderRadius: 4, marginBottom: 20 }} alt='qr' src={QrVk} width='280px' />
                        <ContactMeButtonDark onPress={() => props.onPress()} />
                    </Space>
                    <Flex vertical={true}>
                        <Flex justify='center' align='center' vertical={false}>
                            <Space className='contacts-block-content-buttons-block-2'>
                                <ButtonDarkSocial onPress={() => window.open('https://t.me/olgazabalueva_nsk', '_blank')} title='Telegram'/>
                                <ButtonDarkSocial onPress={() => window.open('https://www.facebook.com/olgazabalueva.siberia', '_blank')} title='Facebook'/>
                                <ButtonDarkSocial onPress={() => window.open('https://www.instagram.com/olgazabalueva_nsk', '_blank')} title='Instagram'/>
                            </Space>
                        </Flex>
                        <Space>
                            <Space className='contact-block-attentions'>
                                * Институт права и публичной политики, Московская школа гражданского просвещения, Фонд «Так-так-так»,  Институт развития прессы Сибирь, Комитет по предотвращению пыток внесены Минюстом РФ в реестр иностранных агентов
                                <br />* Facebook, Instagram принадлежит компании Meta Platforms Inc., которая признана экстремистской организацией в РФ
                            </Space>
                        </Space>
                    </Flex>
                </Space>
            </Space>
        </Flex>
    )
}

export default Contacts;