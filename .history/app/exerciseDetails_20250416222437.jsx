import { View, Text } from "react-native";
import React from "react";

export default function ExerciseDetails() {
  const item = useLocalSearchParams();
  console.log("go item:", item);
  return (
    <View>
      <Text>exerciseDetails</Text>
    </View>
  );
}
