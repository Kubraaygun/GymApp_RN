import React from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
  const width = wp(100);
  const itemWidth = wp(100) - 70; // Görselin genişliği
  const radius = 30; // Kenar yuvarlatma değeri

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Carousel
        width={width}
        height={hp(25)}
        data={sliderImages}
        renderItem={({ item }) => (
          <View
            style={{
              width: itemWidth,
              height: hp(25),
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 35,
              borderRadius: radius, // Görselin köşeleri yuvarlatılacak
              backgroundColor: "#fff", // Arka plan beyaz
              shadowColor: "#000", // Gölge rengi
              shadowOffset: { width: 0, height: 5 }, // Gölgenin ofseti
              shadowOpacity: 0.25, // Gölgenin şeffaflık değeri
              shadowRadius: 10, // Gölge yayılma mesafesi
              elevation: 8, // Android için gölge
              overflow: "hidden", // Resmin dışarı taşmasını engellemek için
            }}
          >
            <Image
              source={item}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: radius, // Resme de kenar yuvarlatma uygulanır
                resizeMode: "cover", // Resmin tamamen alanı kaplaması sağlanır
              }}
            />
          </View>
        )}
        loop
        autoPlay
