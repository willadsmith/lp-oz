import {Anchor, Button, Col, Drawer, Flex, Input, Modal, Row, Spin} from "antd";
import AboutMe from "../../content-blocks/about-me/about-me";
import LawHelp from "../../content-blocks/law-help/law-help";
import SuccessCases from "../../content-blocks/success-cases/success-cases";
import AboutMeMedia from "../../content-blocks/about-me-media/about-me-media";
import Contacts from "../../content-blocks/contacts/contacts";
import Header from "../header/header";
import {useEffect, useState} from "react";
import './main-page.scss'
import Footer from "../footer/footer";
import {ButtonMenuAnimate} from "../../components/button-menu-animate/button-menu-animate";

function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const [emailClient, setEmailClient] = useState('');
    const [fioClient, setFioClient] = useState('');
    const [questionClient, setQuestionClient] = useState('');

    const [disabledButton, setDisabledButton] = useState(false);
    const [loaderButton, setLoaderButton] = useState(false);

    const handleOk = () => {
        setLoaderButton(true)
        return fetch('https://willadsmith-mail-service-4a54.twc1.net/api/contact', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                    fio: fioClient,
                    email: emailClient,
                    message: questionClient,
                })}
        )
            .then(res => {
                setEmailClient('')
                setFioClient('')
                setQuestionClient('')
                setLoaderButton(false)
                setIsModalOpen(false);
            })
            .catch(err => {
                console.log(err);
                setEmailClient('')
                setFioClient('')
                setQuestionClient('')

                setLoaderButton(false)
            });
    };
    const handleCancel = () => {
        setEmailClient('');
        setFioClient('');
        setQuestionClient('');


        setIsModalOpen(false);
    };


    const antAnchorContainer = document.getElementsByClassName('ant-anchor')
    const antAnchorLinkTitle = document.getElementsByClassName('ant-anchor-link-title')
    const antAnchorLink = document.getElementsByClassName('ant-anchor-link')
    const antAnchorInk = document.getElementsByClassName('ant-anchor-ink')
    const spanIconElementDrawerMenu = document.querySelectorAll('span');

    //background-color: #f6ffed;
    function anchorLinkTitleChange () {
        for (let i = 0; i < antAnchorLinkTitle.length; i++) {
            antAnchorLinkTitle[i].style.color = '#f6ffed';
            antAnchorLinkTitle[i].classList.add('ant-anchor-font');
        }
    }

    function anchorLinkChange () {
        for (let i = 0; i < antAnchorLinkTitle.length; i++) {
            // antAnchorLink[i]?.classList.add('ant-anchor-font');
            antAnchorLink[i].style.fontFamily = 'GoznakBold';
        }
    }

    function antInkChange () {
        for (let i = 0; i < antAnchorInk.length; i++) {
            antAnchorInk[i].style.backgroundColor = '#f6ffed';
        }
    }

    useEffect(() => {
        antAnchorContainer[0].style.padding = '15px 160px'
        antAnchorContainer[0].classList.add('ant-anchor-blur');
    }, [antAnchorContainer])

    useEffect(() => {
        anchorLinkTitleChange()
    }, [antAnchorLinkTitle])

    useEffect(() => {
        anchorLinkChange()
    }, [antAnchorLink])

    useEffect(() => {
        antInkChange()
    }, [antAnchorInk])

    useEffect(() => {
        if (fioClient === '' || questionClient === '' || emailClient === '') {
            setDisabledButton(true)
        } else {
            setDisabledButton(false)
        }
    }, [fioClient, questionClient, emailClient])

    useEffect(() => {
        for (let i = 0; i < spanIconElementDrawerMenu.length; i++) {
            if (spanIconElementDrawerMenu[i].offsetParent !== null) {
                if (spanIconElementDrawerMenu[i].offsetParent.classList[0] === 'main-page-menu-icon-mobile-small' ||
                    spanIconElementDrawerMenu[i].offsetParent.classList[0] === 'main-page-menu-icon-mobile'
                ) {
                    openDrawer ?
                        spanIconElementDrawerMenu[i].parentElement.querySelectorAll('input')[0].checked = true
                        :
                        spanIconElementDrawerMenu[i].parentElement.querySelectorAll('input')[0].checked = false
                }
            }
        }
    }, [spanIconElementDrawerMenu])

    const [openDrawer, setDrawerOpen] = useState(false);

    const onClickOpenDrawerHandler = (e) => {
        if (e.target.type === 'checkbox' || e.target.className === 'ant-anchor-link-title') {
            openDrawer ? setDrawerOpen(false) : setDrawerOpen(true);
        }
    }

    return (
        <>
            <Flex className={openDrawer ? 'main-page-menu-icon-mobile-small' : 'main-page-menu-icon-mobile'}>
                <ButtonMenuAnimate onClick={(e) => onClickOpenDrawerHandler(e)} />
            </Flex>
            <Drawer open={openDrawer}>
                <Row>
                    <Col span={8}>
                        <Anchor
                            onClick={(e) => onClickOpenDrawerHandler(e)}
                            items={[
                                {
                                    key: 'part-1',
                                    href: '#part-1',
                                    title: 'Обо мне',
                                },
                                {
                                    key: 'part-2',
                                    href: '#part-2',
                                    title: 'Правовая помощь',
                                },
                                {
                                    key: 'part-3',
                                    href: '#part-3',
                                    title: 'Мои успешные кейсы',
                                },
                                {
                                    key: 'part-4',
                                    href: '#part-4',
                                    title: 'Публикации в СМИ',
                                },
                                {
                                    key: 'part-5',
                                    href: '#part-5',
                                    title: 'Контакты',
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </Drawer>
            <Modal
                title={<span style={{width: '100%', fontFamily: 'GoznakBold'}}> Заполните форму </span>}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={
                    <Button onClick={handleOk} disabled={disabledButton || loaderButton} style={{width: '100%', fontFamily: 'GoznakBold'}} color="default" variant="outlined">
                        {!loaderButton && 'Отправить заявку'}
                        {loaderButton && <Spin />}
                    </Button>}>
                <p style={{fontFamily: 'GoznakBold'}}>Кратко опишите суть проблемы и я обязательно помогу Вам</p>
                <Input value={fioClient} onChange={(e) => setFioClient(e.target.value)} placeholder="Ваше ФИО" autoSize/>
                <div
                    style={{
                        margin: '12px 0',
                    }}
                />
                <Input value={emailClient} onChange={(e) => setEmailClient(e.target.value)} placeholder="Ваш e-mail адрес" autoSize={{
                    minRows: 2,
                    maxRows: 6,
                }}
                />
                <div
                    style={{
                        margin: '24px 0',
                    }}
                />
                <Input
                    value={questionClient}
                    onChange={(e) => setQuestionClient(e.target.value)}
                    placeholder="Ваш вопрос"
                    autoSize={{
                        minRows: 3,
                        maxRows: 5,
                    }}
                />
            </Modal>
            <div className='desktop_main_menu'>
                <Anchor
                    direction="horizontal"
                    items={[
                        {
                            key: 'part-1',
                            href: '#part-1',
                            title: 'Обо мне',
                        },
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title: 'Правовая помощь',
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title: 'Мои успешные кейсы',
                        },
                        {
                            key: 'part-4',
                            href: '#part-4',
                            title: 'Публикации в СМИ',
                        },
                        {
                            key: 'part-5',
                            href: '#part-5',
                            title: 'Контакты',
                        },
                    ]}
                />
            </div>
            <Header openModalHandler={() => showModal()} />
            <div>
                <AboutMe id="part-1"/>
                <LawHelp id="part-2" onPress={() => showModal()}/>
                <SuccessCases id="part-3"/>
                <AboutMeMedia id="part-4"/>
                <Contacts id="part-5" onPress={() => showModal()}/>
            </div>
            <Footer />
        </>
    )
}

export default MainPage;