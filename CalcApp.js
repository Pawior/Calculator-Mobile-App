import { View, Text, StyleSheet } from "react-native";
import React from "react";
import NumberComp from "./components/NumberComp";

let fCol = ["1", "4", "7", "."];
let sCol = ["2", "5", "8", "0"];
let tCol = ["3", "6", "9", "="];
let lCol = ["C", "/", "*", "-", "+"];

const CalcApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mathBoard}></View>
      <View style={styles.btnsBoard}>
        <View style={styles.rowContainer}>
          {/* <Text>T</Text> */}
          {fCol.map((item) => {
            return <NumberComp style={styles.rowContainer} text={item} />;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff00",
  },
  rowContainer: {
    flex: 1,
  },
  mathBoard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#00fff0",
  },
  btnsBoard: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "#666",
  },
  reversedContainer: {
    flex: 1,
    flexDirection: "column-reverse",
  },
});

export default CalcApp;
