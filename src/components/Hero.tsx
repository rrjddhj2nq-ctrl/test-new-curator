import { useLanguage } from "../i18n";
import Button from "./Button";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-title-box">
            <h1 className="hero-title">{t.hero.title}</h1>
          </div>
          <p className="hero-lead">{t.hero.lead}</p>
          <Button href="#contact" variant="emerald-filled" className="hero-cta">
            {t.hero.cta}
          </Button>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-art">
            <div className="hero-art-ring" />
            <div className="hero-art-core" />
          </div>
        </div>
      </div>
    </section>
  );
}
