function DealershipSection({ dealership, contact }) {
  return (
    <section className="section" id="dealership">
      <h2>{dealership.title}</h2>
      <p>{dealership.body}</p>
      <div className="cta-row">
        <a href={`tel:${contact.phonePrimary}`} className="btn primary">{dealership.primaryCta}</a>
        <a href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} className="btn secondary">{dealership.secondaryCta}</a>
      </div>
    </section>
  )
}

export default DealershipSection
