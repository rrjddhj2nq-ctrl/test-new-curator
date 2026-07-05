import { useLanguage } from "../i18n";
import SectionIntro from "./SectionIntro";

export default function ResearchSection() {
  const { t } = useLanguage();

  return (
    <section id="research" className="research">
      <div className="container">
        <div className="research-head">
          <SectionIntro title={t.research.title} lead={t.research.lead} />
          <a href="#contact" className="research-subscribe">{t.research.subscribeCta}</a>
        </div>

        <div className="research-scroll">
          {t.insights.map((item) => (
            <article key={item.title} className="research-card">
              <span className="research-card__type">{t.research.types[item.type]}</span>
              <h3 className="research-card__title">{item.title}</h3>
              <a href={item.url} className="research-card__link">{t.research.cardCta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
