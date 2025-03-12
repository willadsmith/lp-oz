import {Flex, Space} from "antd";
import './about-me.scss'
import {ReadOutlined} from "@ant-design/icons";
import {useEffect, useRef, useState} from "react";
import AboutMePhoto from '../../assets/img/about_me_photo.jpg';
import EmblaCarousel from "../../components/carosel-block/carosel-block";

// certs
import Cert1 from '../../assets/img/cer1.jpg';
import Cert2 from '../../assets/img/cert2.jpg';
import Cert3 from '../../assets/img/cert3.jpg';
import Cert4 from '../../assets/img/cert4.jpg';
import Cert5 from '../../assets/img/cert5.jpg';
import Cert6 from '../../assets/img/cert6.jpg';
import Cert7 from '../../assets/img/cert7.jpg';
import Cert8 from '../../assets/img/cert8.jpg';
import Cert9 from '../../assets/img/cert9.jpg';
import Cert10 from '../../assets/img/cert10.jpg';
import Cert11 from '../../assets/img/cert11.jpg';
import Cert12 from '../../assets/img/cert12.jpg';
import Cert13 from '../../assets/img/cert13.jpg';
import Cert14 from '../../assets/img/cert14.jpg';

// icons
import PracticeFromIcon from '../../assets/img/icons/practice-from-icon.png';
import LawStatus from '../../assets/img/icons/law-status.png';
import LawyerInProcess from '../../assets/img/icons/lawyer-in-process.png';
import AdvocateCreateProcess from '../../assets/img/icons/advocate-create-process.png';
import CorporateLawsEvent from '../../assets/img/icons/corporate-laws-event.png';
import LawyerInShow from '../../assets/img/icons/lawer-in-show.png';
import HelmetComponent from "../../components/helmet/HelmetComponent";

const aboutMeDescription = [
    'Правовая помощь в любой сложной ситуации',
    'Объясню сложные юридические тонкости на понятном языке',
    'Окажу юридические услуги качественно, быстро и без лишних потерь по всем направлениям',
    'Со мной Вы получите надежную защиту и моральную поддержку в решении Ваших вопросов и проблем'
]

const myExperienceItem = [
    {icon: PracticeFromIcon, title: 'Практикую с 2010г.'},
    {icon: LawStatus, title: 'Имею адвокатский статус с 2016г.'},
    {icon: LawyerInProcess, title: 'Представляла интересы клиентов в более, чем 100 судебных дел'},
    {icon: AdvocateCreateProcess, title: 'Впервые сформировала судебные прецеденты по различным делам (подробно можно прочитать в разделе «Мои успешные кейсы»)'},
    {icon: LawyerInShow, title: 'Участвовала в телевизионной передаче «Конфликт интересов» в качестве эксперта'},
    {icon: CorporateLawsEvent , title: 'Организовала 3 просветительских проекта и выступала в них в качестве тренера'}
]

const FadeInSection = ({children}) => {
    const domRef = useRef();

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current);
            }
        });

        observer.observe(domRef.current);

        return () => observer.disconnect();
    }, []);

    return (<section ref={ domRef } className={ isVisible ? ' is-visible' : '' }>{ children }</section>);
};

const OPTIONS = { loop: true }
const SLIDES = [
    <img src={Cert1} width={280} alt="cert"/>,
    <img src={Cert2} width={200} alt="cert"/>,
    <img src={Cert3} width={280} alt="cert"/>,
    <img src={Cert4} width={280} alt="cert"/>,
    <img src={Cert5} width={280} alt="cert"/>,
    <img src={Cert6} width={280} alt="cert"/>,
    <img src={Cert7} width={200} alt="cert"/>,
    <img src={Cert8} width={280} alt="cert"/>,
    <img src={Cert9} width={280} alt="cert"/>,
    <img src={Cert10} width={280} alt="cert"/>,
    <img src={Cert11} width={280} alt="cert"/>,
    <img src={Cert12} width={280} alt="cert"/>,
    <img src={Cert13} width={200} alt="cert"/>,
    <img src={Cert14} width={280} alt="cert"/>,
]


function AboutMe(props) {
    return (
        <Flex align={'center'} id={props.id} className='about-me-block' vertical={true}>
            <HelmetComponent title="Обо мне" />
            <Space className='about-me-block-content'>
                <Space className='about-me-block-content-title'>
                    <span className='line'></span>
                    <>Обо мне</>
                    <span className='line2'></span>
                </Space>
                <Space className='about-me-block-description'>
                    <img className='person-photo-about-me' alt='about-me-photo' width={300} src={AboutMePhoto}/>
                    <Space className='about-me-block-description-container'>
                        <Space>
                            <h2 className='about-me-block-description-title'>Адвокат Ольга Забалуева</h2>
                        </Space>
                        {aboutMeDescription.map((item, i) => {
                            return <FadeInSection key={i}>
                                <Space>
                                    <ReadOutlined style={{ color: '#fff' }}/>
                                    <h4 key={i} className='about-me-block-description-list'>
                                        {item}</h4>
                                </Space>
                            </FadeInSection>
                        })}
                    </Space>
                </Space>
                <Space className='about-me-block-content-sub-title'>
                    <span className='line'></span>
                    <>Мой опыт</>
                    <span className='line2'></span>
                </Space>
            </Space>
            <Flex vertical={true} className='about-me-block-lines'>
                {myExperienceItem.map((item, i) => {
                    return <FadeInSection key={i}><Space key={i} className='card-info-block'>
                        <img alt={i} className='icon-change-color-base' width={30} src={item.icon} /> {i === 3 ?
                        <p style={{ display: 'flex', flexDirection: 'row' }}>Впервые сформировала судебные прецеденты по различным делам (подробно можно прочитать в
                            разделе <a href="#part-3" id="hover-style" data-replace="«Мои успешные кейсы»"><span>«Мои успешные кейсы»</span></a> )
                        </p>
                        : item.title}
                    </Space></FadeInSection>
                })}
            </Flex>
            <Flex>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </Flex>
        </Flex>
    )
}

export default AboutMe;