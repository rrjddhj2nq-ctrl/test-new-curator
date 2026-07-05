import { useLanguage } from "../i18n";

export default function StatsBar() {
  const { t } = useLanguage();

  return (
    <section className="stats-bar" aria-label="Key metrics">
      <div className="container stats-bar__inner">
        {t.stats.map((stat) => (
          <div key={stat.label} className="stat">
            <span className="stat__value">{stat.value}</span>
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
