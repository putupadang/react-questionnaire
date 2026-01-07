import { useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

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

  const saveResults = async (finalAnswers: string[]) => {
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Shanghai", // UTC+8
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const userAgent = navigator.userAgent;

    // Combine questions and answers
    const payload = questions.map((q, index) => ({
      question: q.prompt,
      answer: finalAnswers[index],
    }));

    console.log("Saving results:", { answers: payload, timestamp, userAgent });

    const { error } = await supabase.from("questionnaire_results").insert({
      answers: payload,
      submitted_at_local: timestamp,
      device_info: userAgent,
    });

    if (error) {
      console.error("Error saving results:", error);
    }
  };

  const handleNext = () => {
    if (!answers[currentIndex]) return;
    if (currentIndex === questions.length - 1) {
      setIsComplete(true);
      saveResults(answers);
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
      <BrutCard className="bg-brutal-surface">
        <BrutBadge>First impressions-ogive ggwp</BrutBadge>
        <h1 className="mt-3 text-3xl font-extrabold text-brutal-text md:text-4xl">
          What do you feel when meet me?
        </h1>
        <p className="mt-2 text-base font-medium text-brutal-muted md:text-lg"></p>
      </BrutCard>

      <div className="mt-5">
        <BrutCard>
          <ProgressHeader
            currentIndex={currentIndex}
            total={questions.length}
            progressValue={progressValue}
          />

          <div className="mt-5 space-y-4">
            {/* <p className="text-sm font-extrabold uppercase tracking-wide text-brutal-text">
              First moments
            </p> */}
            <h2 className="text-2xl font-extrabold text-brutal-text md:text-3xl">
              {currentQuestion.prompt}
            </h2>
            {/* <p className="text-sm font-medium text-brutal-muted">
              Think of someone meeting you for the very first time.
            </p> */}

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
