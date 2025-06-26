import Animated from "react-native-reanimated";
import {
  Lightbulb,
} from '@tamagui/lucide-icons';

export interface WellnessData {
  mood: string;
  sleep: number;
  notes: string;
}

export interface MoodOption {
  emoji: string;
  label: string;
  color: string;
  value: string;
}

export interface WellnessSuggestion {
  id: string;
  text: string;
  category: 'mood' | 'sleep' | 'activity' | 'general';
  icon: typeof Lightbulb;
}

export interface AnimationState {
  opacity: Animated.SharedValue<number>;
  translateY: Animated.SharedValue<number>;
}