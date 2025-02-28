import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import CustomVideoCard from "@/components/custom/CustomVideoCard";
import { useLocalVideoStore } from "@/store/asyncVideoStore";
import CustomButton from "@/components/custom/CustomButton";

const { width } = Dimensions.get("window");

export default function Home() {
  const router = useRouter();
  const { videos, deleteAll } = useLocalVideoStore();

  const add = () => {
    router.push("../(modals)/videoSelectionScreen");
  };

  return (
    <View className="flex-1 flex items-center">
      <Text className="text-lg font-bold py-2">Ana Sayfa</Text>
      {videos.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="self-start px-4 py-2">Video bulunmuyor!!</Text>
          <CustomButton title="Video Ekle" onPress={add} />
        </View>
      ) : (
        <FlatList
          data={videos}
          contentContainerStyle={{
            width: width,
            paddingVertical: 10,
            justifyContent: "center",
            gap: 20,
            paddingHorizontal: 8,
          }}
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => (
            <CustomVideoCard
              uri={item.uri}
              name={item.name}
              description={item.description}
              onClick={() => {
                const queryParams = new URLSearchParams({
                  uri: item.uri,
                  name: item.name,
                  description: item.description,
                }).toString();

                router.push(`../${item.description}?${queryParams}`);
              }}
            />
          )}
        />
      )}
      <CustomButton title="Videoları sil" onPress={deleteAll} />
    </View>
  );
}
