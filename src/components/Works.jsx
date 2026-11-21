import porsche from "../assets/images/porsche.jpg";
import bmw from "../assets/images/bmw.jpg";
import mercedes from "../assets/images/mercedes.jpg";

const works = [
  {
    number: "01",
    name: "Porsche 911 Carrera",
    category: "ПОЛИРОВКА · КЕРАМИКА",
    description: "Восстановление блеска и защита кузова.",
    image: porsche,
  },
  {
  number: "02",
  name: "BMW M4 Competition",
  category: "ДЕТЕЙЛИНГ · ЗАЩИТА",
  description: "Комплексный уход за кузовом и деталями.",
  image: bmw,
},
  {
    number: "03",
    name: "Mercedes-Benz GLE",
    category: "ИНТЕРЬЕР · УХОД",
    description: "Глубокая очистка и восстановление интерьера.",
    image: mercedes,
  },
];

function Works() {
  return (
    <section className="works" id="works">
      <div className="works-container">
        <div className="section-label">
          <span className="section-label-line"></span>
          <p>НАШИ РАБОТЫ</p>
        </div>

        <div className="works-heading">
          <h2>
            РЕЗУЛЬТАТ
            <br />
            <span>В КАЖДОЙ</span> ДЕТАЛИ
          </h2>

          <p>
            Не просто уход, а отношение к автомобилю.
            Посмотрите, как мы работаем с формой,
            цветом и каждой поверхностью.
          </p>
        </div>

        <div className="works-grid">
          {works.map((work) => (
            <article className="work-card" key={work.number}>
              <div className="work-image">
                <img src={work.image} alt={work.name} />

                <span className="work-number">
                  / {work.number}
                </span>

                <span className="work-image-arrow">↗</span>
              </div>

              <div className="work-content">
                <p className="work-category">{work.category}</p>

                <h3>{work.name}</h3>

                <p className="work-description">
                  {work.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="works-bottom">
          <p>SELECTED PROJECTS / NORD DETAIL</p>

          <a href="#contacts">
            ВАШ АВТОМОБИЛЬ МОЖЕТ БЫТЬ СЛЕДУЮЩИМ <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Works;
