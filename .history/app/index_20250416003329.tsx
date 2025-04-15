import { StatusBar, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Index() {
  return (
    <View className="flex-1 flex justify-end ">
      <StatusBar className="light" />
    </View>
  );
}
