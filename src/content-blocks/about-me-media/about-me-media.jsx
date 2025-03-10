import {Flex, Space} from "antd";
import './about-me-media.scss'
import AboutMePhoto from "../../assets/img/about_me_media_photo.jpg";
import {useEffect, useRef, useState} from "react";

const aboutMeMedia = [
    { title: 'Сколько стоят страдания?', description: 'Как суды оценивают моральный вред', url: 'https://ndn.info/publikatsii/25252-skolko-stoyat-stradaniya-kak-sudy-otsenivayut-moralnyj-vred/'},
    { title: 'КС напомнил, по каким признакам НКО можно считать иностранным агентом', description: 'Суд отметил, что получение некоммерческой организацией зарубежного...', url: 'https://www.advgazeta.ru/novosti/ks-napomnil-po-kakim-priznakam-nko-mozhno-schitat-inostrannym-agentom/'},
    // { title: 'Приняты законы ужесточения', description: 'Ответственность за нарушение порядка деятельности иногентов', url: 'https://www.advgazeta.ru/novosti/prinyaty-zakony-uzhestochayushchie-otvetstvennost-za-narushenie-poryadka-deyatelnosti-inoagentov'},
    // { title: 'Участницу акции в поддержку Навального оштрафовали на 75 тыс. руб.', description: 'Суд повторно привлек к ответственности жительницу Новосибирска Татьяну Пушкину', url: 'https://nsk.rbc.ru/nsk/23/04/2021/6082a37c9a79470724897aec?fbclid=IwAR1XSBR5sfEKEquwM6UlNhWcwZXZirpt0qpcIHZWU53CDL5F94Xz7BHomfo_aem_AVtgQDTw6zTq4RlQbcgx7ltJHK7lZXgaNliokdQzBSiN59Sm9alDdTZqZ7S755iqkj0'},
    { title: 'Суд решил судьбу 20-летнего долгостроя в тихом центре Новосибирска', description: 'Здание на Урицкого, 19 уже два десятилетия является примером неудачной точечной застройки', url: 'https://precedent.tv/article/63964'},
    { title: 'В первом чтении приняты поправки запрещающие распространять рекламу', description: 'Размещение на информационных ресурсах запрещены', url: 'https://www.advgazeta.ru/novosti/v-pervom-chtenii-prinyaty-popravki-zapreshchayushchie-rasprostranyat-reklamu-na-informatsionnykh-resursakh/'},
    { title: '«Это только начало»: 40 новосибирцев подали иск к СГК — как прошел суд', description: 'Первое заседание', url: 'https://ngs.ru/text/criminal/2024/08/22/73989197/?utm_source=app&utm_medium=ios'},
    { title: 'Конфликт интересов 22.07.2018', description: 'НТН24', url: 'https://youtu.be/QI58kFD7dCs?si=m73qtWTFvf7P7cD9'},
    { title: 'Общественник нашел коттедж семьи главы новосибирского управления Росимущества', description: 'Глава новосибирского управления Росимущества ...', url: 'https://tayga.info/140731?fbclid=IwZXh0bgNhZW0CMTEAAR1PiFJ6-wzAV0AmbBPDV2fOkBAXdHXpJgjS68gl3c6QieoXQy92Dbm9PVw_aem_OHj3juxdkXH_SsR8thaTrA'},
    { title: 'Конфликт интересов 17.12.2017', description: 'НТН24', url: 'https://youtube.com/watch?v=I95yY8PiBBE&si=K45IweD8ba3sF7QG'}
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

    return (<section ref={ domRef } className={ isVisible ? 'about-me-media-block-main-context is-visible' : 'about-me-media-block-main-context\'' }>{ children }</section>);
};

function AboutMeMedia(props) {
    return (
        <Flex id={props.id} className='about-me-media-block' vertical={true}>
            <Space className='about-me-media-block-content'>
                <Space className='about-me-media-block-content-title'>
                    <span className='line'></span>
                    <>Публикации в СМИ</>
                    <span className='line2'></span>
                </Space>
            </Space>
            <Flex className='block-with-posts' vertical={false} align='center' justify={'center'}>
                <Space className='about-me-media-photo'>
                    <img className='person-photo-about-me' alt='about-me-photo' width={400} src={AboutMePhoto}/>
                </Space>
                <Space>
                    <Flex vertical={true}>
                        {aboutMeMedia.map((item, index) => {
                             return <FadeInSection key={index}><div>
                                 <div className='line-link'></div>
                                 <div className='about-me-media-block-main-title'>
                                     <Flex style={{ marginTop: 10 }} vertical={true} justify={'space-between'}>
                                         <h2 className='title'>{item.title}</h2>
                                         <h4 className='description'>{item.description}</h4>
                                     </Flex>

                                     <div className="styled-wrapper">
                                         <a className="button" href={item.url} target={'_blank'} rel={'noopener noreferrer'}>
                                             <div className="button-box">
                                          <span className="button-elem">
                                            <svg
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="arrow-icon"
                                            >
                                              <path
                                                  fill="black"
                                                  d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                              ></path>
                                            </svg>
                                          </span>
                                                 <span className="button-elem">
                                            <svg
                                                fill="black"
                                                viewBox="0 0  24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="arrow-icon"
                                            >
                                              <path
                                                  d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                              ></path>
                                            </svg>
                                          </span>
                                             </div>
                                         </a>
                                     </div>
                                 </div>
                                 {/*<div className='line-link'></div>*/}
                             </div>
                             </FadeInSection>
                            }
                        )}
                    </Flex>
                </Space>
            </Flex>
        </Flex>
    )
}

export default AboutMeMedia;