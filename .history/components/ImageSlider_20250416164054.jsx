import React from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import sliderImages from "../constants/index";

const ItemCard = ({ item }) => {
  return (
    <View
      style={{
        width: wp(100) - 70,
        height: hp(25),
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Border radius'ın düzgün görünmesini sağlar
      }}
    >
      <Image
        source={item}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 30,
          resizeMode: "cover",
        }}
      />
    </View>
  );
};

export default function ImageSlider() {
  const itemWidth = wp(100) - 70;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Carousel
        loop
        autoPlay
        autoPlayInterval={4000}
        data={sliderImages}
        renderItem={({ item, index }) => <ItemCard item={item} index={index} />}
        width={wp(100)}
        height={hp(25)}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
        style={{
          width: width,
          height: hp(25),
        }}
      />
    </View>
  );
}
