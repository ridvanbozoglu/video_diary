// screens/VideoSelectionScreen.tsx
import React from "react";
import { View, Button, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import useVideoStore from "@/store/videoStore";

export default function VideoSelectionScreen() {
  const router = useRouter();
  const { updateVideo } = useVideoStore();

  const onVideoSelected = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["videos"],
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      updateVideo({ uri: result.assets[0].uri });
      router.push({
        pathname: "/modal2",
      });
    }
  };

  return (
    <View>
      <Button title="Videoyu Seç" onPress={onVideoSelected} />
    </View>
  );
}
