import { View, Text } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-reanimated-carousel";
import { sliderImages } from "../constants";
export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoPlay={true}
      renderItem={ItemCard}
    />
  );
}

const ItemCard = () => {};
