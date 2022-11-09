import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Spaghetti",
    description: "Với xà lách bơ, cà chua và sốt thịt bò hầm",
    price: "220.000VND",
    image:
      "https://cdn.daynauan.info.vn/wp-content/uploads/2018/03/hinh-mi-y-xot-bo-bam.jpg",
  },
  {
    title: "Gà Gán",
    description:
      "Cánh gà vàng ươm sau khi chiên xong, lớp da bên ngoài giòn rụm, nhưng phần thịt bên trong vẫn mềm và ngọt",
    price: "40.000VND",
    image: "https://cdn.tgdd.vn/Files/2019/05/31/1170182/cach-lam-ga-chien-bot-gion-tan-voi-bot-chien-gion-aji-quick-202107171416301335.jpg",
  },
  {
    title: "Pizza",
    description:
      "Hương vị bánh hấp dẫn, đa dạng để người ăn có thể chọn theo sở thích chính là điểm cộng cho Pizza.",
    price: "180.000VND",
    image:
      "https://cdn.daylambanh.edu.vn/wp-content/uploads/2020/05/cach-lam-pizza.jpg",
  },
  {
    title: "Salad trộn",
    description:
      "Hỗn hợp các loại rau quả mát chua ngọt sẽ giúp bữa ăn chóng ngán, dễ tiêu.",
    price: "30.000VND",
    image:
      "https://i-giadinh.vnecdn.net/2021/10/13/saladtron-1634096027-8296-1634096305.jpg",
  },
  {
    title: "Hamburger",
    description: "Bánh mì Hamburger nổi tiếng là món ăn nhanh, tiện lợi, phù hợp với mọi lứa tuổi và được nhiều người ưa chuộng.Vừa thơm ngon lại bổ dưỡng, loại bánh này rất thích hợp dùng vào bữa sáng để cung cấp năng lượng cho cơ thể.",
    price: "$40.000VND",
    image:
      "https://cdn.daylambanh.edu.vn/wp-content/uploads/2020/10/cong-thuc-lam-hamburger.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
