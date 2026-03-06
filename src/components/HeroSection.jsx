function HeroSection({ hero }) {
  return (
    <section className="hero section">
      <div>
        <h1>{hero.title}</h1>
        <p className="subtitle">{hero.subtitle}</p>
        <p>{hero.body}</p>
        <div className="cta-row">
          <a href="#product" className="btn primary">{hero.primaryCta}</a>
          <a href="#dealership" className="btn secondary">{hero.secondaryCta}</a>
        </div>
      </div>
      <img src="/assets/hero-product-packshot.svg" alt="Daal bati atta pack" className="hero-image" />
    </section>
  )
}

export default HeroSection
