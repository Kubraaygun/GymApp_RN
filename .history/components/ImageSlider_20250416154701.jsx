import React from "react";
import Carousel, { ParallaxImage } from "react-native-reanimated-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text, View } from "react-native";
export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoPlay={true}
      width={wp(100)}
    

      // Şöyle olmalı:
      renderItem={({ item, index }) => (
        <ItemCard item={item} index={index} parallaxProps={...} />
      )}
      
      
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoPlayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}

// ItemCard bileşenini güncelleyin
const ItemCard = ({ item, index, parallaxProps }) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item} // Eğer item zaten require edilmiş bir resimse
        // Eğer URL ise: source={{uri: item}}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "cover" }} // "contain" yerine "cover" deneyin
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};
