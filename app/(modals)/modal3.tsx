import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useVideoStore from "@/store/videoStore";
import { useRouter } from "expo-router";
import { useLocalVideoStore } from "@/store/asyncVideoStore";
import { usePostPost } from "@/hooks/useImageProcess";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Crop Image</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter image name"
              placeholderTextColor="#999"
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text);
              }}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textArea}
              placeholder="Enter image description"
              placeholderTextColor="#999"
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text);
              }}
              value={value}
              multiline
              numberOfLines={4}
            />
          )}
          name="description"
        />
        {errors.description && (
          <Text style={styles.error}>{errors.description.message}</Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Crop Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 120,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 12,
    paddingTop: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  error: {
    color: "#ff3b30",
    marginBottom: 15,
    fontSize: 14,
    marginLeft: 4,
  },
  button: {
    backgroundColor: "#007aff",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default CropImageScreen;
