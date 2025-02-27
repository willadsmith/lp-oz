import {Flex, Space} from "antd";
import './footer-block.scss'

function Footer() {
    return (
        <Flex className='footer-block'>
            <Space className='footer-block-content'>
                @ 2025, Ольга Забалуева
            </Space>
            {/*<Space className='footer-block-content'>*/}
            {/*    * принадлежит компании Meta Platforms Inc., которая признана экстремистской организацией*/}
            {/*</Space>*/}
        </Flex>
    )
}

export default Footer;