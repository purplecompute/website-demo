import LanguageSwitcher from './LanguageSwitcher'

function Header({ lang, setLang, nav, contact }) {
  return (
    <header className="header" id="home">
      <div className="brand-wrap">
        <img src="/assets/logo-placeholder.svg" alt="Suddh Gaav logo" className="logo" />
        <div>
          <p className="brand">{contact.brand}</p>
          <p className="brand-native">{contact.brandNative}</p>
        </div>
      </div>
      <nav className="nav">
        {nav.map((item, index) => (
          <a key={item} href={`#${['home', 'product', 'why-us', 'dealership', 'about', 'contact'][index]}`}>
            {item}
          </a>
        ))}
      </nav>
      <LanguageSwitcher currentLang={lang} onChange={setLang} />
    </header>
  )
}

export default Header
