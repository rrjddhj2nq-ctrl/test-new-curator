import type { ButtonVariant } from "../types/content";
import "./Button.css";

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = BaseProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
};

type LinkProps = BaseProps & {
  href: string;
};

type Props = ButtonProps | LinkProps;

function classes(variant: ButtonVariant, extra: string) {
  return `btn btn--${variant} ${extra}`.trim();
}

function Inner({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="btn__text">{children}</span>
      <span className="btn__fill" aria-hidden="true" />
    </>
  );
}

export default function Button(props: Props) {
  const { children, variant = "emerald-outline", className = "" } = props;

  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={classes(variant, className)}>
        <Inner>{children}</Inner>
      </a>
    );
  }

  const { type = "button", onClick } = props as ButtonProps;
  return (
    <button type={type} className={classes(variant, className)} onClick={onClick}>
      <Inner>{children}</Inner>
    </button>
  );
}
