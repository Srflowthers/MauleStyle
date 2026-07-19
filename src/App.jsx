import React from 'react'
import useInitEffects from './hooks/useInitEffects'

// Import static images from the original folder to avoid changing binaries
import appIcon from '../FRON PRESENTAICON APP/app_icon.png'
import homeApp from '../FRON PRESENTAICON APP/HOMEAPP.png'
import promo from '../FRON PRESENTAICON APP/PROMOCION APP.png'
import logoStart from '../FRON PRESENTAICON APP/Logo_inicio.png'

export default function App() {
  useInitEffects()

  return (
    <>
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      <div className="bg-glow glow-3"></div>

      <header className="header">
        <div className="container header-container">
          <div className="logo-container">
            <img src={appIcon} alt="App Icon" className="app-icon" />
            <span className="app-name">Maule Style</span>
          </div>
          <nav className="nav">
            <a href="#features">Beneficios</a>
            <a href="#gallery">Colección</a>
            <a href="/downloads/MauleStyle.apk" download className="btn-primary-sm">Descargar App</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-container">
            <div className="hero-content reveal-fade-up">
              <span className="badge">Nueva Temporada Disponible</span>
              <h1 className="hero-title">Tu estilo,<br/><span className="text-gradient">en la palma de tu mano.</span></h1>
              <p className="hero-description">Descubre las últimas colecciones en ropa y zapatillas. Compra de forma segura, encuentra tu talla perfecta y aprovecha ofertas exclusivas directamente desde tu celular.</p>
              <div className="hero-buttons">
                <a href="/downloads/MauleStyle.apk" download className="btn-primary ripple-btn">
                  <i className="ph-fill ph-download-simple"></i>
                  Descargar APK
                </a>
                <a href="#features" className="btn-secondary">Ver beneficios</a>
              </div>
            </div>
            <div className="hero-image-wrapper reveal-zoom">
              <img src={homeApp} alt="Vista Principal de la App" className="hero-image" />
              <div className="floating-card card-1">
                <i className="ph-fill ph-sneaker"></i>
                <span>Últimos Modelos</span>
              </div>
              <div className="floating-card card-2">
                <i className="ph-fill ph-t-shirt"></i>
                <span>Nuevas Colecciones</span>
              </div>
            </div>
          </div>
        </section>

        <section className="why-us">
          <div className="container">
            <div className="two-columns">
              <div className="why-text reveal-fade-up">
                <h2>Renueva tu outfit <br/><span className="text-gradient">donde sea que estés.</span></h2>
                <p>Hemos diseñado esta aplicación para que tus compras sean tan rápidas y cómodas como tus zapatillas favoritas.</p>

                <ul className="why-list">
                  <li><i className="ph-fill ph-check-circle text-gradient"></i> Interfaz intuitiva y moderna</li>
                  <li><i className="ph-fill ph-check-circle text-gradient"></i> Guarda tus productos favoritos en Wishlist</li>
                  <li><i className="ph-fill ph-check-circle text-gradient"></i> Visualiza cada detalle en fotos de alta resolución</li>
                  <li><i className="ph-fill ph-check-circle text-gradient"></i> Trato directo y atención personalizada en tu compra</li>
                  <li><i className="ph-fill ph-check-circle text-gradient"></i> Rendimiento excelente en todos los dispositivos Android</li>
                </ul>
              </div>
              <div className="why-image reveal-fade-up" style={{transitionDelay: '0.2s'}}>
                <img src={promo} alt="Modelos usando la ropa de la app" className="promo-image glass" />
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container">
            <div className="section-header reveal-fade-up">
              <h2>La mejor experiencia de compra. <br/><span className="text-gradient">Diseñada para ti.</span></h2>
              <p>Encuentra tus prendas y calzado favoritos más rápido que nunca.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card glass reveal-fade-up" style={{transitionDelay: '0.1s'}}>
                <div className="feature-icon"><i className="ph-fill ph-sneaker"></i></div>
                <h3>Colecciones Exclusivas</h3>
                <p>Las mejores prendas y zapatillas G5, en un solo lugar.</p>
              </div>
              <div className="feature-card glass reveal-fade-up" style={{transitionDelay: '0.3s'}}>
                <div className="feature-icon"><i className="ph-fill ph-ruler"></i></div>
                <h3>Tu Talla Exacta</h3>
                <p>Filtra fácilmente el catálogo para ver únicamente los modelos disponibles en tu talla.</p>
              </div>
              <div className="feature-card glass reveal-fade-up" style={{transitionDelay: '0.4s'}}>
                <div className="feature-icon"><i className="ph-fill ph-chat-circle-text"></i></div>
                <h3>Pedidos Fáciles</h3>
                <p>Arma tu pedido en la app y coordina la entrega y el pago directamente con nosotros, sin intermediarios.</p>
              </div>
              <div className="feature-card glass reveal-fade-up" style={{transitionDelay: '0.5s'}}>
                <div className="feature-icon"><i className="ph-fill ph-truck"></i></div>
                <h3>Envíos Rápidos</h3>
                <p>Rastrea tus zapatillas y prendas en tiempo real desde la bodega hasta tu puerta.</p>
              </div>
              <div className="feature-card glass reveal-fade-up" style={{transitionDelay: '0.6s'}}>
                <div className="feature-icon"><i className="ph-fill ph-ticket"></i></div>
                <h3>Promociones Únicas</h3>
                <p>Descuentos sorpresa y beneficios especiales diseñados solo para los usuarios de la App.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="container">
            <div className="section-header reveal-zoom">
              <h2>Descubre nuestro <br/><span className="text-gradient">catálogo completo.</span></h2>
            </div>
            <div className="gallery-carousel reveal-zoom">
              <div className="gallery-track">
                <img src={homeApp} alt="Pantalla de inicio de la App" className="gallery-img" />
                <img src={promo} alt="Promoción especial en zapatillas y ropa" className="gallery-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container benefits-container glass reveal-fade-up" style={{textAlign: 'center', padding: '60px 40px'}}>
            <h2 style={{fontSize: '2.2rem', marginBottom: '16px', lineHeight: 1.4}}>Más de 1 año en el mercado.</h2>
            <p style={{fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: 800, margin: '0 auto'}}>¡Volvemos nuevamente a abrir las puertas, pero esta vez con un <span className="text-gradient" style={{fontWeight: 600}}>gran catálogo mucho más a la mano!</span></p>
          </div>
        </section>

        <section className="download" id="download">
          <div className="container download-container reveal-scale">
            <img src={logoStart} alt="Imagen de Maule Style" className="download-banner" />
            <div className="download-content">
              <h2>Lleva el mejor estilo contigo</h2>
              <p>Descarga la última versión del APK y empieza a explorar de forma 100% segura.</p>

              <a href="/downloads/MauleStyle.apk" download className="btn-primary btn-large ripple-btn">
                <i className="ph-fill ph-download-simple"></i>
                Descargar APK Oficial
              </a>

              <div className="download-info">
                <span><i className="ph ph-info"></i> Versión 1.0.0</span>
                <span><i className="ph ph-file-dashed"></i> 88 MB</span>
                <span><i className="ph ph-android-logo"></i> Android 8.0+</span>
                <span><i className="ph ph-calendar-blank"></i> Actualizado hoy</span>
              </div>

              <div className="install-warning">
                <i className="ph-fill ph-warning-circle"></i>
                Para instalar, recuerda habilitar <b>"Orígenes desconocidos"</b> en la configuración de seguridad de tu dispositivo Android.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={appIcon} alt="Logo" className="footer-logo" />
              <span className="app-name">Maule Style</span>
              <p>Ropa y zapatillas exclusivas. La mejor moda directo en tu celular.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Enlaces</h4>
                <a href="#features">Beneficios</a>
                <a href="#gallery">Colección</a>
                <a href="#download">Descargar</a>
              </div>
              <div className="footer-col">
                <h4>Atención al Cliente</h4>
                <a href="https://wa.me/56934974829" target="_blank"><i className="ph-fill ph-whatsapp-logo"></i> Consultas: +56 9 3497 4829</a>
                <a href="#">Guía de Tallas</a>
                <a href="#">Políticas de Devolución</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Maule Style. Todos los derechos reservados.</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/maule_style/" target="_blank" title="Síguenos en Instagram"><i className="ph-fill ph-instagram-logo"></i></a>
              <a href="https://wa.me/56934974829" target="_blank" title="Contáctanos por WhatsApp"><i className="ph-fill ph-whatsapp-logo"></i></a>
            </div>
            <span className="version-badge">v1.0.0</span>
          </div>
        </div>
      </footer>
    </>
  )
}
