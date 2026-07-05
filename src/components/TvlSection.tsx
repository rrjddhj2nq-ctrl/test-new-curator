import { useState } from "react";
import { tvlChartValues, tvlPeriodScale, type TvlPeriodKey } from "../i18n";
import { useLanguage } from "../i18n";
import SectionIntro from "./SectionIntro";

const periodKeys: TvlPeriodKey[] = ["yearly", "monthly", "weekly"];

export default function TvlSection() {
  const { t } = useLanguage();
  const [period, setPeriod] = useState<TvlPeriodKey>("yearly");
  const scale = tvlPeriodScale[period];

  return (
    <section className="tvl-section">
      <div className="container">
        <div className="tvl-panel">
          <div className="tvl-head">
            <SectionIntro eyebrow={t.tvl.eyebrow} title={t.tvl.title} dark />
            <div className="tvl-tabs" role="tablist">
              {periodKeys.map((key) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={period === key}
                  className={period === key ? "active" : ""}
                  onClick={() => setPeriod(key)}
                >
                  {t.tvl.periods[key]}
                </button>
              ))}
            </div>
          </div>

          <p className="tvl-caption">{t.tvl.caption}</p>

          <div className="tvl-chart" aria-label="TVL chart">
            {tvlChartValues.map((value, index) => (
              <div key={t.tvl.chartLabels[index]} className="tvl-col">
                <div className="tvl-bar" style={{ height: `${value * scale}%` }} />
                <span>{t.tvl.chartLabels[index]}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="tvl-link">{t.tvl.cta}</a>
        </div>
      </div>
    </section>
  );
}
