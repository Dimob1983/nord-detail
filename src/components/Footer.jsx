
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              NORD<span>DETAIL</span>
            </a>

            <p>
              Совершенство в каждой детали.
              Забота об автомобиле без компромиссов.
            </p>
          </div>

          <div className="footer-navigation">
            <span className="footer-label">НАВИГАЦИЯ</span>

            <nav>
              <a href="#services">Услуги</a>
              <a href="#about">О студии</a>
              <a href="#works">Наши работы</a>
              <a href="#reviews">Отзывы</a>
              <a href="#contacts">Контакты</a>
            </nav>
          </div>

          <div className="footer-contact">
            <span className="footer-label">СВЯЗАТЬСЯ</span>

            <a href="tel:+79990000000">
              +7 (999) 000-00-00
            </a>

            <a href="mailto:info@norddetail.ru">
              info@norddetail.ru
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} NORD DETAIL.
          </p>

          <p className="footer-location">
            MOSCOW · RUSSIA
          </p>

          <a href="#top" className="footer-up">
            НАВЕРХ ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
