import { useState } from "react";
import { navLinks, site } from "../config/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="container header-nav">
        <a href="/" className="header-logo">{site.name}</a>
        <div className={`header-links ${open ? "open" : ""}`}>
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
        <button className="header-menu" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </nav>
    </header>
  );
}
