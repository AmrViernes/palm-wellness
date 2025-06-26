# Palm Wellness

Hey there! This is a cozy little React Native app I built to help you track your mood, log your sleep, and get personalized wellness tips. It’s got a smooth, friendly vibe with some neat animations, all powered by Expo and Tamagui.

## Getting Started

Wanna try it out? Here’s how to get it running:

1. **Grab the Code**:
   ```bash
   git clone https://github.com/AmrViernes/palm-wellness.git
   cd wellness
   ```

2. **Set Up Dependencies**:
   Make sure you’ve got yarn Expo CLI ready to go. Then, just run:
   ```bash
   yarn
   ```

3. **Fire It Up**:
   Start the app with:
   ```bash
   yarn start
   ```
   Scan the QR code with the Expo Go app on your phone, or run it on an emulator if that’s your thing.

4. **Extra Setup Notes**:
   - The app uses `expo-linear-gradient`, `react-native-reanimated`, and `tamagui`, which should be in your `package.json`.

## What’s Under the Hood
I built this with a few trusty tools:
- **React Native**: For that sweet cross-platform mobile magic.
- **Expo**: Makes development a breeze with its managed workflow.
- **Tamagui**: Keeps the UI looking sharp and consistent.
- **React Native Reanimated**: Powers those buttery-smooth animations.
- **TypeScript**: Helps me keep the code clean and catch typos early.

## How I Built It
- I broke the app into small, reusable chunks (like `MoodSelector` and `SleepTracker`) to keep things tidy and snappy.
- All the logic and animations live in a single `useAnimation` hook, so it’s easy to manage state without passing props all over the place.
- Used `memo` to make sure components only re-render when they need to, keeping the app zippy.

## Why I Made It This Way
1. **The Look and Feel**:
   - I went with a blue-to-purple gradient background (using `LinearGradient`) to give off a calm, wellness-y vibe. Plus, I made sure it plays nice with different phone screens by using safe area insets.
   - Everything’s stacked vertically with Tamagui’s `YStack` to keep the layout clean and easy to follow, whether you’re picking a mood or checking your wellness plan.

2. **Fancy Animations**:
   - I used Reanimated to make the suggestion cards pop in one by one, giving it a friendly, natural flow. It feels less robotic and more like a conversation.
   - The form fades out and the success overlay scales in smoothly, thanks to `useAnimatedStyle`. It’s all hardware-accelerated, so it doesn’t lag.

## What I’d Tweak If I Had More Time
Honestly, I’d love to make the error handling a bit friendlier. Right now, it’s solid, Maybe even a “try again” button for those rare hiccups with `mockAPI`. It’d make the app feel even more polished and welcoming.