import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Quán Nước",
    image_url:
    "https://accgroup.vn/wp-content/uploads/2021/09/giay-chung-nhan-kinh-doanh-rooftop.jpg",
    categories: ["Cafe", "Bar"],
    price: "VND",
    reviews: 800,
    rating: 4.5,
  },
  {
    name: "Nhà Hàng",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwDN1eVn1hLqePZDLLLkmAiwocUAbrWN5mQ&usqp=CAU",
    categories: ["Cafe", "Bar"],
    price: "VND",
    reviews: 1280,
    rating: 4.0,
  },
  {
    name: "Ẩm Thực Việt Nam",
    image_url:
      "https://rentapartment.vn/wp-content/uploads/2020/03/shri-restaurant.jpg",
    categories: ["Việt Nam", "Bar"],
    price: "VND",
    reviews: 2048,
    rating: 4.8,
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#00FF00" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
