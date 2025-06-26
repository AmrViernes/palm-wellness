import { memo } from "react";
import { Text, YStack } from "tamagui";
import { Button } from "tamagui";
import type{ MoodOption } from "types";

interface MoodButtonProps {
  option: MoodOption;
  isSelected: boolean;
  onPress: () => void;
}

export const MoodButton: React.FC<MoodButtonProps> = memo(
  ({ option, isSelected, onPress }) => (
    <Button
      size="$4"
      variant={isSelected ? "outlined" : "outlined"}
      color={isSelected ? "$blue12" : "$green1"}
      backgroundColor={isSelected ? option.color : "transparent"}
      borderColor={isSelected ? "$green10" : "transparent"}
      borderWidth={isSelected ? 0.5 : 1}
      width="18%"
      height="10%"
      aspectRatio={1}
      onPress={onPress}
      pressStyle={{ scale: 0.95 }}
      animation="quickest"
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <YStack items="center" gap="$1">
        <Text fontSize="$7" animation="superBouncy">{option.emoji}</Text>
        <Text
          color={isSelected ? "$white1" : "$green1"}
          fontSize="$2"
          text="center"
          letterSpacing={1}
          fontWeight={isSelected ? "800" : "400"}
        >
          {option.label}
        </Text>
      </YStack>
    </Button>
  )
);

MoodButton.displayName = "MoodButton";
