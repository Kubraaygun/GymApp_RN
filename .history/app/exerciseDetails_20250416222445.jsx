import { View, Text } from "react-native";
import React from "react";

export default function exerciseDetails() {
  const item = useLocalSearchParams();
  console.log("go item:", item);
  return (
    <View>
      <Text>exerciseDetails</Text>
    </View>
  );
}
