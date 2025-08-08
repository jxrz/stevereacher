import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-blue-900 to-black text-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gaming-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/logo.jpeg" 
                  alt="Steve Reacher Logo" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gaming-light-blue/50 group-hover:ring-gaming-bright transition-all duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 rounded-full bg-gaming-bright/20 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gaming-bright to-gaming-light-blue bg-clip-text text-transparent">
                Steve Reacher
              </span>
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {['Inicio', 'Sobre Mí', 'Streams', 'Contacto'].map((item, index) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="relative text-white/80 hover:text-gaming-bright transition-all duration-300 group py-2"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gaming-bright to-gaming-light-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
            >
              <span className={`w-6 h-0.5 bg-gaming-bright transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-gaming-bright transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-gaming-bright transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <ul className="pt-4 pb-2 space-y-2">
              {['Inicio', 'Sobre Mí', 'Streams', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-white/80 hover:text-gaming-bright hover:bg-gaming-light-blue/10 rounded-lg transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark/90 via-blue-900/80 to-black/90"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gaming-bright/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gaming-light-blue/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Avatar */}
            <div className="relative mb-8 inline-block">
              <div className="relative w-48 h-48 mx-auto">
                <img 
                  src="/logo.jpeg" 
                  alt="Steve Reacher" 
                  className="w-full h-full rounded-full object-cover ring-4 ring-gaming-bright/50 animate-glow"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gaming-bright/20 to-gaming-light-blue/20 animate-pulse"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-gaming-bright to-gaming-light-blue opacity-20 blur-xl animate-spin" style={{animationDuration: '8s'}}></div>
              </div>
            </div>

            {/* Hero Title */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-gaming-bright via-gaming-light-blue to-gaming-accent bg-clip-text text-transparent">
                Steve Reacher
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-2xl md:text-3xl text-gaming-green mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Streamer Profesional de COD Mobile
            </p>

            {/* Hero Description */}
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              Únete a mis streams diarios y vive la emoción del gaming competitivo. 
              Estrategias, diversión y la mejor comunidad gaming te esperan.
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              {[
                { number: '50K+', label: 'Seguidores' },
                { number: '1M+', label: 'Views' },
                { number: '500+', label: 'Streams' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <h3 className="text-4xl md:text-5xl font-bold text-gaming-white mb-2 group-hover:text-gaming-bright transition-colors duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.8s'}}>
              <a 
                href="#streams" 
                className="px-8 py-4 bg-gradient-to-r from-gaming-bright to-gaming-light-blue text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gaming-bright/50"
              >
                Ver Streams
              </a>
              <a 
                href="#contacto" 
                className="px-8 py-4 border-2 border-gaming-bright text-gaming-bright font-bold rounded-full hover:bg-gaming-bright hover:text-white transition-all duration-300"
              >
                Sígueme
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gaming-bright rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gaming-bright rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mí" className="py-20 bg-gradient-to-b from-black to-gaming-dark relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gaming-bright to-gaming-light-blue bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gaming-bright to-gaming-light-blue mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div className="bg-gaming-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-gaming-bright/20 hover:border-gaming-bright/40 transition-all duration-300">
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Soy Steve Reacher, un streamer apasionado por Call of Duty Mobile con más de 3 años de experiencia 
                    en el gaming competitivo. Mi objetivo es crear la mejor comunidad gaming en español y compartir 
                    estrategias que te ayuden a mejorar tu gameplay.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Cada stream es una nueva aventura donde exploramos mapas, probamos nuevas armas y 
                    enfrentamos desafíos épicos. ¡Únete a la familia gaming más divertida!
                  </p>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { title: 'Top 1%', subtitle: 'Ranking Global', icon: '🏆' },
                    { title: '3 Años', subtitle: 'Experiencia', icon: '⭐' },
                    { title: '24/7', subtitle: 'Disponible', icon: '🎮' }
                  ].map((achievement, index) => (
                    <div key={achievement.title} className="bg-gradient-to-br from-gaming-bright/10 to-gaming-light-blue/10 rounded-xl p-6 text-center border border-gaming-bright/20 hover:border-gaming-bright/40 transition-all duration-300 hover:scale-105 group">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
                      <h3 className="text-2xl font-bold text-gaming-white mb-1">{achievement.title}</h3>
                      <p className="text-white/60 text-sm">{achievement.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gaming Setup Visualization */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gaming-dark to-blue-900 rounded-2xl p-8 border border-gaming-bright/20">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gaming-bright mb-4">Mi Setup Gaming</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { item: 'Dispositivo', value: 'iPhone 15 Pro Max' },
                      { item: 'Controles', value: 'Razer Kishi V2' },
                      { item: 'Auriculares', value: 'SteelSeries Arctis 7P' },
                      { item: 'Internet', value: 'Fibra Óptica 1GB' }
                    ].map((spec, index) => (
                      <div key={spec.item} className="flex justify-between items-center py-3 border-b border-gaming-bright/10 last:border-b-0">
                        <span className="text-white/70">{spec.item}:</span>
                        <span className="text-gaming-bright font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-gaming-bright/10 rounded-full px-4 py-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gaming-bright font-semibold">En Vivo Ahora</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section id="streams" className="py-20 bg-gradient-to-b from-gaming-dark to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2351E2F5%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gaming-bright to-gaming-light-blue bg-clip-text text-transparent">
                Horarios de Stream
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gaming-bright to-gaming-light-blue mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Únete a mis streams en vivo y vive la emoción del gaming competitivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                day: 'Lunes - Viernes',
                time: '8:00 PM - 12:00 AM',
                description: 'Ranked Games & Estrategias',
                icon: '🎯',
                color: 'from-gaming-bright to-gaming-light-blue',
                isLive: true
              },
              {
                day: 'Sábados',
                time: '6:00 PM - 2:00 AM',
                description: 'Maratón Gaming & Sorteos',
                icon: '🏆',
                color: 'from-gaming-light-blue to-gaming-accent',
                isLive: false
              },
              {
                day: 'Domingos',
                time: '7:00 PM - 11:00 PM',
                description: 'Juegos con Suscriptores',
                icon: '🎮',
                color: 'from-gaming-accent to-gaming-green',
                isLive: false
              }
            ].map((schedule, index) => (
              <div key={schedule.day} className="group relative">
                <div className="bg-gradient-to-br from-gaming-dark/80 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gaming-bright/20 hover:border-gaming-bright/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gaming-bright/20">
                  {/* Live Indicator */}
                  {schedule.isLive && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse flex items-center space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                        <span>EN VIVO</span>
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                    {schedule.icon}
                  </div>

                  {/* Day */}
                  <h3 className="text-2xl font-bold text-center mb-4">
                    <span className={`bg-gradient-to-r ${schedule.color} bg-clip-text text-transparent`}>
                      {schedule.day}
                    </span>
                  </h3>

                  {/* Time */}
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-gaming-white mb-2">{schedule.time}</p>
                    <div className={`h-1 w-16 bg-gradient-to-r ${schedule.color} mx-auto rounded-full`}></div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-center text-lg leading-relaxed">
                    {schedule.description}
                  </p>

                  {/* Action Button */}
                  <div className="mt-8 text-center">
                    <button className={`px-6 py-3 bg-gradient-to-r ${schedule.color} text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg`}>
                      {schedule.isLive ? 'Ver Ahora' : 'Recordar'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gaming-bright/10 to-gaming-light-blue/10 backdrop-blur-sm rounded-2xl p-8 border border-gaming-bright/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gaming-bright mb-4">¿No quieres perderte ningún stream?</h3>
              <p className="text-white/70 mb-6">Activa las notificaciones y sé el primero en unirte a la acción</p>
              <button className="px-8 py-4 bg-gradient-to-r from-gaming-bright to-gaming-light-blue text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gaming-bright/50">
                🔔 Activar Notificaciones
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gaming-dark relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gaming-bright/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gaming-light-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gaming-bright to-gaming-light-blue bg-clip-text text-transparent">
                Contacto
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gaming-bright to-gaming-light-blue mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o quieres colaborar? ¡Conectemos!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gaming-dark/80 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gaming-bright/20">
                <h3 className="text-3xl font-bold text-gaming-bright mb-6">¡Conectemos!</h3>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Siempre estoy abierto a nuevas oportunidades, colaboraciones y conversaciones interesantes. 
                  No dudes en contactarme a través de cualquiera de estos medios.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: '📧',
                      label: 'Email',
                      value: 'steve@reacher.com',
                      color: 'from-gaming-bright to-gaming-light-blue'
                    },
                    {
                      icon: '💬',
                      label: 'Discord',
                      value: 'SteveReacher#1234',
                      color: 'from-gaming-light-blue to-gaming-accent'
                    },
                    {
                      icon: '📱',
                      label: 'Twitch',
                      value: 'twitch.tv/stevereacher',
                      color: 'from-gaming-accent to-gaming-green'
                    }
                  ].map((contact, index) => (
                    <div key={contact.label} className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gaming-bright/10 transition-all duration-300 cursor-pointer">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60 text-sm font-medium">{contact.label}</p>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${contact.color} bg-clip-text text-transparent`}>
                          {contact.value}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${contact.color} rounded-full`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-gaming-dark/80 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gaming-bright/20">
                <h4 className="text-xl font-bold text-gaming-bright mb-6">Sígueme en redes</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'Twitch', icon: '🎮', color: 'from-purple-500 to-purple-600' },
                    { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-600' },
                    { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-500' },
                    { name: 'Instagram', icon: '📸', color: 'from-pink-500 to-purple-500' }
                  ].map((social) => (
                    <button key={social.name} className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <span className="text-xl">{social.icon}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gaming-dark/80 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gaming-bright/20">
              <h3 className="text-2xl font-bold text-gaming-bright mb-6">Envíame un mensaje</h3>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Tu nombre" 
                      required 
                      className="w-full px-4 py-4 bg-gaming-dark/50 border border-gaming-bright/20 rounded-xl text-white placeholder-white/50 focus:border-gaming-bright focus:outline-none focus:ring-2 focus:ring-gaming-bright/20 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gaming-bright/10 to-gaming-light-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="email" 
                      placeholder="Tu email" 
                      required 
                      className="w-full px-4 py-4 bg-gaming-dark/50 border border-gaming-bright/20 rounded-xl text-white placeholder-white/50 focus:border-gaming-bright focus:outline-none focus:ring-2 focus:ring-gaming-bright/20 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gaming-bright/10 to-gaming-light-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <textarea 
                      placeholder="Tu mensaje" 
                      rows="5" 
                      required
                      className="w-full px-4 py-4 bg-gaming-dark/50 border border-gaming-bright/20 rounded-xl text-white placeholder-white/50 focus:border-gaming-bright focus:outline-none focus:ring-2 focus:ring-gaming-bright/20 transition-all duration-300 resize-none"
                    ></textarea>
                    <div className="absolute inset-0 bg-gradient-to-r from-gaming-bright/10 to-gaming-light-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-8 py-4 bg-gradient-to-r from-gaming-bright to-gaming-light-blue text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gaming-bright/50 flex items-center justify-center space-x-2"
                >
                  <span>Enviar Mensaje</span>
                  <span className="text-xl">🚀</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-gaming-dark to-black border-t border-gaming-bright/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%2351E2F5%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020L0%200h40L20%2020z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gaming-bright to-gaming-light-blue rounded-2xl flex items-center justify-center shadow-lg shadow-gaming-bright/20">
                  <span className="text-2xl font-bold text-white">SR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gaming-bright">Steve Reacher</h3>
                  <p className="text-white/60">Professional Gaming Streamer</p>
                </div>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-md">
                Únete a mi comunidad de gaming y vive la emoción del COD Mobile competitivo. 
                Streams diarios, estrategias profesionales y mucha diversión.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitch', icon: '🎮', color: 'from-purple-500 to-purple-600' },
                  { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-600' },
                  { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-500' },
                  { name: 'Discord', icon: '💬', color: 'from-indigo-500 to-indigo-600' }
                ].map((social) => (
                  <button key={social.name} className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group`}>
                    <span className="text-xl group-hover:animate-bounce">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-gaming-bright mb-6 flex items-center">
                <span className="w-2 h-2 bg-gaming-bright rounded-full mr-3"></span>
                Enlaces Rápidos
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Inicio', href: '#home', icon: '🏠' },
                  { name: 'Sobre Mí', href: '#about', icon: '👤' },
                  { name: 'Streams', href: '#streams', icon: '📺' },
                  { name: 'Contacto', href: '#contact', icon: '📧' }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center space-x-3 text-white/70 hover:text-gaming-bright transition-colors duration-300 group">
                      <span className="group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gaming Stats */}
            <div>
              <h4 className="text-xl font-bold text-gaming-bright mb-6 flex items-center">
                <span className="w-2 h-2 bg-gaming-light-blue rounded-full mr-3"></span>
                Gaming Stats
              </h4>
              <div className="space-y-4">
                {[
                  { label: 'Rank Actual', value: 'Legendary', icon: '👑' },
                  { label: 'Horas Streamed', value: '2,500+', icon: '⏰' },
                  { label: 'Seguidores', value: '50K+', icon: '👥' },
                  { label: 'Victorias', value: '1,200+', icon: '🏆' }
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span>{stat.icon}</span>
                      <span className="text-white/60 text-sm">{stat.label}</span>
                    </div>
                    <span className="text-gaming-light-blue font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-gaming-bright/10 to-gaming-light-blue/10 backdrop-blur-sm rounded-2xl p-8 border border-gaming-bright/20 mb-12">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gaming-bright mb-4">🔔 No te pierdas ningún stream</h4>
              <p className="text-white/70 mb-6">Suscríbete para recibir notificaciones de streams y contenido exclusivo</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="flex-1 px-4 py-3 bg-gaming-dark/50 border border-gaming-bright/20 rounded-xl text-white placeholder-white/50 focus:border-gaming-bright focus:outline-none focus:ring-2 focus:ring-gaming-bright/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-gaming-bright to-gaming-light-blue text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gaming-bright/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-white/60">
                  &copy; 2024 Steve Reacher. Todos los derechos reservados.
                </p>
                <div className="hidden md:flex items-center space-x-4 text-sm text-white/40">
                  <a href="#" className="hover:text-gaming-bright transition-colors duration-300">Privacidad</a>
                  <span>•</span>
                  <a href="#" className="hover:text-gaming-bright transition-colors duration-300">Términos</a>
                  <span>•</span>
                  <a href="#" className="hover:text-gaming-bright transition-colors duration-300">Cookies</a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <span>Hecho con</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>para la comunidad gaming</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
