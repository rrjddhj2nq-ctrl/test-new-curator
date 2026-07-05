import { FormEvent, useState } from "react";
import { site, socialLinks } from "../config/site";
import { contact } from "../data/sections";
import Button from "./Button";
import SectionIntro from "./SectionIntro";

export default function Contact() {
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
            eyebrow={contact.eyebrow}
            title={contact.title}
            lead={contact.lead}
            dark
          />
          <a href={`mailto:${site.email}`} className="contact-email">{site.email}</a>
          <div className="contact-social">
            {socialLinks.map(({ label, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer">{label}</a>
            ))}
          </div>
        </div>

        <div className="contact-form">
          {sent ? (
            <p className="contact-done">{contact.successMessage}</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="contact-form__label">{contact.formLabel}</h3>
              <div className="form-field">
                <input name="name" type="text" placeholder="Name *" required />
              </div>
              <div className="form-field">
                <input name="email" type="email" placeholder="Email *" required />
              </div>
              <div className="form-field">
                <select name="interest" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  {contact.interestOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <textarea name="message" rows={3} placeholder="Message" />
              </div>
              <Button type="submit" variant="gold-outline">{contact.submitCta}</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
