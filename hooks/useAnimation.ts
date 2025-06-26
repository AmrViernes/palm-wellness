import { useToastController } from "@tamagui/toast";
import { secondaryColor } from "constants/Colors";
import { mockAPI } from "mocks";
import { useCallback, useRef, useState } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import type { AnimationState, WellnessData, WellnessSuggestion } from "types";

export const useAnimation = () => {
  const [mood, setMood] = useState<string>("");
  const [sleepHours, setSleepHours] = useState<number>(0);
  const [suggestions, setSuggestions] = useState<WellnessSuggestion[]>([]);
  const [notes, setNotes] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  const loadingRotation = useSharedValue(0);
  const formOpacity = useSharedValue(1);
  const formTranslateY = useSharedValue(0);
  const successScale = useSharedValue(0);
  const successOpacity = useSharedValue(0);

  const toast = useToastController();

  const suggestionAnimations = useRef<AnimationState[]>(
    Array.from({ length: 6 }, () => ({
      opacity: useSharedValue(0),
      translateY: useSharedValue(30),
    }))
  ).current;

  const startLoadingAnimation = useCallback(() => {
    loadingRotation.value = withSequence(
      withTiming(360, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
      withTiming(720, { duration: 1000, easing: Easing.inOut(Easing.ease) })
    );
  }, [loadingRotation]);

  const animateFormOut = useCallback(() => {
    formOpacity.value = withTiming(0, {
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    });
    formTranslateY.value = withTiming(-50, {
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    });
  }, [formOpacity, formTranslateY]);

  const animateSuggestionsIn = useCallback(() => {
    suggestionAnimations.forEach((anim, index) => {
      const delay = index * 100;

      anim.opacity.value = withDelay(
        delay,
        withTiming(1, {
          duration: 400,
          easing: Easing.inOut(Easing.ease),
        })
      );

      anim.translateY.value = withDelay(
        delay,
        withTiming(0, {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        })
      );
    });
  }, [suggestionAnimations]);

  const formAnimatedStyle = useAnimatedStyle(() => ({
    opacity: formOpacity.value,
    transform: [{ translateY: formTranslateY.value }],
  }));

  const successAnimatedStyle = useAnimatedStyle(() => ({
    opacity: successOpacity.value,
    transform: [{ scale: successScale.value }],
  }));

  const loadingAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${loadingRotation.value}deg` }],
  }));

  const isFormValid = mood !== "" && sleepHours !== 0;

  const handleSubmit = useCallback(async () => {
    if (!mood) return;

    setIsLoading(true);
    startLoadingAnimation();

    try {
      const data: WellnessData = { mood, sleep: sleepHours, notes };
      const result = await mockAPI.generateSuggestions(data);

      toast.show("Successfully saved!", {
        message: "We've got your data.",
        duration: 2000,
      });

      setSuggestions(result);
      setIsLoading(false);

      setTimeout(() => {
        animateFormOut();
        setTimeout(() => {
          setShowResults(true);
          animateSuggestionsIn();
        }, 500);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      console.log("Error:", error);
    }
  }, [
    mood,
    sleepHours,
    notes,
    startLoadingAnimation,
    animateFormOut,
    animateSuggestionsIn,
  ]);

  const resetForm = useCallback(() => {
    setShowResults(false);
    setSuggestions([]);
    setMood("");
    setSleepHours(0);
    setNotes("");

    formOpacity.value = withTiming(1, { duration: 300 });
    formTranslateY.value = withTiming(0, { duration: 300 });
    successScale.value = 0;
    successOpacity.value = 0;

    suggestionAnimations.forEach((anim) => {
      anim.opacity.value = 0;
      anim.translateY.value = 30;
    });
  }, [
    formOpacity,
    formTranslateY,
    successScale,
    successOpacity,
    suggestionAnimations,
  ]);

  const handleSleepChange = useCallback((delta: number) => {
    setSleepHours((prev) => Math.max(1, Math.min(12, prev + delta)));
  }, []);

  return {
    isLoading,
    showResults,
    mood,
    sleepHours,
    notes,
    suggestions,
    isFormValid,
    formAnimatedStyle,
    successAnimatedStyle,
    loadingAnimatedStyle,
    suggestionAnimations,
    handleSubmit,
    resetForm,
    handleSleepChange,
    setMood,
    setNotes,
  };
};
