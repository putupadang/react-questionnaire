import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function BrutBadge({ children }: Props) {
  return (
    <div className="inline-flex items-center gap-2 border-2 border-black bg-yellow-300 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-black">
      {children}
    </div>
  );
}
