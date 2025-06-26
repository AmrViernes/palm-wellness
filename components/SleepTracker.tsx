import React, { memo, useCallback } from "react";
import { YStack, XStack, H3, Button, Text, Card, XGroup } from "tamagui";
import { Plus, Minus } from "@tamagui/lucide-icons";

interface SleepTrackerProps {
  sleepHours: number;
  onSleepChange: (delta: number) => void;
}

export const SleepTracker: React.FC<SleepTrackerProps> = memo(
  ({ sleepHours, onSleepChange }) => {
    const handleDecrease = useCallback(() => {
      onSleepChange(-1);
    }, [onSleepChange]);

    const handleIncrease = useCallback(() => {
      onSleepChange(1);
    }, [onSleepChange]);

    const getSleepQuality = useCallback((hours: number): string => {
      if (hours === 0) {
        return "";
      } else if (hours < 6 && hours > 0) {
        return "Too little sleep";
      } else if (hours <= 7) {
        return "Could be better";
      } else if (hours === 8) {
        return "Great sleep!";
      } else if (hours > 8) {
        return "Too much sleep";
      } else {
        return "";
      }
    }, []);

    const getSleepColor = useCallback((hours: number): string => {
      if (hours < 6) {
        return "$red8";
      } else if (hours <= 7) {
        return "$yellow8";
      } else if (hours === 8) {
        return "$green8";
      } else if (hours > 8) {
        return "$red8";
      } else {
        return "$blue8";
      }
    }, []);

    return (
      <YStack gap="$3">
        <H3 color="white" fontSize="$6">
          Sleep Last Night
        </H3>
        <Card
          backgroundColor="rgba(255,255,255,0.2)"
          borderRadius="$4"
          padding="$4"
          pressStyle={{ scale: 0.98 }}
          animation="quick"
        >
          <XStack items="center" justify="center" gap="$4">
            <XGroup gap="$2">
              <Button
                size="$4"
                circular
                backgroundColor="rgba(255,255,255,0.3)"
                icon={Minus}
                color="white"
                onPress={handleDecrease}
                pressStyle={{ scale: 0.9 }}
                animation="quick"
                disabled={sleepHours <= 1}
                opacity={sleepHours <= 1 ? 0.5 : 1}
              />

              <YStack items="center" minW={100}>
                <Text color="white" fontSize="$10" fontWeight="bold">
                  {sleepHours}
                </Text>
                <Text color="rgba(255,255,255,0.8)" fontSize="$4">
                  hours
                </Text>
                <Text
                  color={getSleepColor(sleepHours) as any}
                  fontSize="$3"
                  fontWeight="500"
                  mt="$1"
                >
                  {getSleepQuality(sleepHours)}
                </Text>
              </YStack>

              <Button
                size="$4"
                circular
                backgroundColor="rgba(255,255,255,0.3)"
                icon={Plus}
                color="white"
                onPress={handleIncrease}
                pressStyle={{ scale: 0.9 }}
                animation="quick"
                disabled={sleepHours >= 12}
                opacity={sleepHours >= 12 ? 0.5 : 1}
              />
            </XGroup>
          </XStack>
        </Card>
      </YStack>
    );
  }
);

SleepTracker.displayName = "SleepTracker";
