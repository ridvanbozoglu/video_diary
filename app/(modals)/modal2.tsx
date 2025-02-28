import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Text, View } from "@/components/Themed";
import VideoCropper from "@/components/custom/VideoCropper";
import { useState } from "react";
import CustomButton from "@/components/custom/CustomButton";
import useVideoStore from "@/store/videoStore";

export default function ModalScreen() {
  const router = useRouter();
  const [isCropperVisible, setIsCropperVisible] = useState(true);
  const uri = useVideoStore((state) => state.video.uri);

  const navigateToNextScreen = () => {
    router.push("/modal3");
    setIsCropperVisible(false);
  };

  return (
    <View className="flex-1 pb-3 items-center justify-between py-4">
      <Text className="text-2xl font-bold">Crop the Video</Text>
      {isCropperVisible && <VideoCropper />}

      <CustomButton
        title="Videoyu kırp"
        onPress={navigateToNextScreen}
        style="self-auto py-3 px-4 mb-"
      />
    </View>
  );
}
