import {Flex, Space} from "antd";
import './law-help.scss'
import ScrollBlock from "../../components/scroll-block/scroll-block";
import AboutMePhoto from "../../assets/img/about-me-photo.jpg";

function LawHelp(props) {
    return (
        <Flex id={props.id} className='law-help-block'>
            <Space className='law-help-block-content'>
                <Space className='law-help-block-content-title'>
                    <span className='line'></span>
                    <span className='text'>Правовая помощь</span>
                </Space>

                <Flex className='main-block-item'>
                    <Flex vertical={true}>
                        <div className='speech-dialog-block'>
                            <img className='person-photo-about-me' alt='about-me-photo' width={400} src={AboutMePhoto}/>
                            <br /><span className='text-speech'>Мой приоритет - отстоять Ваши права, свободы и интересы, несмотря на всевозможные препятствия.
                        Мои клиенты - люди и корпорации, которых я уважаю, понимаю и ценю, несмотря на все-возможные предрассудки и стереотипы.
                        Ваше доверие ко мне - это залог успеха для нашего плодотворного сотрудничества!</span>
                        </div>
                    </Flex>
                    <div>
                        <ScrollBlock onPress={() => props.onPress()}/>
                    </div>
                </Flex>
            </Space>
        </Flex>
    )
}

export default LawHelp;