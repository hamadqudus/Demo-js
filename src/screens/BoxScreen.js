import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Text # 1</Text>
      <Text style={styles.textTwoStyle}>Text # 2</Text>
      <Text style={styles.textThreeStyle}>Text # 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: "black",
    // alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "flex-start",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 5,
    borderColor: "yellow",
    top: 20,
    bottom: 0,
    left: 0,
    right: 0,
    //position: "absolute",
    alignSelf: "flex-start",
    //...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "pink",
  },
});

export default BoxScreen;
