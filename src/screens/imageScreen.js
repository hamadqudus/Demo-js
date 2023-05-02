import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetail from "./Components/ImageDetail";

const imageScreen = () => {
  return (
    <View>
      <ImageDetail
        imagetitle="This is Forest "
        imageSource={require("../../assets/forest.jpg")}
        Score={9}
      />

      <ImageDetail
        imagetitle="This is Beech "
        imageSource={require("../../assets/beach.jpg")}
        Score={8}
      />

      <ImageDetail
        imagetitle="This is Mountain "
        imageSource={require("../../assets/mountain.jpg")}
        Score={9}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default imageScreen;
