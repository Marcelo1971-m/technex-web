export default function GallerySection() {
  const estilo = {
    width: "100%",
    height: "340px",
    objectFit: "contain",
    backgroundColor: "#111",
    borderRadius: "10px"
  };

  return (
    <section style={{ padding: "60px 40px", textAlign: "center" }}>
      <h2>Galería de Robots 🤖</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <img src="/images/robots/robot1.jpg" alt="Robot 1" style={estilo} className="img-galeria" />
        <img src="/images/robots/robot2.jpg" alt="Robot 2" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot3.jpg" alt="Robot 3" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot4.jpg" alt="Robot 4" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot5.jpg" alt="Robot 5" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot6.jpg" alt="Robot 6" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot7.jpg" alt="Robot 7" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot8.jpg" alt="Robot 8" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot9.jpg" alt="Robot 9" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot10.jpg" alt="Robot 10" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot11.jpg" alt="Robot 11" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot12.jpg" alt="Robot 12" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot13.jpg" alt="Robot 13" style={estilo} className="img-galeria"/>
        <img src="/images/robots/robot14.jpg" alt="Robot 14" style={estilo} className="img-galeria"/>

       <img src="/images/club/sponsor1.jpg" alt="Actividad con WDM" style={estilo} className="img-galeria" />
       <img src="/images/club/sponsor2.jpg" alt="Trabajo con sponsor WDM" style={estilo} className="img-galeria" />
      </div>
    </section>
  );
}