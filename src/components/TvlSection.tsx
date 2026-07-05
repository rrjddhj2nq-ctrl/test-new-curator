import { useState } from "react";
import { tvlPeriodScale } from "../config/site";
import { tvl } from "../data/sections";
import type { TvlPeriod } from "../types/content";
import SectionIntro from "./SectionIntro";

export default function TvlSection() {
  const [period, setPeriod] = useState<TvlPeriod>("Yearly");
  const scale = tvlPeriodScale[period];

  return (
    <section className="tvl-section">
      <div className="container">
        <div className="tvl-panel">
          <div className="tvl-head">
            <SectionIntro eyebrow={tvl.eyebrow} title={tvl.title} dark />
            <div className="tvl-tabs" role="tablist">
              {tvl.periods.map((p) => (
                <button
                  key={p}
                  role="tab"
                  aria-selected={period === p}
                  className={period === p ? "active" : ""}
                  onClick={() => setPeriod(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="tvl-chart" aria-label="TVL chart">
            {tvl.chart.map((point) => (
              <div key={point.label} className="tvl-col">
                <div className="tvl-bar" style={{ height: `${point.value * scale}%` }} />
                <span>{point.label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="tvl-link">{tvl.cta}</a>
        </div>
      </div>
    </section>
  );
}
