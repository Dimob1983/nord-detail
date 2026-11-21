
import { useState } from "react";

const reviews = [
  {
    name: "Александр",
    car: "Porsche 911 Carrera",
    service: "Полировка кузова · Керамика",
    text:
      "Не ожидал, что мой автомобиль может выглядеть настолько хорошо. Глубина цвета совершенно другая, кузов словно зеркало. Отдельное спасибо за внимательное отношение к каждой детали.",
  },
  {
    name: "Михаил",
    car: "BMW M4 Competition",
    service: "Детейлинг · Защита",
    text:
      "Очень понравился подход к работе. Всё подробно объяснили, показали состояние кузова и предложили именно то, что было необходимо. Результат превзошёл ожидания.",
  },
  {
    name: "Дмитрий",
    car: "Mercedes-Benz GLE",
    service: "Детейлинг интерьера",
    text:
      "Салон после обработки выглядит совершенно иначе. Убрали следы эксплуатации, освежили материалы, всё аккуратно и без лишнего блеска. Именно такого результата я хотел.",
  },
];

function Reviews() {
  const [activeReview, setActiveReview] = useState(0);

  const review = reviews[activeReview];

  function prevReview() {
    setActiveReview((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  }

  function nextReview() {
    setActiveReview((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-container">
        <div className="section-label">
          <span className="section-label-line"></span>
          <p>ОТЗЫВЫ КЛИЕНТОВ</p>
        </div>

        <div className="reviews-heading">
          <h2>
            СЛОВА,
            <br />
            <span>КОТОРЫЕ</span> ВАЖНЫ
          </h2>

          <p>
            Лучшее подтверждение нашей работы —
            впечатления владельцев автомобилей.
          </p>
        </div>

        <div className="review-card">
          <div className="review-top">
            <span className="review-quote-mark">“</span>

            <span className="review-counter">
              {String(activeReview + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
          </div>

          <blockquote className="review-text">
            {review.text}
          </blockquote>

          <div className="review-bottom">
            <div className="review-author">
              <span className="review-author-line"></span>

              <div>
                <h3>{review.name}</h3>
                <p>{review.car}</p>
                <span className="review-service">
                  {review.service}
                </span>
              </div>
            </div>

            <div className="review-controls">
              <button
                type="button"
                onClick={prevReview}
                aria-label="Предыдущий отзыв"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextReview}
                aria-label="Следующий отзыв"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="reviews-bottom">
          <p>ВАШЕ ДОВЕРИЕ — НАША РЕПУТАЦИЯ</p>

          <a href="#contacts">
            ОСТАВИТЬ ЗАЯВКУ <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
