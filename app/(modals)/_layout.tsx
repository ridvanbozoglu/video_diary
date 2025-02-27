import React, { useCallback } from "react";
import { Tabs } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import useVideoStore from "@/store/videoStore";

export default function ModalLayout() {
  const { resetVideo } = useVideoStore();

  const handleModalClose = useCallback(() => {
    //resetVideo();
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        handleModalClose();
      };
    }, [handleModalClose])
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="videoSelectionScreen" />
      <Tabs.Screen name="modal2" />
      <Tabs.Screen name="modal3" />
    </Tabs>
  );
}
