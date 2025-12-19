import { cx } from "@/components/brutal/cx";

type Props = {
  value: number;
  className?: string;
};

export function BrutProgress({ value, className }: Props) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div
      className={cx(
        "h-3 w-full border-2 border-brutal-border bg-brutal-surface",
        className
      )}
    >
      <div
        className="h-full bg-brutal-accent transition-[width] duration-200 ease-out"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
