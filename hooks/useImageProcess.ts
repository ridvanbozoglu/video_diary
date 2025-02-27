import {  createPost, Post } from "@/services/imageProcessService";
import { useMutation } from "@tanstack/react-query";




export const usePostPost = () => {
  return useMutation<Post, Error, { title: string; body: string; userId: number }>({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      console.log("Yeni post oluşturuldu:", newPost);
    },
    onError: (error) => {
      console.error("Post oluşturma hatası:", error.message);
    },
  });
};
