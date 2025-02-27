import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View, Button, Text } from "react-native";

interface VideoPlayerProps {
  source: string;
  loop?: boolean;
  autoPlay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  source,
  loop = true,
  autoPlay = true,
}) => {
  const player = useVideoPlayer(source, async (player) => {
    player.loop = true;

    try {
      await player.play();
      console.log("Video oynatıldı!");
    } catch (error) {
      console.error("Video başlatılamadı:", error);
    }
  });

  const { isPlaying }: { isPlaying: boolean } = useEvent(
    player,
    "playingChange",
    {
      isPlaying: player.playing,
    }
  );

  return (
    <View style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => (isPlaying ? player.pause() : player.play())}
        />
      </View>
      <Text>{Math.round(player.currentTime)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});

export default VideoPlayer;
