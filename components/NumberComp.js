import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NumberComp = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1
    },
 text: {
    fontSize: 40,
    color: "#eee"
 }
  });


export default NumberComp