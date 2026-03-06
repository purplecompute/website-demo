function ContactSection({ labels, contact }) {
  const mapLink = 'https://maps.google.com/?q=Umali,+Malkapur,+Buldhana,+Maharashtra'

  return (
    <section className="section" id="contact">
      <h2>{labels.title}</h2>
      <div className="contact-grid">
        <p><strong>Address:</strong> {contact.address}</p>
        <p><strong>Phone:</strong> {contact.phoneDisplay}</p>
        <p><strong>WhatsApp:</strong> {contact.whatsappDisplay}</p>
        <p><strong>Email:</strong> {contact.email}</p>
      </div>
      <div className="cta-row">
        <a href={`tel:${contact.phonePrimary}`} className="btn primary">{labels.call}</a>
        <a href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} className="btn secondary">{labels.whatsapp}</a>
        <a href={`mailto:${contact.email}`} className="btn secondary">{labels.email}</a>
        <a href={mapLink} className="btn secondary">{labels.map}</a>
      </div>
    </section>
  )
}

export default ContactSection
