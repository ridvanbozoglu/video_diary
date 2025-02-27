import { Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Text, View } from "@/components/Themed";
import VideoCropper from "@/components/VideoCropper";
import { useState } from "react";

export default function ModalScreen() {
  const router = useRouter();
  const [isCropperVisible, setIsCropperVisible] = useState(true);

  const navigateToNextScreen = () => {
    router.push("/modal3");
    setIsCropperVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crop the Video</Text>
      {isCropperVisible && <VideoCropper />}
      <Pressable onPress={navigateToNextScreen} style={styles.button}>
        <Text style={styles.buttonText}>Crop</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
