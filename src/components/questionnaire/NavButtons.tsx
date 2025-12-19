import { BrutButton } from "@/components/brutal";

type Props = {
  canGoBack: boolean;
  canGoNext: boolean;
  isLast: boolean;
  onBack: () => void;
  onNext: () => void;
};

export function NavButtons({
  canGoBack,
  canGoNext,
  isLast,
  onBack,
  onNext,
}: Props) {
  return (
    <div className="mt-6 flex flex-wrap justify-end gap-3">
      <BrutButton
        type="button"
        onClick={onBack}
        disabled={!canGoBack}
        className="px-4 py-3 text-sm font-extrabold"
      >
        Previous
      </BrutButton>
      <BrutButton
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        variant="primary"
        className="px-4 py-3 text-sm font-extrabold"
      >
        {isLast ? "See my result" : "Next question"}
      </BrutButton>
    </div>
  );
}
