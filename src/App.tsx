import { useMemo, useState } from "react";

import { BrutBadge, BrutCard } from "@/components/brutal";
import {
  NavButtons,
  OptionButton,
  ProgressHeader,
  ResultsView,
} from "@/components/questionnaire";
import { questions } from "@/data/questions";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(() =>
    Array(questions.length).fill("")
  );
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentIndex];

  const progressValue = useMemo(() => {
    const answered = answers.filter(Boolean).length;
    return Math.round((answered / questions.length) * 100);
  }, [answers]);

  const handleSelect = (option: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = option;
      return next;
    });
  };

  const handleNext = () => {
    if (!answers[currentIndex]) return;
    if (currentIndex === questions.length - 1) {
      setIsComplete(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const restart = () => {
    setAnswers(Array(questions.length).fill(""));
    setCurrentIndex(0);
    setIsComplete(false);
  };

  if (isComplete) {
    return <ResultsView answers={answers} onRestart={restart} />;
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 md:py-14">
      <BrutCard className="bg-white">
        <BrutBadge>First impressions</BrutBadge>
        <h1 className="mt-3 text-3xl font-extrabold text-black md:text-4xl">
          What people feel when they meet you
        </h1>
        <p className="mt-2 text-base font-medium text-black/80 md:text-lg">
          A light, single-question flow to capture how your presence comes
          across at first glance.
        </p>
      </BrutCard>

      <div className="mt-5">
        <BrutCard>
          <ProgressHeader
            currentIndex={currentIndex}
            total={questions.length}
            progressValue={progressValue}
          />

          <div className="mt-5 space-y-4">
            <p className="text-sm font-extrabold uppercase tracking-wide text-black">
              First moments
            </p>
            <h2 className="text-2xl font-extrabold text-black md:text-3xl">
              {currentQuestion.prompt}
            </h2>
            <p className="text-sm font-medium text-black/80">
              Think of someone meeting you for the very first time.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option) => (
                <OptionButton
                  key={option}
                  option={option}
                  isSelected={answers[currentIndex] === option}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>

          <NavButtons
            canGoBack={currentIndex !== 0}
            canGoNext={Boolean(answers[currentIndex])}
            isLast={currentIndex === questions.length - 1}
            onBack={handleBack}
            onNext={handleNext}
          />
        </BrutCard>
      </div>
    </main>
  );
}

export default App;
