import React from "react";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image, View } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
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

const ItemCard = ({ item, index, parallaxProps }) => {
  return (
    <View
      style={{
        width: wp(100) - 70,
        height: hp(25),
      }}
    >
      <ParallaxImage
        source={{ uri: item }} // Assuming 'item' is a URL or local image path
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain", flex: 1 }}
        parallaxFactor={0.4} // Adjust this for the strength of the parallax effect
        {...parallaxProps} // Pass parallaxProps here
      />
    </View>
  );
};
