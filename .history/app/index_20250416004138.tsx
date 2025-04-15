import { Image, StatusBar, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import _layout from "./_layout";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <View className="flex-1 flex justify-end ">
      <StatusBar className="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images1/welcome.png")}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb=12 space-y-8"
      >
        <View className="flex items-center">
          <Text style={{ fontSize: hp(5) }} className="text-white">
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
