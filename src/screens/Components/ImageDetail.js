import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ imageSource, imagetitle, Score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text> {imagetitle}</Text>
      <Text>Image Score is {Score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
