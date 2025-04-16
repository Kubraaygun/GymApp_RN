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
  const itemWidth = wp(100) - 70; // Görsel genişliği
  const radius = 30;

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
              marginHorizontal: 35,
              borderRadius: radius, // Görselin köşelerini yuvarlamak
              backgroundColor: "#fff", // Arka planı beyaz yap
              shadowColor: "#000", // Gölge rengi
              shadowOffset: { width: 0, height: 5 }, // Gölgenin ofseti
              shadowOpacity: 0.25, // Gölgenin saydamlığı
              shadowRadius: 10, // Gölgenin yayılma mesafesi
              elevation: 8, // Android için gölge
              overflow: "hidden", // Kıvrılmış köşeleri dışa taşırma
            }}
          >
            <Image
              source={item}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: radius, // Resme de borderRadius ver
                resizeMode: "cover", // Resmin orantılı olarak sığmasını sağlar
              }}
            />
          </View>
        )}
        loop
        autoPlay
        autoPlayInterval={3000}
        defaultIndex={1}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
      />
    </View>
  );
}
