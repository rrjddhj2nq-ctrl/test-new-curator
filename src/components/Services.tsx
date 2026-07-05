import { services, servicesSection } from "../data/sections";
import Button from "./Button";
import SectionIntro from "./SectionIntro";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <SectionIntro
          title={servicesSection.title}
          lead={servicesSection.lead}
          align="center"
        />

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-top">
                <div className={`service-strip service-strip--${service.accent}`} />
                <div className="service-icon-wrap"><div className="service-icon" /></div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
              <div className="service-body">
                <ul>{service.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
                <Button variant="emerald-outline">
                  Learn More<span className="sr-only"> — {service.title}</span>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
