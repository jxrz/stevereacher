import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>Steve Reacher</h2>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home">Inicio</a>
            <a href="#about">Acerca de</a>
            <a href="#streams">Streams</a>
            <a href="#contact">Contacto</a>
          </nav>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Steve Reacher</h1>
            <p className="hero-subtitle">Streamer Profesional de COD Mobile</p>
            <p className="hero-description">
              Únete a las mejores partidas de Call of Duty Mobile. 
              Estrategias, gameplay épico y diversión garantizada.
            </p>
            <div className="hero-buttons">
              <a href="#streams" className="btn btn-primary">Ver Streams</a>
              <a href="#contact" className="btn btn-secondary">Seguir</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="gaming-avatar">
              <div className="avatar-circle">
                <span className="avatar-text">SR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>Acerca de Steve</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Soy Steve Reacher, un streamer apasionado por Call of Duty Mobile 
                con más de 3 años de experiencia en el gaming competitivo.
              </p>
              <p>
                Mi objetivo es crear contenido de calidad, compartir estrategias 
                avanzadas y construir una comunidad increíble de gamers.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>500K+</h3>
                  <p>Seguidores</p>
                </div>
                <div className="stat">
                  <h3>1000+</h3>
                  <p>Streams</p>
                </div>
                <div className="stat">
                  <h3>Top 1%</h3>
                  <p>Ranking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section id="streams" className="streams">
        <div className="container">
          <h2>Horarios de Stream</h2>
          <div className="schedule">
            <div className="schedule-item">
              <h3>Lunes - Viernes</h3>
              <p>8:00 PM - 12:00 AM</p>
              <span className="game">COD Mobile Ranked</span>
            </div>
            <div className="schedule-item">
              <h3>Sábados</h3>
              <p>6:00 PM - 2:00 AM</p>
              <span className="game">Torneos & Scrims</span>
            </div>
            <div className="schedule-item">
              <h3>Domingos</h3>
              <p>7:00 PM - 11:00 PM</p>
              <span className="game">Jugando con Subs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Sígueme en mis Redes</h2>
          <div className="social-links">
            <a href="#" className="social-link twitch">
              <span>📺</span>
              <div>
                <h4>Twitch</h4>
                <p>@stevereacher</p>
              </div>
            </a>
            <a href="#" className="social-link youtube">
              <span>🎥</span>
              <div>
                <h4>YouTube</h4>
                <p>Steve Reacher Gaming</p>
              </div>
            </a>
            <a href="#" className="social-link twitter">
              <span>🐦</span>
              <div>
                <h4>Twitter</h4>
                <p>@stevereacher_</p>
              </div>
            </a>
            <a href="#" className="social-link discord">
              <span>💬</span>
              <div>
                <h4>Discord</h4>
                <p>Steve's Squad</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Steve Reacher. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
