import { create } from "zustand";
import { ICropVideo } from "@/types/types";

interface VideoStore {
  video: ICropVideo;
  updateVideo: (updates: Partial<ICropVideo>) => void;
  resetVideo: () => void;
}

const useVideoStore = create<VideoStore>((set) => ({
  video: { uri: "", name: "", description: "", start: 0, end: 5 },
  updateVideo: (updates) => set((state) => ({ video: { ...state.video, ...updates } })),
  resetVideo: () => set({ video: { uri: "", name: "", description: "", start: 0, end: 5 } }),
}));

export default useVideoStore;