import React, { memo, forwardRef } from "react";
import Animated from "react-native-reanimated";
import { XStack, YStack, Card, Circle, Paragraph, useTheme } from "tamagui";
import type { WellnessSuggestion, AnimationState } from "../types";

const ForwardedCard = forwardRef<any, React.ComponentProps<typeof Card>>(
  (props, ref) => <Card ref={ref} {...props} />
);
const AnimatedCard = Animated.createAnimatedComponent(ForwardedCard);

interface SuggestionCardProps {
  suggestion: WellnessSuggestion;
  animationStyle?: AnimationState;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = memo(({
  suggestion,
  animationStyle,
}) => {
  const theme = useTheme();
  const animatedStyle = animationStyle ? {
    opacity: animationStyle.opacity,
    transform: [
      {
        translateY: animationStyle.translateY,
      },
    ],
  } : undefined;

  return (
    <AnimatedCard
      backgroundColor={theme.color3}
      borderRadius="$4"
      padding="$4"
      shadowColor="rgba(0,0,0,0.1)"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      elevation={3}
      style={animatedStyle}
      pressStyle={{ scale: 0.98 }}
      animation="quick"
    >
      <XStack items="flex-start" gap="$3">
        <Circle
          size="$3"
          backgroundColor="$blue6"
          alignItems="center"
          justifyContent="center"
        >
          <suggestion.icon size="$1" color="$blue10" />
        </Circle>
        <YStack flex={1}>
          <Paragraph
            color="$green10"
            fontSize="$4"
            lineHeight="$1"
          >
            {suggestion.text}
          </Paragraph>
        </YStack>
      </XStack>
    </AnimatedCard>
  );
});

SuggestionCard.displayName = "SuggestionCard";