import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useLocalVideoStore } from "@/store/asyncVideoStore";

export default function index() {
  const { videos, deleteAll } = useLocalVideoStore();
  console.log(videos);

  return (
    <View>
      <Text>All videos</Text>
      {videos.map((video) => (
        <View key={video.name}>
          <Text>{video.name}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={deleteAll}>
        <Text style={styles.buttonText}>Delete All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007aff",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
