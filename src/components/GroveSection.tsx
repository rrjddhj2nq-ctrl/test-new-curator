import { useLanguage } from "../i18n";
import Button from "./Button";
import SectionIntro from "./SectionIntro";

export default function GroveSection() {
  const { t } = useLanguage();

  return (
    <section id="grove" className="grove">
      <div className="grove-inner">
        <div className="grove-content">
          <span className="grove-name">{t.grove.name}</span>
          <SectionIntro title={t.grove.title} lead={t.grove.lead} dark />
          <ul className="grove-list">{t.grove.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
          <Button variant="gold-outline">{t.grove.cta}</Button>
        </div>
        <div className="grove-visual" aria-hidden="true" />
        <div className="grove-gradient" aria-hidden="true" />
      </div>
    </section>
  );
}
