
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-label">
          <span className="hero-label-line"></span>
          <p>PREMIUM CAR DETAILING</p>
        </div>

        <h1>
          ИСКУССТВО
          <br />
          <span>ЗАЩИЩАТЬ</span>
          <br />
          И СОХРАНЯТЬ
        </h1>

        <p className="hero-description">
          Совершенство в каждой детали.
          Профессиональный уход за автомобилем,
          который заслуживает большего.
        </p>

        <div className="hero-buttons">
          <a href="#contacts" className="button-primary">
            Записаться на обслуживание
          </a>

          <a href="#works" className="button-secondary">
            Наши работы
          </a>
        </div>

        <div className="hero-info">
          <div>
            <strong>5+</strong>
            <span>лет опыта</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>автомобилей</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>качество</span>
          </div>
        </div>
      </div>

      <div className="hero-side-text">
        NORD DETAIL — EST. 2021
      </div>

      <div className="hero-scroll">
        <span></span>
        <p>SCROLL TO EXPLORE</p>
      </div>
    </section>
  );
}

export default Hero;
