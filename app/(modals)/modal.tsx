import { Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Expo Router'ı ekleyin

import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
  const router = useRouter();

  const handlePress = () => {
    router.push("/modal2");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get video</Text>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Go to Modal 2</Text>
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
