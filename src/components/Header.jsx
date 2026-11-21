import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="#top" className="logo" onClick={closeMenu}>
        NORD<span>DETAIL</span>
      </a>

      <button
        className={`burger ${menuOpen ? "burger-active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        <a href="#services" onClick={closeMenu}>
          Услуги
        </a>
        <a href="#about" onClick={closeMenu}>
          О студии
        </a>
        <a href="#works" onClick={closeMenu}>
          Наши работы
        </a>
        <a href="#contacts" onClick={closeMenu}>
          Контакты
        </a>
      </nav>

      <a href="#contacts" className="header-button" onClick={closeMenu}>
        Записаться
      </a>
    </header>
  );
}

export default Header;