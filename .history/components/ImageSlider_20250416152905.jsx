import React from "react";
import Carousel, { ParallaxImage } from "react-native-reanimated-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text } from "react-native";
import { View } from "react-native-web";
export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoPlay={true}
      width={wp(100)}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoPlayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}

const ItemCard = ({ item, index }, parallaxProps) => {
  return <View style={{ width: wp(100) - 70, height: hp(25) }}></View>;
};
