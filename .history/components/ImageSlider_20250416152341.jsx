
import React from "react";
import Carousel, { ParallaxImage } from "react-native-reanimated-carousel";
import { sliderImages } from "../constants";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoPlay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={}
    />
  );
}

const ItemCard = () => {};
