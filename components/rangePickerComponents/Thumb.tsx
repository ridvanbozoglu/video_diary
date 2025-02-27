import React from "react";
import { View, StyleSheet } from "react-native";

const Thumb = () => {
  return <View style={styles.thumb} />;
};

const styles = StyleSheet.create({
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#007AFF",
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default Thumb;
