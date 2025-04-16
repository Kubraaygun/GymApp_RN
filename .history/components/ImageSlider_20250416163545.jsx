import React from "react";
import { Image, View } from "react-native";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
  return (
    <View
      style={{
        alignItems: "center", // Yatay olarak ortalama
      }}
    >
      <Carousel
        data={sliderImages}
        loop={true}
        autoplay={true}
        renderItem={({ item, index }) => <ItemCard item={item} index={index} />}
        sliderWidth={wp(100)}
        itemWidth={wp(100) - 70}
        width={wp(100)}
        autoplayInterval={4000}
        firstItem={1}
        slideStyle={{
          display: "flex",
          alignItems: "center",
        }}
      />
    </View>
  );
}

const ItemCard = ({ item, index }) => {
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        width={30}
        data={sliderImages}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
};
