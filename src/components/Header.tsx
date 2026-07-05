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
        <div className="header-right">
          <div className={`header-links ${open ? "open" : ""}`}>
            {navHrefs.map(({ key, href }) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{t.nav[key]}</a>
            ))}
          </div>
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
        </div>
        <button className="header-menu" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </nav>
    </header>
  );
}
