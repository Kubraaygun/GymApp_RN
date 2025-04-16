import { Stack } from "expo-router";
import "./globals.css";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="exercises"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="exercisesDetails"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
