import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Exercises() {
  return (
    <View className="mt-20">
      <Text>Exercises</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
