import React from "react";
import { View, StyleSheet } from "react-native";

const RailSelected = () => {
  return <View style={styles.railSelected} />;
};

const styles = StyleSheet.create({
  railSelected: {
    height: 4,
    borderRadius: 2,
    backgroundColor: "#007AFF",
  },
});

export default RailSelected;
