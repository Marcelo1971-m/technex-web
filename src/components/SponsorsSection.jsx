export default function SponsorsSection() {
  return (
    <section
  style={{
    padding: "60px 40px",
    textAlign: "center",
    backgroundColor: "#dbeafe"
  }}
>
      <h2 style={{ marginBottom: "20px", color: "#222" }}>
  Sponsors y Acompañamiento 🤝
</h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "20px auto 40px auto",
          lineHeight: "1.8",
          color: "#444"
        }}
      >
        Agradecemos a las instituciones, emprendimientos y personas que acompañan
        el crecimiento del Club Technex 10. Su apoyo fortalece nuestras actividades,
        impulsa nuestros proyectos y hace posible seguir construyendo oportunidades
        para nuestros estudiantes.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 280px))",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <div className="card-sponsor">
          <div
            style={{
              height: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
            }}
          >
            <a
  href="https://www.instagram.com/electronicaformosa"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/images/sponsors/electronica-formosa.png"
    alt="Electrónica Formosa"
    style={{ maxHeight: "100px", objectFit: "contain", cursor: "pointer" }}
  />
</a>
          </div>
          <h3 style={{ color: "#222" }}>Electrónica Formosa</h3>
        </div>

        <div className="card-sponsor">
          <div
            style={{
              height: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
            }}
          >
            <a
  href="https://www.instagram.com/wdmaker.ok/"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/images/sponsors/wdm.png"
    alt="W.D.M."
    style={{ maxHeight: "100px", objectFit: "contain", cursor: "pointer" }}
  />
</a>
          </div>
          <h3 style={{ color: "#222" }}>W.D.M.</h3>
        </div>
      </div>
    </section>
  );
}