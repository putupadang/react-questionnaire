import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function BrutBadge({ children }: Props) {
  return (
    <div className="inline-flex items-center gap-2 border-2 border-brutal-border bg-brutal-badge px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-brutal-text">
      {children}
    </div>
  );
}
