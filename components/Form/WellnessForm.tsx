import React, { memo } from "react";
import { ViewStyle } from "react-native";
import Animated, { AnimatedStyleProp } from "react-native-reanimated";
import { YStack, H1, Paragraph } from "tamagui";

import {
  NotesInput,
  LoadingOverlay,
  SleepTracker,
  SubmitButton,
  MoodSelector,
} from "..";

interface WellnessFormProps {
  formAnimatedStyle: AnimatedStyleProp<ViewStyle>;
  loadingAnimatedStyle: AnimatedStyleProp<ViewStyle>;
  successAnimatedStyle: AnimatedStyleProp<ViewStyle>;
  mood: string;
  sleepHours: number;
  notes: string;
  isFormValid: boolean;
  isLoading: boolean;
  setMood: (mood: string) => void;
  handleSleepChange: (sleepHours: number) => void;
  setNotes: (notes: string) => void;
  handleSubmit: () => void;
}

export const WellnessForm: React.FC<WellnessFormProps> = memo(
  ({
    formAnimatedStyle,
    mood,
    sleepHours,
    notes,
    isFormValid,
    isLoading,
    loadingAnimatedStyle,
    successAnimatedStyle,
    setMood,
    handleSleepChange,
    setNotes,
    handleSubmit,
  }) => {
    return (
      <Animated.View style={formAnimatedStyle}>
        <YStack gap="$6" pt="$4">
          <YStack gap="$2" items="center">
            <H1 color="white" text="center" fontSize="$9">
              How are you feeling?
            </H1>
            <Paragraph color="$green1" text="center" fontSize="$5">
              Let's create your personalized wellness plan
            </Paragraph>
          </YStack>

          <MoodSelector mood={mood} onMoodChange={setMood} />

          <SleepTracker
            sleepHours={sleepHours}
            onSleepChange={handleSleepChange}
          />

          <NotesInput notes={notes} onNotesChange={setNotes} />

          <SubmitButton
            isFormValid={isFormValid}
            isLoading={isLoading}
            loadingAnimatedStyle={loadingAnimatedStyle}
            onSubmit={handleSubmit}
          />

          {isLoading && (
            <LoadingOverlay successAnimatedStyle={successAnimatedStyle} />
          )}
        </YStack>
      </Animated.View>
    );
  }
);

WellnessForm.displayName = "WellnessForm";

export default WellnessForm;
