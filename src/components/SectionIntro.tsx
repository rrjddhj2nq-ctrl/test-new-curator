type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
  className = "",
}: Props) {
  return (
    <div className={`section-intro section-intro--${align} ${dark ? "section-intro--dark" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-intro__title">{title}</h2>
      {lead && <p className="section-intro__lead">{lead}</p>}
    </div>
  );
}
