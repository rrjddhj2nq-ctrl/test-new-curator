import { navHrefs, siteMeta } from "../i18n/types";
import { useLanguage } from "../i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-brand">{siteMeta.name}</span>
        <nav className="footer-links" aria-label="Footer">
          {navHrefs.map(({ key, href }) => (
            <a key={href} href={href}>{t.nav[key]}</a>
          ))}
        </nav>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {siteMeta.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
