function AboutSection({ about }) {
  return (
    <section className="section light" id="about">
      <h2>{about.title}</h2>
      <p>{about.body}</p>
    </section>
  )
}

export default AboutSection
