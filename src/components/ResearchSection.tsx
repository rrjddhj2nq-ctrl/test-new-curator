import { insights, research } from "../data/sections";
import SectionIntro from "./SectionIntro";

export default function ResearchSection() {
  return (
    <section id="research" className="research">
      <div className="container">
        <div className="research-head">
          <SectionIntro title={research.title} lead={research.lead} />
          <a href="#contact" className="research-subscribe">{research.subscribeCta}</a>
        </div>

        <div className="research-scroll">
          {insights.map((item) => (
            <article key={item.title} className="research-card">
              <span className="research-card__type">{item.type}</span>
              <h3 className="research-card__title">{item.title}</h3>
              <a href={item.url} className="research-card__link">{research.cardCta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
