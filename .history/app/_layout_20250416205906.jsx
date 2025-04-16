import { Stack } from "expo-router";
import "./globals.css";

export default function _layout() {
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
}
