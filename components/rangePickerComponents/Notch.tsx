import React from "react";
import { View, StyleSheet } from "react-native";

const Notch = () => {
  return <View style={styles.notch} />;
};

const styles = StyleSheet.create({
  notch: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#007AFF",
    borderWidth: 2,
    borderColor: "white",
  },
});

export default Notch;
