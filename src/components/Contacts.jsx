
import { useState } from "react";

function Contacts() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <section className="contacts" id="contacts">
      <div className="contacts-container">
        <div className="section-label">
          <span className="section-label-line"></span>
          <p>КОНТАКТЫ</p>
        </div>

        <div className="contacts-heading">
          <h2>
            ВАШ АВТО
            <br />
            <span>ЗАСЛУЖИВАЕТ</span>
            <br />
            БОЛЬШЕ
          </h2>

          <p>
            Оставьте заявку, и мы подберём оптимальное решение
            для вашего автомобиля. Без лишних услуг и навязчивых
            предложений.
          </p>
        </div>

        <div className="contacts-grid">
          <div className="contacts-info">
            <div className="contact-item">
              <span className="contact-label">ТЕЛЕФОН</span>
              <a href="tel:+79990000000">+7 (999) 000-00-00</a>
            </div>

            <div className="contact-item">
              <span className="contact-label">АДРЕС</span>
              <p>Москва, ул. Детейлинг, 12</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">РЕЖИМ РАБОТЫ</span>
              <p>Ежедневно, 10:00 — 21:00</p>
            </div>

            <div className="contact-socials">
              <a href="https://t.me/" target="_blank" rel="noreferrer">
                TELEGRAM ↗
              </a>

              <a href="https://vk.com/" target="_blank" rel="noreferrer">
                VK ↗
              </a>
            </div>
          </div>

          <div className="contacts-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <span className="form-success-mark">✓</span>

                <h3>ЗАЯВКА СОЗДАНА</h3>

                <p>
                  Спасибо, {form.name}! В демо-версии сайта
                  заявка никуда не отправляется, но интерфейс
                  успешно обработал её.
                </p>

                <button
                  type="button"
                  className="form-reset"
                  onClick={() => {
                    setForm({
                      name: "",
                      phone: "",
                      service: "",
                    });

                    setSubmitted(false);
                  }}
                >
                  ОТПРАВИТЬ ЕЩЁ <span>↗</span>
                </button>
              </div>
            ) : (
              <form className="contacts-form" onSubmit={handleSubmit}>
                <h3>ЗАПИСАТЬСЯ НА УСЛУГУ</h3>

                <p className="form-description">
                  Заполните форму, и мы свяжемся с вами.
                </p>

                <label htmlFor="contact-name">Ваше имя</label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Как к вам обращаться?"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="contact-phone">Телефон</label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="contact-service">Услуга</label>

                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Выберите услугу
                  </option>

                  <option value="Полировка кузова">
                    Полировка кузова
                  </option>

                  <option value="Керамическое покрытие">
                    Керамическое покрытие
                  </option>

                  <option value="Детейлинг интерьера">
                    Детейлинг интерьера
                  </option>

                  <option value="Комплексный уход">
                    Комплексный уход
                  </option>
                </select>

                <button type="submit" className="contacts-submit">
                  ОСТАВИТЬ ЗАЯВКУ <span>↗</span>
                </button>

                <span className="form-policy">
                  Нажимая кнопку, вы соглашаетесь на обработку
                  персональных данных.
                </span>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
