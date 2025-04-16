import React from "react";

import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";

export default function ImageSlider() {
  return <Carousel />;
}

const ItemCard = ({ item, index }, parallaxProps) => {
  return <View style={{ width: wp(100) - 70, height: hp(25) }}></View>;
};
