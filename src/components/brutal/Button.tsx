import type { ButtonHTMLAttributes } from "react";

import { cx } from "@/components/brutal/cx";

type Variant = "primary" | "secondary";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const baseClassName = cx(
  "border-2 border-brutal-border shadow-[6px_6px_0_#000] transition",
  "enabled:hover:-translate-x-[1px] enabled:hover:-translate-y-[1px] enabled:hover:shadow-[8px_8px_0_#000]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brutal-border",
  "disabled:cursor-not-allowed disabled:opacity-60"
);

const variantClassName: Record<Variant, string> = {
  primary: "bg-brutal-accent text-brutal-surface",
  secondary: "bg-brutal-surface text-brutal-text",
};

export function BrutButton({
  variant = "secondary",
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cx(baseClassName, variantClassName[variant], className)}
    />
  );
}
