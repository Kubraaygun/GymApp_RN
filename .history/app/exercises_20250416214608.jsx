import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodypart } from "../api/exerciseDB";

export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState();
  const item = useLocalSearchParams();
  console.log("go item:", item);

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodypart(bodypart);
    // console.log("got data:", data);
    setExercises(data);
  };

  return (
    <View className="mt-20">
      <Text>Exercises</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
