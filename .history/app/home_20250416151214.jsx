import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      <StatusBar style="dark" />
      {/* AVATAR */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images1/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <View className="bg-neutral-200 rounded-full flex justify-center items-center">
            <Icon name="rocket" size={30} color="#900" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
