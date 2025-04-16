import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";

export default function exerciseDetails() {
  const item = useLocalSearchParams();
  console.log("go item:", item);
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image />
      </View>
    </View>
  );
}
