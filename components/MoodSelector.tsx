import React, { memo, useCallback } from "react";
import { YStack, XStack, H3, XGroup } from "tamagui";
import { MOOD_OPTIONS } from "constants/Mood";
import { MoodButton } from "./Form/Buttons/MoodButton";

interface MoodSelectorProps {
  mood: string;
  onMoodChange: (mood: string) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = memo(
  ({ mood, onMoodChange }) => {
    const handleMoodPress = useCallback(
      (selectedMood: string) => {
        onMoodChange(selectedMood);
      },
      [onMoodChange]
    );

    return (
      <YStack gap="$3">
        <H3 color="white" fontSize="$6">
          Current Mood
        </H3>
        <XStack flexWrap="wrap" justify="space-between" gap="$2">

            {MOOD_OPTIONS.map((option) => {
              const isSelected = mood === option.emoji;

              return (
                <MoodButton
                  key={option.emoji}
                  option={option}
                  isSelected={isSelected}
                  onPress={() => handleMoodPress(option.emoji)}
                />
              );
            })}

        </XStack>
      </YStack>
    );
  }
);

MoodSelector.displayName = "MoodSelector";
