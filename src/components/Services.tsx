import { useState } from "react";
import { useLanguage } from "../i18n";
import Button from "./Button";
import ContentModal, { ServiceDetailContent } from "./ContentModal";
import SectionIntro from "./SectionIntro";

export default function Services() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = t.services.find((service) => service.id === activeId);

  return (
    <section id="services" className="services">
      <div className="container">
        <SectionIntro
          title={t.servicesSection.title}
          lead={t.servicesSection.lead}
          align="center"
        />

        <div className="services-grid">
          {t.services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-top">
                <div className={`service-strip service-strip--${service.accent}`} />
                <div className="service-icon-wrap"><div className="service-icon" /></div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
              <div className="service-body">
                <ul>{service.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
                <Button variant="emerald-outline" onClick={() => setActiveId(service.id)}>
                  {t.common.learnMore}<span className="sr-only"> — {service.title}</span>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ContentModal
        open={activeId !== null}
        onClose={() => setActiveId(null)}
        title={active?.title ?? ""}
      >
        {activeId && <ServiceDetailContent serviceId={activeId} />}
      </ContentModal>
    </section>
  );
}
