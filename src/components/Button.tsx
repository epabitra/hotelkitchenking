import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Icon from "./Icon";

type Variant = "primary" | "secondary" | "outline" | "outlineOnDark" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-green-600 text-cream hover:bg-green-700 shadow-sm shadow-green-900/20",
  secondary:
    "bg-gold-400 text-green-900 hover:bg-gold-500 shadow-sm shadow-gold-600/20",
  outline:
    "border border-green-600/40 text-green-700 hover:bg-green-600 hover:text-cream",
  outlineOnDark:
    "border border-cream/30 text-cream hover:bg-cream hover:text-green-900",
  ghost: "text-green-700 hover:bg-green-600/10",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  icon?: Parameters<typeof Icon>[0]["name"];
  className?: string;
};

type ButtonProps =
  | (CommonProps & { to: string; href?: never })
  | (CommonProps & { href: string; to?: never; external?: boolean })
  | (CommonProps & { to?: never; href?: never; onClick?: () => void; type?: "button" | "submit" });

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", icon, className = "" } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && <Icon name={icon} className="size-4" />}
      {children}
    </>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const external = "external" in props && props.external;
    return (
      <a
        href={props.href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={("type" in props && props.type) || "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      className={classes}
    >
      {content}
    </button>
  );
}
