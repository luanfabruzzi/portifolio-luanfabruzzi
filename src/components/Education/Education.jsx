import "./Education.css";

export default function Education({ education, certifications }) {
  const totalHours = certifications.reduce(
    (total, certification) => total + parseInt(certification.hours),
    0,
  );

  return (
    <section id="formacao" className="education-section section-shell">
      <div className="section-heading">
        <span className="section-eyebrow">Trajetória de aprendizado</span>
        <h2>Formação e certificações</h2>
        <p>
          Minha base acadêmica e os cursos que complementam minha evolução
          profissional.
        </p>
      </div>

      <div className="education-section__summary" aria-label="Resumo das certificações">
        <div>
          <strong>{certifications.length}</strong>
          <span>{certifications.length === 1 ? "certificação" : "certificações"}</span>
        </div>
        <div>
          <strong>{totalHours}h</strong>
          <span>de cursos concluídos</span>
        </div>
      </div>

      <div className="education-section__columns">
        <div>
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

        <div>
          <h3>Certificações</h3>
          {certifications.length > 0 ? (
            <div className="certification-list">
              {certifications.map((certification) => (
                <article className="certification-card" key={certification.title}>
                  <div>
                    <h4>{certification.title}</h4>
                    <p>{certification.issuer}</p>
                  </div>
                  <strong>{certification.hours}h</strong>
                </article>
              ))}
            </div>
          ) : (
            <div className="education-section__empty">
              <p>Certificações em atualização.</p>
              <span>Os cursos serão exibidos aqui com suas cargas horárias.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
