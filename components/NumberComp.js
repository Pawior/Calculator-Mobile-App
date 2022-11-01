import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const NumberComp = ({ text, updateCalcsBoard }) => {
  const [orientation, setOrientation] = useState(true);

  const isPortrait = () => {
    let dim = Dimensions.get("screen");
    console.log("robie i zwaracam " + dim);
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener("change", () => {
    setOrientation(isPortrait());
  });

  const handleClick = () => {
    updateCalcsBoard(text);

    // if (text != "C" && text != "=") {
    //   // console.log("test");
    //   updateCalcsBoard(text);
    // }
    // else if( text == "="){
    //   eval
    // }
  };
  return orientation ? (
    <TouchableOpacity onPress={handleClick} style={styles.touchStyle}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={handleClick} style={styles.touchStyle}>
      <View style={lStyles.buttonContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingTop: 30,
  },
  text: {
    fontSize: 42,
    color: "#eee",
  },
  touchStyle: {
    flex: 1,
  },
});

const lStyles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    // padding: 20,
    // paddingTop: 30,
  },
  text: {
    fontSize: 42,
    color: "#eee",
  },
  touchStyle: {
    flex: 1,
  },
});

export default NumberComp;
