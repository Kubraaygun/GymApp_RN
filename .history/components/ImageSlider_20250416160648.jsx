import React from "react";

import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image, Text, View } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      width={wp(100)}
      autoplay={true}
      renderItem={({ item, index, parallaxProps }) => (
        <ItemCard item={item} index={index} parallaxProps={parallaxProps} />
      )}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View
      style={{
        width: wp(100) - 70,
        height: hp(25),
      }}
    >
      <ParallaxImage />
    </View>
  );
};
