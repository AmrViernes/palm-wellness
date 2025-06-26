import React from "react";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { XStack, ScrollView } from "tamagui";
import { useAnimation } from "hooks/useAnimation";
import { purpleColor, secondaryColor } from "constants/Colors";
import { WellnessResults, WellnessForm} from "../../components";

const index: React.FC = () => {
  const insets = useSafeAreaInsets();
  const animationHook = useAnimation();

  return (
    <XStack flex={1}>
      <StatusBar barStyle="light-content" backgroundColor={secondaryColor} />
      
      <LinearGradient
        colors={[secondaryColor, purpleColor]}
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <ScrollView 
          flex={1} 
          p="$4" 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {!animationHook.showResults ? (
            <WellnessForm {...animationHook} />
          ) : (
            <WellnessResults {...animationHook} />
          )}
        </ScrollView>
      </LinearGradient>
    </XStack>
  );
};

export default index;