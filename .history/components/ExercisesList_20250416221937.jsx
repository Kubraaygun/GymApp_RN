import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

export default function ExercisesList({ data }) {
  const router = useRouter();
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <ExerciseCard index={index} item={item} router={router} />
        )}
      />
    </View>
  );
}
const ExerciseCard = ({ item, router, index }) => {
  return (
    <View>
      <TouchableOpacity className="flex py-3 space-y-2">
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image source={{ uri: item.gifUrl }} contentFig />
        </View>
      </TouchableOpacity>
    </View>
  );
};
