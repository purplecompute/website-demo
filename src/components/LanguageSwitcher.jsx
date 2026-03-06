const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'mr', label: 'मराठी' },
]

function LanguageSwitcher({ currentLang, onChange }) {
  return (
    <div className="language-switcher" role="group" aria-label="Language switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={currentLang === lang.code ? 'active' : ''}
          onClick={() => onChange(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
