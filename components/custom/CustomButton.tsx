import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useColorScheme } from "@/components/useColorScheme";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  backgroundColor?: string;
  textColor?: string;
  width?: string | number;
  style?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  backgroundColor,
  textColor,
  style,
}) => {
  const colorScheme = useColorScheme();

  const bgColorClass = backgroundColor
    ? backgroundColor
    : colorScheme === "dark"
    ? "bg-green-800"
    : "bg-green-600";

  const textColorClass = textColor
    ? textColor
    : colorScheme === "dark"
    ? "text-black"
    : "text-white";

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-lg py-3 px-4 mt-4 ${bgColorClass} ${style}`}
      activeOpacity={0.7}
    >
      <Text className={`text-lg font-bold text-center ${textColorClass}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
