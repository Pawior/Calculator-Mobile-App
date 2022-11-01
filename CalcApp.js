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
  const updateCalcsBoard = (numb) => {
    console.log("dodaje numa");
    if (numb != "C" && numb != "=") {
      // console.log("test");
      setInputedNums([...inputedNums, numb]);
    } else if (numb == "=") {
      makeCalculation();
    } else if (numb == "C") {
      clearCalculation();
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
              <NumberComp text={item} updateCalcsBoard={updateCalcsBoard} />
            );
          })}
        </View>
        <View style={styles.btnsColumnContainer}>
          {/* <Text>T</Text> */}

          {sCol.map((item) => {
            return (
              <NumberComp text={item} updateCalcsBoard={updateCalcsBoard} />
            );
          })}
        </View>
        <View style={styles.btnsColumnContainer}>
          {/* <Text>T</Text> */}
          {tCol.map((item) => {
            return (
              <NumberComp text={item} updateCalcsBoard={updateCalcsBoard} />
            );
          })}
        </View>
        <View style={styles.specialBtnsColumnContainer}>
          {/* <Text>T</Text> */}
          {lCol.map((item) => {
            return (
              <NumberComp text={item} updateCalcsBoard={updateCalcsBoard} />
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
          {fCol.map((item) => {
            return (
              <NumberComp text={item} updateCalcsBoard={updateCalcsBoard} />
            );
          })}
        </View>
      </View>
    </View>
  );

  // if (orientation) {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.mathBoard}>
  //         {/* <Text> dsd</Text> */}
  //         <View style={styles.calculationsBoard}>
  //           <Text style={styles.calcsBoardInput}> {inputedNums}</Text>
  //         </View>
  //         <View style={styles.resultBoard}>
  //           <Text style={styles.calcsBoardInput}> {result}</Text>
  //         </View>
  //       </View>
  //       <View style={styles.btnsBoard}>
  //         <View style={styles.btnsColumnContainer}>
  //           {/* <Text>T</Text> */}
  //           {fCol.map((item) => {
  //             return (
  //               <NumberComp text={item} updateCalcsBoard={updateCalcsBoard} />
  //             );
  //           })}
  //         </View>
  //         <View style={styles.btnsColumnContainer}>
  //           {/* <Text>T</Text> */}

  //           {sCol.map((item) => {
  //             return (
  //               <NumberComp text={item} updateCalcsBoard={updateCalcsBoard} />
  //             );
  //           })}
  //         </View>
  //         <View style={styles.btnsColumnContainer}>
  //           {/* <Text>T</Text> */}
  //           {tCol.map((item) => {
  //             return (
  //               <NumberComp text={item} updateCalcsBoard={updateCalcsBoard} />
  //             );
  //           })}
  //         </View>
  //         <View style={styles.specialBtnsColumnContainer}>
  //           {/* <Text>T</Text> */}
  //           {lCol.map((item) => {
  //             return (
  //               <NumberComp text={item} updateCalcsBoard={updateCalcsBoard} />
  //             );
  //           })}
  //         </View>
  //       </View>
  //     </View>
  //   );
  // } else {
  //   return (
  //     <View style={lStyles.container}>
  //       <View style={lStyles.mathBoard}>
  //         <View style={styles.calculationsBoard}>
  //           <Text style={styles.calcsBoardInput}> {inputedNums}</Text>
  //         </View>
  //         <View style={styles.resultBoard}>
  //           <Text style={styles.calcsBoardInput}> {result}</Text>
  //         </View>
  //       </View>
  //       <View style={lStyles.btnsBoard}>
  //         <View style={styles.btnsColumnContainer}>
  //           <Text>T</Text>
  //           {fCol.map((item) => {
  //             return (
  //               <NumberComp text={item} updateCalcsBoard={updateCalcsBoard} />
  //             );
  //           })}
  //         </View>
  //       </View>
  //     </View>
  //   );
  // }
};

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
});

export default CalcApp;
