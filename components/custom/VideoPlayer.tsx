import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { View, Text, Dimensions } from "react-native";
import CustomButton from "./CustomButton";
import { BackgroundColor } from "../../node_modules/@isaacs/cliui/node_modules/ansi-styles/index.d";

interface VideoPlayerProps {
  source: string;
  loop?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
}

const { width } = Dimensions.get("window");

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  source,
  loop = true,
  autoPlay = false,
  controls = false,
}) => {
  const player = useVideoPlayer(source, async (player) => {
    player.loop = loop;

    try {
      if (autoPlay) {
        await player.play();
      }
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
    <View className="flex-1  items-center justify-center">
      <VideoView
        style={{
          width: width - 40,
          height: 200,
        }}
        contentFit="contain"
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        nativeControls={false}
      />

      {controls && (
        <View className="p-2">
          <CustomButton
            title={isPlaying ? "Pause" : "Play"}
            style="mt-0"
            onPress={() => {
              if (isPlaying) {
                player.pause();
              } else {
                player.play();
              }
            }}
          />
        </View>
      )}
    </View>
  );
};

export default VideoPlayer;
