export type Question = {
  prompt: string;
  options: string[];
};

export const questions: Question[] = [
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
