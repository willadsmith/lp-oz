import {Flex, Space} from "antd";
import './law-help.scss'
import ScrollBlock from "../../components/scroll-block/scroll-block";
import AboutMePhoto from "../../assets/img/about-me-photo.jpg";
import HelmetComponent from "../../components/helmet/HelmetComponent";

function LawHelp(props) {
    return (
        <Flex id={props.id} className='law-help-block'>
            <HelmetComponent title="Правовая помощь" />
            <Space className='law-help-block-content'>
                <Space className='law-help-block-content-title'>
                    <span className='line'></span>
                    <span className='text'>Правовая помощь</span>
                    <span className='line2'></span>
                </Space>

                <Flex className='main-block-item'>
                    <Flex vertical={true}>
                        <div className='speech-dialog-block'>
                            <img className='person-photo-about-me' alt='about-me-photo' width={400} src={AboutMePhoto}/>
                            <span className='text-speech'><br />Мой приоритет - отстоять Ваши права, свободы и интересы, несмотря на всевозможные препятствия.
                            <br />Мои клиенты - люди и корпорации, которых я уважаю, понимаю и ценю, несмотря на все-возможные предрассудки и стереотипы.
                            <br />Ваше доверие ко мне - это залог успеха для нашего плодотворного сотрудничества!</span>
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