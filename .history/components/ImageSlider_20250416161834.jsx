import React from "react";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text, View } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

export default function ImageSlider() {
  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View
        style={{
          width: wp(100) - 70,
          height: hp(25),
        }}
      >
        <ParallaxImage
          source={item}
          containerStyle={{ borderRadius: 30, flex: 1 }}
          style={{ resizeMode: "cover" }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      autoplayInterval={4000}
      width={wp(100)}
      renderItem={renderItem}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}
