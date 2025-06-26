import { Tabs } from "expo-router";
import { useTheme } from "tamagui";
import { HeartPlus } from "@tamagui/lucide-icons";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.red10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          //tabBarIcon: ({ color }) => <HeartPlus color={color as any} />,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}
