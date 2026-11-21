import studio from "../assets/images/studio.jpg";

const advantages = [
  {
    number: "01",
    title: "Внимание к деталям",
    description:
      "Работаем с каждым элементом автомобиля, не упуская мелочей.",
  },
  {
    number: "02",
    title: "Профессиональные материалы",
    description:
      "Используем проверенные составы и оборудование для ухода и защиты.",
  },
  {
    number: "03",
    title: "Индивидуальный подход",
    description:
      "Подбираем решения с учётом состояния автомобиля и пожеланий владельца.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src={studio}            
            alt="Профессиональный уход за автомобилем в студии"
          />

          <div className="about-image-caption">
            <span>01 / STUDIO</span>
            <span>NORD DETAIL</span>
          </div>
        </div>

        <div className="about-content">
          <div className="section-label">
            <span className="section-label-line"></span>
            <p>О НАШЕЙ СТУДИИ</p>
          </div>

          <h2>
            БОЛЬШЕ,
            <br />
            ЧЕМ <span>УХОД</span>
            <br />
            ЗА АВТО
          </h2>

          <p className="about-description">
            NORD DETAIL — пространство, где забота об автомобиле
            становится искусством. Мы объединяем профессионализм,
            современные технологии и внимание к деталям, чтобы
            сохранить эстетику и ценность вашего автомобиля.
          </p>

          <div className="about-advantages">
            {advantages.map((advantage) => (
              <div className="about-advantage" key={advantage.number}>
                <span className="about-advantage-number">
                  {advantage.number}
                </span>

                <div>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contacts" className="about-link">
            ПОЗНАКОМИТЬСЯ С НАМИ <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
