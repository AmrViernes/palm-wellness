import type { WellnessData, WellnessSuggestion } from "../types";
import { Lightbulb, Leaf } from "@tamagui/lucide-icons";

export const mockAPI = {
  generateSuggestions: async (
    data: WellnessData
  ): Promise<WellnessSuggestion[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const suggestions: Record<string, string[]> = {
      "😴": [
        "Try a 20-minute power nap to boost energy levels",
        "Consider going to bed 30 minutes earlier tonight",
        "Practice gentle stretching before sleep",
      ],
      "😊": [
        "Keep up the positive energy with a nature walk",
        "Share your good mood - call a friend or family member",
        "Try journaling to capture this positive moment",
      ],
      "😔": [
        "Practice 10 minutes of deep breathing exercises",
        "Listen to your favorite uplifting music",
        "Consider talking to someone you trust",
      ],
      "😰": [
        "Try the 4-7-8 breathing technique to calm anxiety",
        "Take a few minutes for mindful meditation",
        "Consider a warm bath with lavender essential oil",
      ],
      "🤔": [
        "Take a mindful walk to clear your thoughts",
        "Try brain-dumping in a journal for 10 minutes",
        "Practice a short guided meditation",
      ],
    };

    const sleepSuggestions: Record<string, string[]> = {
      low: [
        "Prioritize getting 7-9 hours of sleep tonight",
        "Avoid caffeine after 2 PM today",
      ],
      medium: ["Your sleep looks decent, try to maintain consistency"],
      high: ["Great sleep! Keep up the good sleep hygiene"],
    };

    const moodSuggestions = suggestions[data.mood] || suggestions["😊"];
    const sleepCategory =
      data.sleep < 6 ? "low" : data.sleep > 8 ? "high" : "medium";
    const sleepAdvice = sleepSuggestions[sleepCategory];

    const allSuggestions = [
      ...moodSuggestions.slice(0, 2),
      ...sleepAdvice,
      "Remember: Small consistent steps lead to big wellness wins! 🌟",
    ];

    return allSuggestions.map((text, index) => ({
      id: `suggestion-${index}`,
      text,
      category: index < 2 ? "mood" : index < 4 ? "sleep" : "general",
      icon: index % 2 === 0 ? Lightbulb : Leaf,
    }));
  },
};
