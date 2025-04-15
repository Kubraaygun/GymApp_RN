import { Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Index() {
  return (
    <View className=" bg-red-500 font-bold ">
      <Text>NativeWind is working!</Text>
    </View>
  );
}
