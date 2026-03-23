export default function ContactSection() {
  return (
    <section className="contact-section" id="contacto">
      <h2>Contacto y Redes</h2>
      <p className="contact-subtitle">
        Seguinos y mantenete conectado con las actividades, proyectos y novedades del Club de Robótica Technex 10.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Instagram</h3>
          <p>
            <strong>Cuenta:</strong> @Technex10
          </p>
          <p>
            <strong>Desde:</strong> agosto de 2023
          </p>
          <p>
            <strong>Ubicación:</strong> Argentina
          </p>
          <a
            href="https://instagram.com/technex10"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            Ver Instagram
          </a>
        </div>

        <div className="contact-card">
          <h3>TikTok</h3>
          <p>
            <strong>Cuenta:</strong> @Clubtechnex
          </p>
          <a
            href="https://tiktok.com/@clubtechnex"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            Ver TikTok
          </a>
        </div>

        <div className="contact-card">
          <h3>Correo electrónico</h3>
          <p>
            <strong>Email:</strong> clubtechnex10@gmail.com
          </p>
          <a
            href="mailto:clubtechnex10@gmail.com"
            className="contact-link"
          >
            Enviar correo
          </a>
        </div>
      </div>
    </section>
  );
}