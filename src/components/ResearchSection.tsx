import { useState } from "react";
import { useLanguage } from "../i18n";
import ContentModal, { InsightDetailContent } from "./ContentModal";
import SectionIntro from "./SectionIntro";

export default function ResearchSection() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = t.insights.find((item) => item.id === activeId);

  return (
    <section id="research" className="research">
      <div className="container">
        <div className="research-head">
          <SectionIntro title={t.research.title} lead={t.research.lead} />
          <a href="#contact" className="research-subscribe">{t.research.subscribeCta}</a>
        </div>

        <div className="research-scroll">
          {t.insights.map((item) => (
            <article key={item.id} className="research-card">
              <span className="research-card__type">{t.research.types[item.type]}</span>
              <h3 className="research-card__title">{item.title}</h3>
              <p className="research-card__excerpt">{item.excerpt}</p>
              <span className="research-card__meta">{item.readTime}</span>
              <button
                type="button"
                className="research-card__link"
                onClick={() => setActiveId(item.id)}
              >
                {t.research.cardCta}
              </button>
            </article>
          ))}
        </div>
      </div>

      <ContentModal
        open={activeId !== null}
        onClose={() => setActiveId(null)}
        title={active?.title ?? ""}
      >
        {activeId && <InsightDetailContent insightId={activeId} />}
      </ContentModal>
    </section>
  );
}
