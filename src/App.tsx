import { useMemo, useState } from "react";

type Question = {
  prompt: string;
  options: string[];
};

const questions: Question[] = [
  {
    prompt: "What is the first thing people usually notice about me?",
    options: [
      "My smile",
      "My style or appearance",
      "My energy or vibe",
      "My confidence",
    ],
  },
  {
    prompt: "How do people typically feel when they first meet me?",
    options: ["Comfortable", "Curious", "Impressed", "Unsure but interested"],
  },
  {
    prompt: "What kind of presence do I give off?",
    options: [
      "Warm and friendly",
      "Calm and relaxed",
      "Energetic and lively",
      "Professional and serious",
    ],
  },
  {
    prompt: "What part of my communication stands out first?",
    options: [
      "My tone of voice",
      "My facial expressions",
      "My body language",
      "The way I introduce myself",
    ],
  },
  {
    prompt: "How do people perceive my personality at first?",
    options: [
      "Kind and approachable",
      "Confident and outspoken",
      "Quiet but observant",
      "Easygoing and fun",
    ],
  },
  {
    prompt: "What impression does my body language give?",
    options: ["Open and welcoming", "Relaxed", "Reserved", "Confident"],
  },
  {
    prompt: "What makes people trust me initially?",
    options: [
      "The way I speak",
      "My eye contact",
      "My genuine reactions",
      "My respectful attitude",
    ],
  },
  {
    prompt: "How quickly do people feel they can connect with me?",
    options: [
      "Immediately",
      "After a short conversation",
      "After getting to know me",
      "It depends on the situation",
    ],
  },
  {
    prompt: "How do people interpret my overall vibe?",
    options: [
      "Positive and uplifting",
      "Calm and stable",
      "Mysterious",
      "Friendly and easygoing",
    ],
  },
  {
    prompt: "What leaves a strong positive impression about me?",
    options: [
      "My personality",
      "My attitude",
      "My communication style",
      "My overall presence",
    ],
  },
];

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
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:py-14">
        <section className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-indigo-200/50 backdrop-blur-sm md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            First impressions
          </div>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            Thank you for sharing!
          </h1>
          <p className="mt-2 text-base text-slate-600 md:text-lg">
            Your answers paint a unique picture of how your presence lands. Save
            these notes or retake the questionnaire any time.
          </p>

          <div className="mt-9 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80">
            {questions.map((question, index) => (
              <div
                key={question.prompt}
                className="grid gap-3 px-4 py-3 md:grid-cols-[1.4fr_1fr] md:items-center"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-[12px] font-semibold text-indigo-700">
                    Q{index + 1}
                  </span>
                  <p className="text-sm text-slate-700 md:text-base">
                    {question.prompt}
                  </p>
                </div>
                <div className="text-right text-sm font-semibold text-slate-900 md:text-base md:text-left">
                  {answers[index] || "—"}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={restart}
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:translate-y-[-1px] hover:shadow-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Start over
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 md:py-14">
      <header className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-indigo-200/40 backdrop-blur-sm md:p-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          First impressions
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
          What people feel when they meet you
        </h1>
        <p className="mt-2 text-base text-slate-600 md:text-lg">
          A light, single-question flow to capture how your presence comes
          across at first glance.
        </p>
      </header>

      <section className="mt-5 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-indigo-200/40 backdrop-blur-sm md:p-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-slate-600">
            <span>
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span>{progressValue}% complete</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-[width] duration-200 ease-out"
              style={{ width: `${progressValue}%` }}
            />
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-500">
            First moments
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            {currentQuestion.prompt}
          </h2>
          <p className="text-sm text-slate-600">
            Think of someone meeting you for the very first time.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentIndex] === option;
              return (
                <button
                  type="button"
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={[
                    "group flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left shadow-sm transition hover:-translate-y-[1px] hover:border-indigo-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                    isSelected
                      ? "border-indigo-400 bg-indigo-50/80 shadow-md shadow-indigo-200"
                      : "border-slate-200 bg-white/90",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition",
                      isSelected
                        ? "border-indigo-500 bg-indigo-100"
                        : "border-slate-200 bg-white",
                    ].join(" ")}
                    aria-hidden
                  >
                    {isSelected && (
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                    )}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:border-indigo-300 hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!answers[currentIndex]}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-[1px] hover:shadow-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {currentIndex === questions.length - 1
              ? "See my result"
              : "Next question"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
