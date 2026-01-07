import { questions } from "@/data/questions";
import { BrutBadge, BrutButton, BrutCard, cx } from "@/components/brutal";

type Props = {
  answers: string[];
  onRestart: () => void;
};

export function ResultsView({ answers, onRestart }: Props) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 md:py-14">
      <BrutCard>
        <BrutBadge>First impressions-ogive ggwp</BrutBadge>
        <h1 className="mt-3 text-3xl font-extrabold text-brutal-text md:text-4xl">
          Thank you for sharing!
        </h1>
        <p className="mt-2 text-base font-medium text-brutal-muted md:text-lg">
          Your answers paint a unique picture of how your presence lands. Save
          these notes or retake the questionnaire any time.
        </p>

        <div className="mt-9 overflow-hidden border-2 border-brutal-border bg-brutal-surface shadow-[6px_6px_0_#000]">
          {questions.map((question, index) => (
            <div
              key={question.prompt}
              className={cx(
                "grid gap-3 px-4 py-3",
                "md:grid-cols-[1.4fr_1fr] md:items-center",
                index === 0 ? "" : "border-t-2 border-brutal-border"
              )}
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center border-2 border-brutal-border bg-brutal-badge px-3 py-1 text-[12px] font-extrabold text-brutal-text">
                  Q{index + 1}
                </span>
                <p className="text-sm font-semibold text-brutal-text md:text-base">
                  {question.prompt}
                </p>
              </div>
              <div className="text-right text-sm font-extrabold text-brutal-text md:text-base md:text-left">
                {answers[index] || "—"}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <BrutButton
            type="button"
            onClick={onRestart}
            variant="primary"
            className="px-4 py-3 text-sm font-extrabold"
          >
            Start over
          </BrutButton>
        </div>
      </BrutCard>
    </main>
  );
}
