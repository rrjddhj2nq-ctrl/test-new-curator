import { useEffect, type ReactNode } from "react";
import { useLanguage } from "../i18n";
import Button from "./Button";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export default function ContentModal({ open, onClose, title, children }: Props) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <h2 id="modal-title" className="modal-title">{title}</h2>
          <button type="button" className="modal-close" onClick={onClose} aria-label={t.common.close}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-foot">
          <Button href="#contact" variant="emerald-filled" onClick={onClose}>
            {t.common.contactCta}
          </Button>
        </div>
      </div>
    </div>
  );
}

function DetailBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="detail-block">
      <h3 className="detail-block__label">{label}</h3>
      {children}
    </div>
  );
}

export function ServiceDetailContent({ serviceId }: { serviceId: string }) {
  const { t } = useLanguage();
  const service = t.services.find((item) => item.id === serviceId);
  if (!service) return null;

  const { detail } = service;
  return (
    <>
      <p className="detail-lead">{detail.overview}</p>
      <DetailBlock label={t.common.capabilities}>
        <ul className="detail-list">{detail.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
      </DetailBlock>
      <DetailBlock label={t.common.idealFor}>
        <p>{detail.idealFor}</p>
      </DetailBlock>
      <DetailBlock label={t.common.deliverables}>
        <ul className="detail-list">{detail.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
      </DetailBlock>
    </>
  );
}

export function GroveDetailContent() {
  const { t } = useLanguage();
  return (
    <>
      <p className="detail-lead">{t.grove.detailLead}</p>
      <div className="module-grid">
        {t.grove.modules.map((module) => (
          <article key={module.name} className="module-card">
            <h3 className="module-card__name">{module.name}</h3>
            <p className="module-card__summary">{module.summary}</p>
            <ul className="detail-list">{module.features.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </>
  );
}

export function InsightDetailContent({ insightId }: { insightId: string }) {
  const { t } = useLanguage();
  const insight = t.insights.find((item) => item.id === insightId);
  if (!insight) return null;

  return (
    <>
      <p className="detail-meta">{t.research.types[insight.type]} · {insight.readTime}</p>
      <p className="detail-lead">{insight.summary}</p>
      <DetailBlock label={t.common.keyTakeaways}>
        <ul className="detail-list">{insight.keyPoints.map((item) => <li key={item}>{item}</li>)}</ul>
      </DetailBlock>
    </>
  );
}
