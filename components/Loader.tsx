import React, { memo } from "react";
import Animated from "react-native-reanimated";
import { YStack, Text } from "tamagui";
import { CheckCircle } from "@tamagui/lucide-icons";

interface LoadingOverlayProps {
  successAnimatedStyle: any;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = memo(({ 
  successAnimatedStyle 
}) => {
  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "$blue8",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
        },
        successAnimatedStyle,
      ]}
    >
      <YStack items="center" gap="$4">
        <CheckCircle size="$6" color="$green10" />
        <Text color="white" fontSize="$5" text="center">
          Analyzing your wellness needs...
        </Text>
      </YStack>
    </Animated.View>
  );
});

LoadingOverlay.displayName = "LoadingOverlay";