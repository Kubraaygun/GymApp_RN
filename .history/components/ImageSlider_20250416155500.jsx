import React from "react";

import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text, View } from "react-native";

export default function ImageSlider() {
  return;
}

const ItemCard = ({ item, index }, parallaxProps) => {
  return <View style={{ width: wp(100) - 70, height: hp(25) }}></View>;
};
