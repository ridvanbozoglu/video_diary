import React from "react";
import { View, StyleSheet } from "react-native";

const Rail = () => {
  return <View style={styles.rail} />;
};

const styles = StyleSheet.create({
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#CCC",
  },
});

export default Rail;
