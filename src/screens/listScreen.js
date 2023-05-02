import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend 1", age: "1" },
    { name: "friend 2", age: "2" },
    { name: "friend 3", age: "3" },
    { name: "friend 4", age: "4" },
    { name: "friend 5", age: "5" },
    { name: "friend 6", age: "6" },
    { name: "friend 7", age: "7" },
    { name: "friend 8", age: "8" },
    { name: "friend 9", age: "9" },
    { name: "friend 10", age: "10" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - age is - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default ListScreen;
