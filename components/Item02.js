import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Item = (props) => {

  const onPress = () => {
    alert("item " + props.color)
  }
  return (
    <View
      style={[
        styles(props.height, props.color).bgColor,
        styles().container,
        { flex: 1 },
      ]}
    >
      <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          styles(props.height, props.color).text,
          styles(props.height, props.color).bgColor,
        ]}
      >i{props.text}</Text>
      </TouchableOpacity>
 
      
    </View>
  );
};
const styles = (height, color) => {
  console.log(height);
  return StyleSheet.create({
    text: { fontSize: height },
    bgColor: { backgroundColor: color },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
};

export default Item;


// import { Text, View } from 'react-native'
// import React, { Component } from 'react'

// export class Item02 extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Item02</Text>
//       </View>
//     )
//   }
// }

// export default Item02