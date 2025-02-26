import {Flex, Space} from "antd";
import AboutMePhoto from '../../assets/img/about-me-photo.jpg';
import PracticeFromIcon from '../../assets/img/icons/practice-from-icon.png';
import LawStatus from '../../assets/img/icons/law-status.png';
import LawyerInProcess from '../../assets/img/icons/lawyer-in-process.png';
import AdvocateCreateProcess from '../../assets/img/icons/advocate-create-process.png';
import CorporateLawsEvent from '../../assets/img/icons/corporate-laws-event.png';
import LawyerInShow from '../../assets/img/icons/lawer-in-show.png';
import './about-me.scss'
import {ReadOutlined} from "@ant-design/icons";

const aboutMeDescription = [
    'Правовая помощь в любой сложной ситуации',
    'Объясню сложные юридические тонкости на понятном языке',
    'Окажу юридические услуги качественно, быстро и без лишних потерь по всем направле-ниям',
    'Со мной Вы получите надежную защиту и моральную поддержку в решении Ваших во-просов и проблем'
]

const myExperienceItem = [
    {icon: PracticeFromIcon, title: 'Практикую с 2010г.'},
    {icon: LawStatus, title: 'Имею адвокатский статус с 2016г.'},
    {icon: LawyerInProcess, title: 'Представляла интересы клиентов в более, чем 100 судебных дел'},
    {icon: AdvocateCreateProcess, title: 'Впервые сформировала судебные прецеденты по различным делам (подробно можно прочитать в разделе «Мои успешные кейсы»)'},
    {icon: LawyerInShow, title: 'Участвовала в телевизионной передаче «Конфликт интересов» в качестве эксперта'},
    {icon: CorporateLawsEvent , title: 'Организовала 3 просветительских проекта и выступала в них в качестве тренера'}
]

function AboutMe(props) {
    return (
        <Flex align={'center'} id={props.id} className='about-me-block' vertical={true}>
            <Space className='about-me-block-content'>
                <Space className='about-me-block-content-title'>
                    <span className='line'></span>
                    <>Обо мне</>
                </Space>
                <Space className='about-me-block-description'>
                    <img className='person-photo-about-me' alt='about-me-photo' width={300} src={AboutMePhoto}/>
                    <Space className='about-me-block-description-container'>
                        <Space>
                            <h2 className='about-me-block-description-title'>Адвокат Ольга Забалуева</h2>
                        </Space>
                        {aboutMeDescription.map((item, i) => {
                            return <Space>
                                <ReadOutlined style={{ color: '#fff' }}/>
                                <h4 key={i} className='about-me-block-description-list'>
                                    {item}</h4>
                            </Space>
                        })}
                    </Space>
                </Space>
                <Space className='about-me-block-content-sub-title'>
                    <span className='line'></span>
                    <>Мой опыт</>
                </Space>
            </Space>
            <Flex vertical={true} className='about-me-block-lines'>
                {myExperienceItem.map((item, i) => {
                    return <Space key={i} className='card-info-block'>
                        <img alt={i} className='icon-change-color-base' width={30} src={item.icon} /> {i === 3 ?
                        <p style={{ display: 'flex', flexDirection: 'row' }}>Впервые сформировала судебные прецеденты по различным делам (подробно можно прочитать в
                            разделе <a href="#part-3" id="hover-style" data-replace="«Мои успешные кейсы»"><span>«Мои успешные кейсы»</span></a> )
                        </p>
                        : item.title}
                    </Space>
                })}
            </Flex>
        </Flex>
    )
}

export default AboutMe;