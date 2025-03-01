import { useEffect } from "react";
import './scroll-block.scss';
import {Flex, Space} from "antd";
import ContactMeButtonDark from "../contact-me-button-dark/contact-me-button-dark";

const allCards = document.querySelectorAll(".cards-scroll .card");
// const containerHeight = document.querySelector(".card-row")?.getBoundingClientRect().top + window.pageYOffset;
const headerHeight = 40;
const cardsCount = allCards.length;

const cardItem = [
    {
        title: 'Консультационная поддержка',
        description: 'В большинстве случаев возникшую проблему можно решить с помощью правовой кон-сультации. Мои профессиональные знания по гражданскому, семейному, экологическому, админи-стративному и уголовному праву помогут Вам выбрать правильный путь в решении Вашей задачи. Консультационная поддержка включает в себя устные и письменные консультации, подго-товка справок и правовых заключений по Вашему делу. Не слушайте советов, доверьтесь мнению профессионала!',
        price: 'Стоимость от 3 000 руб.'
    },
    {
        title: 'Участие в переговорах и в заключении сделок',
        description: 'Правовое сопровождение в заключении сделок и в участии в переговорах - это Ваша без-опасность и минимизация возможных рисков и неблагоприятных последствий. Я помогу Вам согласовать наилучшие для Вас условия, прописать ответственность сторон на случай неисполнения обязательств, уменьшить Ваши риски и избежать неблагоприят-ных последствий. Участие в переговорах и в заключении сделок включает в себя личное участие адвоката в  переговорах, составление письменных документов и консультации по всем возникающим вопросам.',
        price: 'Стоимость от 15 000 руб.'
    },
    {
        title: 'Участие в качестве эксперта в тренингах, семинарах и обучающих программах',
        description: 'Я получила образование в Институте права и публичной политики как тренер обучающих семинаров и тренингов (с января 2017г. по декабрь 2018г.), что позволяет мне преподавать и выступать как эксперт в тренингах, семинарах и обучающих программах. Занималась организацией и выступала как эксперт в просветительских проектах:<br />*\tСодействие участию гражданского общества в общественно значимых конституционных судебных процессах в России» (совместно с Институтом права и публичной политики)<br />* «Создание и развитие эффективной системы взаимодействия государственных органов, органов местного самоуправления и общественных объединений в целях защиты прав и законных интересов граждан, инвестирующих денежные средства в строительство мно-гоквартирных жилых домов» (совместно с Правительством Новосибирской области)<br />* Проект о проблемах в сфере ЖКХ, направленный на повышение уровня знаний населе-ния о способах и методах решения основных проблем в области жилищно-коммунального хозяйства<br />Я могу предложить своё участие как приглашенный спикер в Вашем мероприятии, а также организовать проведение мероприятия под Ваш индивидуальный запрос.',
        price: 'Стоимость: по договоренности под индивидуальный запрос клиента.'
    },
    {
        title: 'Судебное представительство',
        description: 'Иногда некоторые вопросы клиента можно решить только путем обращения в суд за за-щитой своих прав, свобод и законных интересов. Обращение в суд - это прозрачная, легальная и цивилизованная возможность разрешения конфликтов и спорных ситуаций, позволяющая отстоять свои интересы. Выбор хорошего и подходящего именно Вам адвоката - это важный этап в реализации своих прав и свобод и здесь важны знания, опыт и навыки, которыми Вы можете восполь-зоваться, обратившись ко мне. Я представляю интересы людей и организаций в судах на протяжении более 15 лет и не было ни одного случая, когда я не выполнила свои обязательства перед клиентом, так как доверие моих клиентов - это основа моей деятельности. Судебное представительство клиентов по гражданским, семейным, арбитражным, зе-мельным, административным и другим спорам - это моя основная специализация и то, что я делаю с большим удовольствием на протяжении долгих лет. Судебное представительство включает в себя консультационные услуги, составление процессуальных документов и представительство в судах всех инстанций. Вы можете обратиться ко мне за помощью по ведению дела в целом, а также за конкрет-ной юридической услугой (например, составление искового заявления).',
        price: 'Стоимость ведения дела от 50 000 руб.'
    },
    {
        title: 'Защита по административным и уголовным делам',
        description: 'Оказываю адвокатские услуги по защите потерпевших, подозреваемых, обвиняемых и свидетелей по административным и уголовным делам в сфере экономической деятельности, в том числе: <br/>•консультирую на предмет возможных уголовно-правовых рисков в деятельности бизнеса<br/>• защищаю клиентов на всех стадиях административного и уголовного судопроизводства<br />•\tпомогаю прекратить незаконное административное и уголовное преследование<br />•\tучаствую в защите клиентов в отдельных следственных действиях и оперативно-розыскных мероприятиях (допрос, обыск и др.)<br />•\tсудебное обжалование незаконных действий и решений дознавателя, следователя и др.',
        price: 'Стоимость: по договоренности.'
    }
]

const ScrollBlock = (props) => {
    useEffect(() => {
        allCards.forEach((card, i) => {
            const incValue = i * headerHeight;
            const decValue = (cardsCount - i - 1) * headerHeight;
            const heightValue = cardsCount * headerHeight - headerHeight;

            const totalHeaders = cardsCount * headerHeight;
            const reduceValue = (cardsCount - i) * headerHeight;

            // eslint-disable-next-line no-restricted-globals
            let bottomValue = self.innerHeight - totalHeaders - reduceValue + headerHeight;
            bottomValue = bottomValue > 0 ? "-" + bottomValue : Math.abs(bottomValue);

            card.style.marginTop = `${incValue}px`;
            card.style.marginBottom = `${decValue}px`;
            card.style.top = `${incValue}px`;
            card.style.bottom = `${bottomValue}px`;
            card.style.maxHeight = `calc(100vh - ${heightValue - 3}px)`;

        });
    }, [cardsCount]);

  return (
      <div className="cards-scroll">
          <div className="card-row">

              { cardItem.map((item) => {
                  return <div className="card">
                      <div className="card__header">
                          <h2>{item.title}</h2>
                      </div>
                      <div className="card__body">
                          <div className="card__content">
                              <p dangerouslySetInnerHTML={{ __html: item.description}}></p>
                          </div>
                          <div className='card__content_button'>
                              <Space>{item.price}</Space>
                              <Flex style={{ marginTop: 8 }} width="100%" alignItems="center">
                                  <ContactMeButtonDark />
                              </Flex>
                          </div>
                      </div>
                  </div>
                })
              }
          </div>
      </div>
  )
}

export default ScrollBlock