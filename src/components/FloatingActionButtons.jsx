function FloatingActionButtons({ labels, contact }) {
  return (
    <div className="floating-cta">
      <a href={`tel:${contact.phonePrimary}`}>{labels.call}</a>
      <a href={`https://wa.me/${contact.whatsapp.replace('+', '')}`}>{labels.whatsapp}</a>
    </div>
  )
}

export default FloatingActionButtons
