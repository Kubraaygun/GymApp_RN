import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodypart } from "../api/exerciseDB";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExercisesList from "../components/ExercisesList";
import { ScrollView } from "react-native-virtualized-view";
export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState([]);
  const item = useLocalSearchParams();

  useEffect(() => {
    if (item) getExercises(item.name);
    console.log(item);
  }, [item]);

  export const fetchExercisesByBodypart = async (bodypart) => {
    try {
      const response = await fetch(
        `https://api.example.com/exercises?bodypart=${bodypart}`
      );
      const data = await response.json();
      return data; // Burada gelen yanıtı döndürdüğünüzden emin olun
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Eğer hata oluşursa boş bir array döndürün
    }
  };
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />

      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 flex justify-center pr-1 items-center absolute rounded-full"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* EXERCISES */}

      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700 mt-3"
        >
          {item.name} exercises
        </Text>
        <View className="mb-10">
          <ExercisesList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
