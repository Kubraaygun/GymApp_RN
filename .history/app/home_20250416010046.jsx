import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text>READY TO</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
