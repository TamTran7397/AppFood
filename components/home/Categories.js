import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Thức Ăn",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Nước Ngọt",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bánh",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Thức Ăn Nhanh",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Ưu Đãi",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Cà Phê & Trà",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Tráng Miệng",
  },
];

export default function Categories() {
    return (
      <View
        style={{
          marginTop: 5,
          backgroundColor: "#00FF00",
          paddingVertical: 10,
          paddingLeft: 20,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }