import React, { memo } from "react";
import { YStack, H1, Paragraph, Button, Text } from "tamagui";
import { Heart, RefreshCw } from "@tamagui/lucide-icons";
import { SuggestionCard } from "./";
import type { AnimationState, WellnessSuggestion } from "../types";
import { LinearGradient } from "expo-linear-gradient";
import { purpleColor, secondaryColor, tintColorLight } from "constants/Colors";

interface WellnessResultsProps {
  suggestions: WellnessSuggestion[];
  suggestionAnimations: AnimationState[];
  resetForm: () => void;
}

export const WellnessResults: React.FC<WellnessResultsProps> = memo(
  ({ suggestions, suggestionAnimations, resetForm }) => {
    return (
      <YStack gap="$6" pt="$4">
        <YStack gap="$2" items="center">
          <Heart size="$3" color="$red8" />
          <H1 color="white" fontSize="$8">
            Your Wellness Plan
          </H1>
          <Paragraph color="$green1" fontSize="$4">
            Personalized just for you
          </Paragraph>
        </YStack>

        <YStack gap="$3">
          {suggestions.map((suggestion, index) => (
            <SuggestionCard
              key={suggestion.id}
              suggestion={suggestion}
              animationStyle={suggestionAnimations[index]}
            />
          ))}
        </YStack>

     <Button
        size="$5"
        variant="outlined"
        borderColor="$blue12"
        borderWidth={0}
        color="white"
        fontSize="$5"
        fontWeight="800"
        mt="$4"
        onPress={resetForm}
        pressStyle={{ scale: 0.98 }}
        animation="quick"
        icon={RefreshCw}
      >
        <LinearGradient
          colors={[secondaryColor, tintColorLight, secondaryColor]}
          start={[0, 0]}
          end={[1, 1]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 12,
          }}
        />
        <Text z={1} color="white">
          Start New Assessment
        </Text>
      </Button>
      </YStack>
    );
  }
);

WellnessResults.displayName = "WellnessResults";
