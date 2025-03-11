import {ConfigProvider, Flex, Space, Timeline} from "antd";
import './success-cases.scss'
import { StarFilled } from "@ant-design/icons";
import {useEffect, useRef, useState} from "react";

const successCasesItem = [
    { children: 'Оказывала юридическое сопровождение процедуры банкротства застройщика ООО «Сумет.Сибирь.Плюс» и впервые в городе Новосибирске обманутым дольщикам был передан объект незавершенного строительства для создания ЖСК и самостоятельной достройки объекта ', color: '#00CCFF', dot: <StarFilled />},
    { children: 'Выиграла  множество дел по защите прав потребителей о взыскании с застройщиков неустойки за просрочку исполнения обязательств по передаче квартиры по договорам долевого участия в строительстве ', color: '#00CCFF', dot: <StarFilled />},
    { children: 'В пользу неопределенного круга потребителей вынесены десятки решений о признании противоправными действий производителей пищевой продукции об изготовлении продуктов питания, не соответствующих требованиях нормативно-правовых актов РФ', color: '#00CCFF', dot: <StarFilled />},
    { children: 'Суд по моим обращениям в интересах клиентов признал 3 публичных сервитута, установленных мэрией города Новосибирска, недействующими ', color: '#00CCFF', dot: <StarFilled />},
    { children: 'В трёх инстанциях устояло решение суда о признании не действующим в части Закона Новосибирской области от 25.02.2021 № 59-ОЗ «О внесении изменений в Закон Новосибирской области "Об особо охраняемых природных территориях в Новосибирской области», по исковому заявлению, поданному в общественных интересах ', color: '#00CCFF', dot: <StarFilled />},
    { children: 'В интересах моего клиента вынесено решение об обязании застройщика снести самовольную постройку на ул. Урицкого,19 в г. Новосибирске (дело было рассмотрено во всех инстанциях вплоть до Верховного Суда РФ) ', color: '#00CCFF', dot: <StarFilled />},
    { children: 'Впервые были признаны незаконными общественные слушания по объекту государственной экологической экспертизы «Строительство полигона ТКО в Искитимском районе Новосибирской области» по иску моего клиента. ', color: '#00CCFF', dot: <StarFilled />}
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

    return (<li ref={ domRef } className={ isVisible ? 'success-cases-li is-visible' : '' }>{ children }</li>);
};

function SuccessCases(props) {
    return (
        <Flex id={props.id} className='success-cases-block'>
            <Space className='success-cases-block-content'>
                <Space className='success-cases-block-content-title'>
                    <span className='line'></span>
                    <span className='text'>Мои успешные кейсы</span>
                    <span className='line2'></span>
                </Space>
                <Space className='success-cases-block-content-title_sub'>
                    <span className='text2'>Здесь представлены некоторые интересные дела, по которым вынесены решения в пользу моих клиентов для общего понимания моей частной практики.</span>
                </Space>
                <Space className='success-cases-block-timeline-desktop'>
                    <ol style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} role="list">
                        {successCasesItem.map((item, index) => {
                            return <FadeInSection key={index}>{item.children}</FadeInSection>
                        })}
                    </ol>
                </Space>

                <Space className='success-cases-block-timeline'>
                    <ConfigProvider
                        theme={{
                            components: {
                                Timeline: {
                                    tailColor: 'white',
                                    colorText: 'white',
                                    dotBg: '#1B1823FF',
                                    fontFamily: 'GoznakBold',
                                    tailWidth: '0.1px',
                                    visibility: ''
                                }
                            }
                        }}
                    >
                        <Timeline
                            tailColor='white'
                            items={successCasesItem}
                        />
                    </ConfigProvider>
                </Space>
            </Space>
        </Flex>
    )
}

export default SuccessCases;