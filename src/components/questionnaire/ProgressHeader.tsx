import { BrutProgress } from "@/components/brutal";

type Props = {
  currentIndex: number;
  total: number;
  progressValue: number;
};

export function ProgressHeader({ currentIndex, total, progressValue }: Props) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-bold text-black">
        <span>
          Question {currentIndex + 1} of {total}
        </span>
        <span>{progressValue}% complete</span>
      </div>
      <BrutProgress value={progressValue} />
    </div>
  );
}
