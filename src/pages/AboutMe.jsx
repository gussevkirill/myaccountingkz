import Common from 'layouts/Common'
import React from 'react'
import Slider from 'react-slick'

function AboutMe({ title = 'Обо мне' }) {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
  }

  return (
    <Common>
      <div className="about__page">
        <div className="container">
          <div className="about__paege-inner">
            <div className="about__page-crumbs">
              <span>Главная</span> / <span>{ title }</span>
            </div>
            <h1 className="about__page-title">{ title }</h1>
            <div className="about__page-content">
              <div className="about__page-content-wrapper">
                <div
                  className="about__page-img"
                  style={
                    {
                      backgroundImage: `url(/imgs/picture.jpg)`
                    }
                  }
                >
                </div>
                <div className="about__page-text">
                  <p className="about__page-text">
                    Меня зовут Любовь Андреевна.<br />
                    Mне 25 лет, 6 из них напрямую связанны с бухгалтерией;
                    <span>За это время я:</span>
                    <ul className='about__page-list'>
                      <li>
                        В возрасте 19 лет, после окончания колледжа  устроилась на должность заместителя главного бухгалтера. На протяжении года под руководством отличного наставника,я набиралась опыта. Вскоре я поняла что эту должность я переросла.
                      </li>
                      <li>
                        Следующей ступенькой в моей карьерной лестнице стала должность главного бухгалтера.
                        Более трех лет я проработала на данной должности ,не меняя места работы. В связи со сменой места жительства  и не желанием моего руководства расставаться со мной,вся работа была переведена на дистанционный режим.
                      </li>
                      <li>
                        В связи с более гибким графиком у меня появляется время для обучения и прокачки своих профессиональных навыков.
                      </li>
                      <li>
                        Следующей ступенькой становиться защита звания Профессионального бухгалтера РК, блестящие окончание данного обучения позволило мне не сомневаться в своих знаниях и опыте. Так я начинаю практику ведения дистанционного учета еще в одном ТОО, нескольких ИП и одной Некоммерческой организации.
                      </li>
                      <li>
                        На получении звания Профессионального бухгалтера РК, я решаю не останавливаться и иду за следующим званием, званием Налогового консультанта.
                        На данный момент за своими плечами я имею непрерывный опыт работы более 5-ти лет, звание Профессионального бухгалтера РК, Налогового Консультанта и более 50-ти кейсов которые позволили моим клиентам сэкономить свои финансы на правильном выборе налогового режима и законной оптимизации налогов.
                      </li>
                      <li>
                        Все мои знания и колоссальный опыт поможет мне решить любой ваш вопрос связанный как с бухгалтерским , так и с налоговым учетом.
                      </li>
                      <li>
                        Всегда рада вашим обращениям дорогие коллеги и владельцы бизнеса
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <Slider { ...settings }>
                <div className="about__page-sertificat">
                  <img src="/imgs/sertificat1.jpg" alt="" />
                </div>
                <div className="about__page-sertificat">
                  <img src="/imgs/sertificat2.jpg" alt="" />
                </div>
                <div className="about__page-sertificat">
                  <img src="/imgs/sertificat3.jpg" alt="" />
                </div>
                <div className="about__page-sertificat">
                  <img src="/imgs/sertificat4.jpg" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Common>
  )
}

export default AboutMe