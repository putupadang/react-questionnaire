import type { ReactNode } from "react";

import { cx } from "@/components/brutal/cx";

type Props = {
  children: ReactNode;
  className?: string;
};

export function BrutCard({ children, className }: Props) {
  return (
    <section
      className={cx(
        "border-4 border-brutal-border bg-brutal-surface p-6 shadow-[10px_10px_0_#000] md:p-8",
        className
      )}
    >
      {children}
    </section>
  );
}
