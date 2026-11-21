
const works = [
  {
    number: "01",
    name: "Porsche 911 Carrera",
    category: "ПОЛИРОВКА · КЕРАМИКА",
    description: "Восстановление блеска и защита кузова.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
  },
  {
  number: "02",
  name: "BMW M4 Competition",
  category: "ДЕТЕЙЛИНГ · ЗАЩИТА",
  description: "Комплексный уход за кузовом и деталями.",
  image:
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85",
},
  {
    number: "03",
    name: "Mercedes-Benz GLE",
    category: "ИНТЕРЬЕР · УХОД",
    description: "Глубокая очистка и восстановление интерьера.",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
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
