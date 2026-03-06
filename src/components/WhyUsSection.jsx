function WhyUsSection({ whyUs }) {
  return (
    <section className="section light" id="why-us">
      <h2>{whyUs.title}</h2>
      <div className="points-grid">
        {whyUs.points.map((point) => (
          <article key={point} className="point-card">
            <span>✓</span>
            <p>{point}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyUsSection
