import { navLinks, site } from "../config/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-brand">{site.name}</span>
        <nav className="footer-links" aria-label="Footer">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
