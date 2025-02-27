import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ICroppedVideo } from '@/types/types';

interface VideoStore {
  videos: ICroppedVideo[];
  addVideo: (video: ICroppedVideo) => Promise<void>;
  loadVideos: () => Promise<void>;
  deleteAll:   () => Promise<void>;
}

export const useLocalVideoStore = create<VideoStore>((set) => ({
  videos: [],
  addVideo: async ( video: ICroppedVideo) => {
    const currentVideos = await AsyncStorage.getItem('videos');
    const updatedVideos = currentVideos ? JSON.parse(currentVideos) : [];
    updatedVideos.push(video);
    await AsyncStorage.setItem('videos', JSON.stringify(updatedVideos));
    set({ videos: updatedVideos });
  },
  loadVideos: async () => {
    const storedVideos = await AsyncStorage.getItem('videos');
    const videos = storedVideos ? JSON.parse(storedVideos) : [];
    set({ videos });
  },
  deleteAll: async () => {
    await AsyncStorage.removeItem('videos');
    set({ videos: [] });
  }
}));
