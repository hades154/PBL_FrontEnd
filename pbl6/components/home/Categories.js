import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/images/catagories/54516.jpg"),
    text: "Sneakers",
  },
  {
    image: require("../../assets/images/catagories/56410.jpg"),
    text: "Tông lào",
  },
  {
    image: require("../../assets/images/catagories/54521.jpg"),
    text: "Giày da",
  },
  {
    image: require("../../assets/images/catagories/54542.jpg"),
    text: "Cao gót",
  },
  {
    image: require("../../assets/images/catagories/54516.jpg"),
    text: "Ủng",
  },
  {
    image: require("../../assets/images/catagories/54516.jpg"),
    text: "Giày độn",
  },
  {
    image: require("../../assets/images/catagories/54516.jpg"),
    text: "Quần què",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: " #ffb3ff",
        borderRadius:15,
        paddingVertical: 10,
        paddingLeft: 15,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 75,
                borderColor: '#C6C6C6',
                borderWidth:1,
                borderWidth: 0,
                borderRadius:8,
                height: 75,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900",color:'#005c99' }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}