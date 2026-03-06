import { useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import WhyUsSection from './components/WhyUsSection'
import DealershipSection from './components/DealershipSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingActionButtons from './components/FloatingActionButtons'
import { contactInfo, content, navItems } from './data/content'

function App() {
  const [lang, setLang] = useState('en')
  const t = useMemo(() => content[lang], [lang])

  return (
    <>
      <Header lang={lang} setLang={setLang} nav={navItems[lang]} contact={contactInfo} />
      <main>
        <HeroSection hero={t.hero} />
        <ProductSection product={t.product} />
        <WhyUsSection whyUs={t.whyUs} />
        <DealershipSection dealership={t.dealership} contact={contactInfo} />
        <AboutSection about={t.about} />
        <ContactSection labels={t.contact} contact={contactInfo} />
      </main>
      <Footer footerText={t.footer} brand={contactInfo.brand} brandNative={contactInfo.brandNative} />
      <FloatingActionButtons labels={t.contact} contact={contactInfo} />
    </>
  )
}

export default App
