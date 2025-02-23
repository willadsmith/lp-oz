import {Flex, Space} from "antd";
import './contacts.scss'

function Contacts(props) {
    return (
        // <Flex id={props.id} className='contacts-block'>
        //     <>Контакты</>
        // </Flex>

        <Flex id={props.id} className='contacts-block' vertical={true}>
            <Space className='contacts-block-content'>
                <Space className='contacts-block-content-title'>
                    <span className='line'></span>
                    <>Контакты</>
                </Space>
            </Space>
        </Flex>
    )
}

export default Contacts;