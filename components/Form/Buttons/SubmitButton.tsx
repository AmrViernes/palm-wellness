import React, { memo } from "react";
import Animated from "react-native-reanimated";
import { Button, useTheme } from "tamagui";
import { RefreshCw } from "@tamagui/lucide-icons";
import { secondaryColor } from "constants/Colors";

interface SubmitButtonProps {
  isFormValid: boolean;
  isLoading: boolean;
  loadingAnimatedStyle: any;
  onSubmit: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = memo(
  ({ isFormValid, isLoading, loadingAnimatedStyle, onSubmit }) => {
    const theme = useTheme();
    return (
      <Button
        size="$5"
        color={isFormValid ? "$green12" : "$green3"}
        backgroundColor={"$green3"}
        fontSize="$5"
        fontWeight="600"
        mt="$4"
        disabled={!isFormValid || isLoading}
        onPress={onSubmit}
        pressStyle={{ scale: 0.98 }}
        animation="quick"
        opacity={isFormValid ? 1 : 0.5}
        icon={isLoading ? undefined : undefined}
      >
        {isLoading ? (
          <Animated.View style={loadingAnimatedStyle}>
            <RefreshCw size="$1.5" color={theme?.color10} />
          </Animated.View>
        ) : (
          "Get My Wellness Plan"
        )}
      </Button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";
