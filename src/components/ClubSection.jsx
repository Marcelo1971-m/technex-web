export default function ClubSection() {
  return (
    <section style={{ padding: "60px 40px", textAlign: "center" }}>
      <h2>Historia del Club Technex 10 🚀</h2>

      <div style={{
        maxWidth: "900px",
        margin: "30px auto",
        textAlign: "left",
        lineHeight: "1.8"
      }}>
        <p>
          El Club de Robótica Educativa tiene sus orígenes en el año <strong>2022</strong>,
          a partir de una convocatoria del área de Ciencia y Técnica para conformar una
          delegación que representara a la provincia en instancias de robótica de competición
          desarrolladas en la Provincia de Misiones, con el objetivo inicial de adquirir
          experiencia en este campo.
        </p>

        <p>
          En esta primera etapa, el equipo estuvo integrado por estudiantes de distintas
          instituciones educativas, entre ellas la EPET N° 7, la EPETP N° 10 y el Colegio de
          la Ribera. La participación en la Copa Robótica de Misiones constituyó una experiencia
          fundacional que permitió conocer el funcionamiento de las competencias, el trabajo en
          equipo y las exigencias técnicas propias de este tipo de eventos.
        </p>

        <p>
          Durante el período comprendido entre los años <strong>2022 y 2024</strong>, el desarrollo
          del Club contó con el acompañamiento institucional de la Secretaría de Ciencia y Tecnología,
          lo que permitió garantizar la continuidad de las actividades formativas, el acompañamiento
          de los estudiantes y la participación en instancias de formación y exhibición.
        </p>

        <p>
          En el año <strong>2023</strong>, el Club sostuvo sus actividades de formación y entrenamiento,
          logrando participar en la última fecha de la Copa Robótica de Misiones, consolidándose como
          un espacio de aprendizaje y fortalecimiento de saberes.
        </p>

        <p>
          Durante el año <strong>2024</strong>, el Club desarrolló sus actividades de manera estable en
          la EPETP N.° 10. Si bien se encontraba prevista la participación en una competencia en la
          provincia de Salta, dicha instancia no pudo concretarse, manteniéndose no obstante el trabajo
          continuo con los estudiantes y la presencia en eventos institucionales.
        </p>

        <p>
          En el año <strong>2025</strong>, el Club atravesó una etapa de fortalecimiento interno,
          caracterizada por una mayor participación de estudiantes y el acompañamiento activo de las
          familias. Mediante autogestión de recursos y el apoyo del Ministerio de Cultura y Educación,
          se logró participar en la Liga Robótica Nacional en la ciudad de Posadas (Misiones), así como
          en un evento competitivo en la provincia del Chaco.
        </p>

        <p>
          Actualmente, el Club proyecta su crecimiento hacia el año <strong>2026</strong>, con el objetivo
          de ampliar la participación estudiantil, profundizar la formación técnica y consolidar su
          presencia en competencias de robótica, manteniendo una perspectiva educativa, inclusiva y
          orientada al futuro.
        </p>

        <p>
          De este modo, el Club Technex 10 se consolida como un espacio donde la formación progresiva,
          el compromiso sostenido y la robótica de competición se articulan para transformar el
          aprendizaje en una experiencia significativa, desafiante y con proyección.
        </p>
        <p>
          Esta historia no termina aquí. Technex 10 continúa creciendo, formando estudiantes,
          construyendo futuro y demostrando que cuando hay compromiso, trabajo en equipo y pasión,
          la tecnología se convierte en una herramienta para transformar realidades.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        <img src="/images/club/club1.jpg" alt="Club 1" className="img-club" />
        <img src="/images/club/club3.jpg" alt="Club 3" className="img-club" />
        <img src="/images/club/club4.jpg" alt="Club 4" className="img-club" />
        <img src="/images/club/club5.jpg" alt="Club 5" className="img-club" />
        <img src="/images/club/club6.jpg" alt="Club 6" className="img-club" />
        <img src="/images/club/club7.jpg" alt="Club 7" className="img-club" />
      </div>
    </section>
  );
}