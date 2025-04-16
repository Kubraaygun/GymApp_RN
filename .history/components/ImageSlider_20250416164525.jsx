import React, { useRef } from "react";
import { Image, View, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = React.useState(1);

  const width = wp(100);
  const itemWidth = wp(100) - 70;

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: itemWidth,
          height: hp(25),
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
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

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Carousel
        ref={carouselRef}
        data={sliderImages}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={itemWidth}
        loop={true}
        autoplay={true}
        autoplayInterval={4000}
        firstItem={1}
        onSnapToItem={(index) => setActiveSlide(index)}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.8}
        enableMomentum={false}
        activeSlideAlignment="center"
      />

      {/* İsteğe bağlı: Pagination göstergesi eklemek için */}
      <Pagination
        dotsLength={sliderImages.length}
        activeDotIndex={activeSlide}
        containerStyle={{ paddingVertical: 10 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
        inactiveDotStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
}
