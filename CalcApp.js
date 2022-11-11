import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import NumberComp from "./components/NumberComp";

let fCol = ["1", "4", "7", "."];
let sCol = ["2", "5", "8", "0"];
let tCol = ["3", "6", "9", "="];
let lCol = ["C", "/", "*", "-", "+"];

let fLCol = ["1", "4", "7", "."];
let sLCol = ["2", "5", "8", "0"];
let tLCol = ["3", "6", "9", "="];
let nLCol = ["Sqrt", "Pow", "Sin", "Cos"];
let lLCol = ["Del", "C", "/", "*", "-", "+"];
// "*", "-", "+"
const CalcApp = () => {
  const [inputedNums, setInputedNums] = useState([]);
  const [result, setResult] = useState();
  const [orientation, setOrientation] = useState(true);

  const isPortrait = () => {
    let dim = Dimensions.get("screen");
    console.log("robie i zwaracam " + dim);
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener("change", () => {
    setOrientation(isPortrait());
  });

  const makeCalculation = () => {
    console.log("licze");
    console.log(inputedNums.join(""));
    console.log(eval(inputedNums.join("")));
    setResult(eval(inputedNums.join("")));
  };
  const clearCalculation = () => {
    setInputedNums([]);
    setResult();
  };
  const removeLast = () => {
    setInputedNums(inputedNums.slice(0, -1));
    if (inputedNums.length <= 1) {
      setResult();
    }
  };
  const powIt = () => {
    setResult(Math.pow(eval(inputedNums.join("")), 2));
  };
  const sqrtIt = () => {
    setResult(Math.sqrt(eval(inputedNums.join("")), 2));
  };
  const sinIt = () => {
    setResult(Math.sin(eval(inputedNums.join("")), 2));
  };
  const cosIt = () => {
    setResult(Math.cos(eval(inputedNums.join("")), 2));
  };
  const checkIfSignIsDoubled = (numb) => {
    if (numb == "+" || numb == "-" || numb == "/" || numb == "*") {
      let lastChar = inputedNums[inputedNums.length - 1];
      if (
        lastChar == "+" ||
        lastChar == "-" ||
        lastChar == "/" ||
        lastChar == "*"
      ) {
        return false;
      }
    }
    return true;
  };

  const updateCalcsBoard = (numb) => {
    console.log("dodaje numa");
    if (
      numb != "C" &&
      numb != "=" &&
      numb != "Del" &&
      numb != "Sqrt" &&
      numb != "Pow" &&
      numb != "Sin" &&
      numb != "Cos"
    ) {
      // console.log("test");

      if (checkIfSignIsDoubled(numb)) {
        setInputedNums([...inputedNums, numb]);
      } else setInputedNums([...inputedNums.slice(0, -1), numb]);
    } else if (numb == "=") {
      makeCalculation();
    } else if (numb == "C") {
      removeLast();
    } else if (numb == "Del") {
      clearCalculation();
    } else if (numb == "Pow") {
      powIt();
    } else if (numb == "Sqrt") {
      sqrtIt();
    } else if (numb == "Sin") {
      sinIt();
    } else if (numb == "Cos") {
      cosIt();
    }
  };

  return orientation ? (
    <View style={styles.container}>
      <View style={styles.mathBoard}>
        {/* <Text> dsd</Text> */}
        <View style={styles.calculationsBoard}>
          <Text style={styles.calcsBoardInput}> {inputedNums}</Text>
        </View>
        <View style={styles.resultBoard}>
          <Text style={styles.calcsBoardInput}> {result}</Text>
        </View>
      </View>
      <View style={styles.btnsBoard}>
        <View style={styles.btnsColumnContainer}>
          {/* <Text>T</Text> */}
          {fCol.map((item) => {
            return (
              <NumberComp
                text={item}
                updateCalcsBoard={updateCalcsBoard}
                orientation={orientation}
              />
            );
          })}
        </View>
        <View style={styles.btnsColumnContainer}>
          {/* <Text>T</Text> */}

          {sCol.map((item) => {
            return (
              <NumberComp
                text={item}
                updateCalcsBoard={updateCalcsBoard}
                orientation={orientation}
              />
            );
          })}
        </View>
        <View style={styles.btnsColumnContainer}>
          {/* <Text>T</Text> */}
          {tCol.map((item) => {
            return (
              <NumberComp
                text={item}
                updateCalcsBoard={updateCalcsBoard}
                orientation={orientation}
              />
            );
          })}
        </View>
        <View style={styles.specialBtnsColumnContainer}>
          {/* <Text>T</Text> */}
          {lCol.map((item) => {
            return (
              <NumberComp
                text={item}
                updateCalcsBoard={updateCalcsBoard}
                orientation={orientation}
              />
            );
          })}
        </View>
      </View>
    </View>
  ) : (
    <View style={lStyles.container}>
      <View style={lStyles.mathBoard}>
        <View style={styles.calculationsBoard}>
          <Text style={styles.calcsBoardInput}> {inputedNums}</Text>
        </View>
        <View style={styles.resultBoard}>
          <Text style={styles.calcsBoardInput}> {result}</Text>
        </View>
      </View>
      <View style={lStyles.btnsBoard}>
        <View style={lStyles.btnsColumnContainer}>
          {fLCol.map((item) => {
            return (
              <NumberComp
                text={item}
                updateCalcsBoard={updateCalcsBoard}
                orientation={orientation}
              />
            );
          })}
        </View>
        <View style={lStyles.btnsColumnContainer}>
          {sLCol.map((item) => {
            return (
              <NumberComp
                text={item}
                updateCalcsBoard={updateCalcsBoard}
                orientation={orientation}
              />
            );
          })}
        </View>
        <View style={lStyles.btnsColumnContainer}>
          {tLCol.map((item) => {
            return (
              <NumberComp
                text={item}
                updateCalcsBoard={updateCalcsBoard}
                orientation={orientation}
              />
            );
          })}
        </View>
        <View style={lStyles.newBtnsColumnContainer}>
          {nLCol.map((item) => {
            return (
              <NumberComp
                text={item}
                updateCalcsBoard={updateCalcsBoard}
                orientation={orientation}
              />
            );
          })}
        </View>
        <View style={lStyles.specialBtnsColumnContainer}>
          {lLCol.map((item) => {
            return (
              <NumberComp
                text={item}
                updateCalcsBoard={updateCalcsBoard}
                orientation={orientation}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const lStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff00",
  },
  mathBoard: {
    flex: 4,
    flexDirection: "column",
    backgroundColor: "#00fff0",
  },
  btnsBoard: {
    flex: 7,
    flexDirection: "row",
    backgroundColor: "#666",
  },
  btnsColumnContainer: {
    flex: 1,
  },
  newBtnsColumnContainer: {
    flex: 1,
    backgroundColor: "#bbb",
  },

  specialBtnsColumnContainer: {
    flex: 1,
    // padding: 30,
    // paddingTop: 25,
    backgroundColor: "#282b36",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff00",
  },
  btnsColumnContainer: {
    flex: 1,
    // padding: 30,
    // paddingTop: 35,
    // justifyContent: "center",
    // alignItems: "center",
  },
  specialBtnsColumnContainer: {
    flex: 1,
    // padding: 30,
    // paddingTop: 25,
    backgroundColor: "#bbb",
    // justifyContent: "center",
    // alignItems: "center",
  },
  mathBoard: {
    flex: 1,
    flexDirection: "column",
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
  calculationsBoard: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  calcsBoardInput: {
    fontSize: 48,
  },
  resultBoard: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 10,
  },
});

export default CalcApp;
