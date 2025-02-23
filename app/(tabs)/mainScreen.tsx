import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import VideoPlayer from "../../components/VideoPlayer";

export default function mainScreen() {
  return (
    <View style={styles.container}>
      <VideoPlayer source="/Users/ridvan/video_diary/assets/images/video.mp4" />
      <VideoPlayer source="/Users/ridvan/video_diary/assets/images/video.mp4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
