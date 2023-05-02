import React from "react";
import { Text, StyleSheet, View } from "react-native";

const name = "Hammad";
const componentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}> Getting started with react native! </Text>
      <Text style={styles.subStyle}> My name is {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
  },
  subStyle: {
    fontSize: 20,
  },
});

export default componentScreen;
