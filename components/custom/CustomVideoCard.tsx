import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import VideoPlayer from "./VideoPlayer";
import { useLocalVideoStore } from "@/store/asyncVideoStore";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface CustomVideoCardProps {
  uri: string;
  name: string;
  description: string;
  onClick?: () => void;
}

const CustomVideoCard: React.FC<CustomVideoCardProps> = ({
  uri,
  name,
  description,
  onClick,
}) => {
  const { deleteVideoByDescription } = useLocalVideoStore();
  const deleteCurrent = () => {
    deleteVideoByDescription(description);
  };

  return (
    <View className="bg-white rounded-2xl p-4 shadow-lg shadow-gray-400 w-full flex items-center justify-center">
      <View className="w-full flex-row justify-between items-center ">
        <TouchableOpacity onPress={onClick}>
          <Text className="text-left text-3xl text-bold text-blue-600 my-1">
            {name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteCurrent}>
          <FontAwesome name="close" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <VideoPlayer source={uri} controls />

      <View className="self-start">
        <TouchableOpacity onPress={onClick}>
          <Text className="text-lg text-left text-gray-700">{description}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomVideoCard;
