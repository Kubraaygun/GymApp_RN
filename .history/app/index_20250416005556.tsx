import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import _layout from "./_layout";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
export default function Index() {
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar className="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images1/welcome.png")}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(30) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View className="flex mb-10 items-center justify-end">
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide"
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide"
          >
            For You
          </Text>
        </Animated.View>

        <View>
          <TouchableOpacity
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-wide"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
