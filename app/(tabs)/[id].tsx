import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import VideoPlayer from "@/components/custom/VideoPlayer";

export default function DetailScreen() {
  const { uri, name, description } = useLocalSearchParams() as {
    uri: string;
    name: string;
    description: string;
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4 ">
        <Text className="text-3xl font-extrabold text-blue-600 mb-4">
          {name}
        </Text>
        <VideoPlayer source={uri} autoPlay />
        <Text className="text-lg text-gray-600 mt-12">{description}</Text>
      </View>
    </ScrollView>
  );
}
