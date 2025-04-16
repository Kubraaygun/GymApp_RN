import React from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
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
      autoplay={true}
      renderItem={({ item, index }) => <ItemCard item={item} index={index} />}
      sliderWidth={wp(100)}
      itemWidth={wp(100) - 70}
      autoplayInterval={4000}
      firstItem={1}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}

const ItemCard = ({ item, index }) => {
  return (
    <View
      style={{
        width: wp(100) - 70,
        height: hp(25),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={item}
        style={{
          width: wp(100) - 70,
          height: hp(25),
          borderRadius: 30,
          resizeMode: "contain",
        }}
      />
    </View>
  );
};
