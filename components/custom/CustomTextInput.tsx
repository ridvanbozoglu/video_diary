import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface CustomTextInputProps extends TextInputProps {
  placeholder?: string;
  className?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder = "Video description",
  className,
  value,
  onChangeText,
  onBlur,
  ...props
}) => {
  return (
    <TextInput
      className={`h-12 border border-gray-300 rounded-lg mb-5 px-3 text-lg bg-white ${className}`}
      placeholder={placeholder}
      placeholderTextColor="#999"
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      {...props}
    />
  );
};

export default CustomTextInput;

//h-12 border border-gray-300 rounded-lg mb-5 px-3 text-lg bg-white
