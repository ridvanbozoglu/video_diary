import { useState, useCallback, useEffect } from "react";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View, Button, Text, Dimensions } from "react-native";
import RangeSlider from "rn-range-slider";
import Thumb from "./rangePickerComponents/Thumb";
import Rail from "./rangePickerComponents/Rail";
import RailSelected from "./rangePickerComponents/RailSelected";
import Notch from "./rangePickerComponents/Notch";
import { formatTime } from "@/utils/conversions";
import useVideoStore from "@/store/videoStore";

const { width } = Dimensions.get("window");

const VideoCropper = () => {
  const [duration, setDuration] = useState(0);

  const { updateVideo } = useVideoStore();
  const uri = useVideoStore((state) => state.video.uri);
  const start = useVideoStore((state) => state.video.start);
  const end = useVideoStore((state) => state.video.end);

  const player = useVideoPlayer(uri, async (player) => {
    player.loop = true;
    player.timeUpdateEventInterval = 1000;
    try {
      await player.play();
      console.log("Video oynatıldı!");
    } catch (error) {
      console.error("Video başlatılamadı:", error);
    }
  });

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(
    (value: number) => <Text>{formatTime(value)}</Text>,
    []
  );
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback(
    (low: number, high: number) => {
      const duration = Math.round(player.duration) || 0;

      if (low > duration - 5) {
        updateVideo({ start: Math.max(duration - 5, 0), end: duration });
      } else {
        updateVideo({ start: low, end: Math.min(low + 5, duration) });
      }
      player.currentTime = low;
    },
    [player.duration, updateVideo]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (player.currentTime >= end) {
        player.currentTime = start;
      }
      console.log("içeride");
    }, 1000);
    return () => clearInterval(interval);
  }, [start, end, player.currentTime]);

  useEffect(() => {
    setDuration(Math.round(player.duration));
  }, [player.duration]);

  return (
    <View style={styles.contentContainer}>
      <View>
        <VideoView
          style={styles.video}
          player={player}
          nativeControls={false}
          allowsFullscreen
          allowsPictureInPicture
        />
      </View>
      <View
        style={{
          width: width * 0.9,
          height: 40,
          alignSelf: "center",
          marginVertical: 30,
        }}
      >
        <RangeSlider
          min={0}
          max={duration}
          step={1}
          low={start}
          high={end}
          onValueChanged={handleValueChange}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
        />
      </View>
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

export default VideoCropper;
