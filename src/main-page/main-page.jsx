import Header from "../header/header";
import { Anchor } from "antd";
import AboutMe from "../content-blocks/about-me";
import LawHelp from "../content-blocks/law-help";
import SuccessCases from "../content-blocks/success-cases";
import AboutMeMedia from "../content-blocks/about-me-media";
import Contacts from "../content-blocks/contacts";

function MainPage() {
    return (
        <>
            <div
                style={{
                    padding: '20px',
                    // background: 'rgb(83,133,150)',
                    background: 'linear-gradient(90deg, rgba(83,133,150,1) 0%, rgba(107,157,173,1) 49%, rgba(104,152,168,1) 100%)'
                }}
            >
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
                            title: 'Обо сне в СМИ',
                        },
                        {
                            key: 'part-5',
                            href: '#part-5',
                            title: 'Контакты',
                        },
                    ]}
                />
            </div>
            <Header />
            <div>
                <AboutMe id="part-1" />
                <LawHelp id="part-2" />
                <SuccessCases id="part-3" />
                <AboutMeMedia id="part-4" />
                <Contacts id="part-5" />
            </div>
        </>
    )
}

export default MainPage;