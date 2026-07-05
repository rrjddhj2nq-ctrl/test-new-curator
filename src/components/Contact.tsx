import { FormEvent, useState } from "react";
import { siteMeta, socialHrefs } from "../i18n/types";
import { useLanguage } from "../i18n";
import Button from "./Button";
import SectionIntro from "./SectionIntro";

export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div>
          <SectionIntro
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            lead={t.contact.lead}
            dark
          />
          <a href={`mailto:${siteMeta.email}`} className="contact-email">{siteMeta.email}</a>
          <div className="contact-social">
            {socialHrefs.map(({ key, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer">{t.social[key]}</a>
            ))}
          </div>
        </div>

        <div className="contact-form">
          {sent ? (
            <p className="contact-done">{t.contact.successMessage}</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="contact-form__label">{t.contact.formLabel}</h3>
              <div className="form-field">
                <input name="name" type="text" placeholder={t.contact.namePlaceholder} required />
              </div>
              <div className="form-field">
                <input name="email" type="email" placeholder={t.contact.emailPlaceholder} required />
              </div>
              <div className="form-field">
                <select name="interest" defaultValue="">
                  <option value="" disabled>{t.contact.selectPlaceholder}</option>
                  {t.contact.interestOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <textarea name="message" rows={3} placeholder={t.contact.messagePlaceholder} />
              </div>
              <Button type="submit" variant="gold-outline">{t.contact.submitCta}</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
