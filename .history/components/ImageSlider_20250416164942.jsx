import React from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { sliderImages } from "../constants"; // Doğru import yolu
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
  const width = wp(100); // Ekran genişliği
  const itemWidth = wp(80); // Her bir item'ın genişliği (görünür olan kısmın genişliği)

  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
      }}
    >
      <Carousel
        width={width} // Tam genişlik
        height={hp(25)} // Yükseklik
        data={sliderImages}
        renderItem={({ item }) => (
          <View
            style={{
              width: itemWidth, // Item'ların genişliği
              height: hp(25),
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              marginHorizontal: wp(5), // Kısımların görünmesini sağlamak için
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
        )}
        loop
        autoPlay={true}
        autoPlayInterval={4000}
        defaultIndex={1}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        style={{
          overflow: "visible", // Görüntülerin dışarı taşmasına izin verir
        }}
      />
    </View>
  );
}
