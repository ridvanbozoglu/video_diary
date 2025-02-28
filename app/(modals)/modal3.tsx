import React from "react";
import { View, TextInput, Text, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useVideoStore from "@/store/videoStore";
import { useRouter } from "expo-router";
import { useLocalVideoStore } from "@/store/asyncVideoStore";
import { usePostPost } from "@/hooks/useImageProcess";
import CustomButton from "@/components/custom/CustomButton";
import CustomTextInput from "@/components/custom/CustomTextInput";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(6, "Description is required"),
});

type FormData = z.infer<typeof schema>;

const CropImageScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const { video, updateVideo } = useVideoStore();
  const { addVideo } = useLocalVideoStore();
  const { mutate } = usePostPost();

  const onSubmit = async (data: FormData) => {
    updateVideo({ name: data.name, description: data.description });
    const updatedVideo = { name: data.name, description: data.description };
    addVideo({ ...video, ...updatedVideo });
    mutate({
      title: "Yeni Özellikler",
      body: "Bu güncellemeyle birlikte uygulamaya yeni özellikler eklendi.",
      userId: 1,
    });
    router.dismiss();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1 p-5 mx-4 mt-5 mb-8">
        <Text className="text-3xl font-bold mb-8 text-center text-gray-800">
          Meta Data
        </Text>
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                placeholder="Video name"
                value={value}
                onChangeText={(text) => {
                  onChange(text);
                }}
                onBlur={onBlur}
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text className="text-red-600 mb-3 text-sm ml-1">
              {errors.name.message}
            </Text>
          )}
        </View>

        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                placeholder="Video description"
                value={value}
                onChangeText={(text) => {
                  onChange(text);
                }}
                onBlur={onBlur}
              />
            )}
            name="description"
          />
          {errors.description && (
            <Text className="text-red-600 text-sm ml-1">
              {errors.description.message}
            </Text>
          )}
        </View>

        <CustomButton title="Videoyu kaydet" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};

export default CropImageScreen;
