import React from "react";
import { Tabs } from "expo-router";

export default function ModalLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="modal" />
      <Tabs.Screen name="modal2" />
      <Tabs.Screen name="modal3" />
      <Tabs.Screen name="modal4" />
    </Tabs>
  );
}
