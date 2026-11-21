

const services = [
  {
    number: "01",
    title: "Полировка кузова",
    description:
      "Возвращаем лакокрасочному покрытию глубину цвета, блеск и гладкость. Устраняем мелкие царапины и дефекты.",
    price: "от 12 000 ₽",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Керамическое покрытие",
    description:
      "Создаём защитный слой, который сохраняет блеск кузова, облегчает уход и защищает от внешних воздействий.",
    price: "от 25 000 ₽",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Детейлинг интерьера",
    description:
      "Комплексная очистка салона, уход за кожей, текстилем и пластиковыми элементами с вниманием к каждой детали.",
    price: "от 8 000 ₽",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=85",
  },
];


function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-heading">
          <div className="section-label">
            <span className="section-label-line"></span>
            <p>НАШИ УСЛУГИ</p>
          </div>

          <div className="services-heading-content">
            <h2>
              УХОД,
              <br />
              <span>КОТОРЫЙ</span> ВИДНО
            </h2>

            <p>
              Профессиональные решения для тех,
              кто ценит состояние своего автомобиля.
              От восстановления блеска до долговременной защиты.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />

                <span className="service-number">
                  {service.number}
                </span>
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-card-footer">
                  <span>{service.price}</span>

                  <a href="#contacts" aria-label={`Записаться: ${service.title}`}>
                    <span className="service-arrow">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="services-bottom">
          <p>КАЖДЫЙ АВТОМОБИЛЬ — ИНДИВИДУАЛЬНЫЙ ПОДХОД</p>

          <a href="#contacts">
            ОБСУДИТЬ УСЛУГУ <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
