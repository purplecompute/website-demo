function Footer({ footerText, brand, brandNative }) {
  return (
    <footer className="footer">
      <p>© 2026 {brand} ({brandNative}). {footerText}</p>
    </footer>
  )
}

export default Footer
