import { grove } from "../data/sections";
import Button from "./Button";
import SectionIntro from "./SectionIntro";

export default function GroveSection() {
  return (
    <section id="grove" className="grove">
      <div className="grove-inner">
        <div className="grove-content">
          <span className="grove-name">{grove.name}</span>
          <SectionIntro title={grove.title} lead={grove.lead} dark />
          <ul className="grove-list">{grove.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
          <Button variant="gold-outline">{grove.cta}</Button>
        </div>
        <div className="grove-visual" aria-hidden="true" />
        <div className="grove-gradient" aria-hidden="true" />
      </div>
    </section>
  );
}
