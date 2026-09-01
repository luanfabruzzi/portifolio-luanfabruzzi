import "./Education.css";

export default function Education({ education, complementaryHours }) {
  return (
    <section id="formacao" className="education-section section-shell">
      <div className="section-heading">
        <span className="section-eyebrow">Trajetória de aprendizado</span>
        <h2>Formação</h2>
        <p>
          Minha base acadêmica e o aprendizado contínuo que complementa minha
          evolução profissional.
        </p>
      </div>

      <div
        className="education-section__summary"
        aria-label="Carga horária de cursos extracurriculares"
      >
        <div>
          <strong>{complementaryHours.toLocaleString("pt-BR")}h</strong>
          <span>em cursos extracurriculares</span>
        </div>
      </div>

      <div className="education-section__content">
        <h3>Formação acadêmica</h3>
        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={item.course}>
              <span className="education-card__status">{item.status}</span>
              <h4>{item.course}</h4>
              <p>{item.level}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
