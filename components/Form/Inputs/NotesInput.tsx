import React, { memo, useCallback } from "react";
import { YStack, H3, TextArea } from "tamagui";

interface NotesInputProps {
  notes: string;
  onNotesChange: (notes: string) => void;
}

export const NotesInput: React.FC<NotesInputProps> = memo(
  ({ notes, onNotesChange }) => {
    const handleTextChange = useCallback(
      (text: string) => {
        onNotesChange(text);
      },
      [onNotesChange]
    );

    return (
      <YStack gap="$3">
        <H3 color="white" fontSize="$6">
          Additional Notes (Optional)
        </H3>
        <TextArea
          placeholder="How are you feeling today? Any specific concerns?"
          //placeholderTextColor="unset"
          backgroundColor="transparent"
          borderColor="$accent1"
          borderWidth={0.5}
          color="white"
          fontSize="$4"
          height="$6"

          numberOfLines={3}
          value={notes}
          onChangeText={handleTextChange}
          focusStyle={{
            backgroundColor: "$green3",
            borderColor: "$green12",
            color: "$green12",
            borderWidth: 1,
          }}
        />
      </YStack>
    );
  }
);

NotesInput.displayName = "NotesInput";
