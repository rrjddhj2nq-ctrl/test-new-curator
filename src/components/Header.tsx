import { useState } from "react";
import { navHrefs, siteMeta } from "../i18n/types";
import { useLanguage } from "../i18n";
import type { Locale } from "../i18n";

const localeLabels: Record<Locale, string> = { en: "EN", zh: "中文" };

export default function Header() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="header">
      <nav className="container header-nav">
        <a href="/" className="header-logo">{siteMeta.name}</a>

        <div className="header-links">
          {navHrefs.map(({ key, href }) => (
            <a key={href} href={href}>{t.nav[key]}</a>
          ))}
        </div>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            {(["en", "zh"] as Locale[]).map((code) => (
              <button
                key={code}
                type="button"
                className={locale === code ? "active" : ""}
                aria-pressed={locale === code}
                onClick={() => setLocale(code)}
              >
                {localeLabels[code]}
              </button>
            ))}
          </div>
          <button
            className={`header-menu ${open ? "open" : ""}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span />
          </button>
        </div>
      </nav>

      <div className={`header-mobile-nav ${open ? "open" : ""}`}>
        <div className="container header-mobile-nav__inner">
          {navHrefs.map(({ key, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{t.nav[key]}</a>
          ))}
        </div>
      </div>
    </header>
  );
}
