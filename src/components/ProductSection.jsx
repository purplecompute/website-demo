function ProductSection({ product }) {
  return (
    <section className="section" id="product">
      <h2>{product.title}</h2>
      <div className="product-grid">
        <div className="product-images">
          <img src="/assets/product-pack-front.svg" alt="Product front" />
          <img src="/assets/product-pack-back.svg" alt="Product back" />
          <img src="/assets/prepared-bati-serving.svg" alt="Prepared bati" />
        </div>
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.sizes}</p>
          <p>{product.suitable}</p>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
