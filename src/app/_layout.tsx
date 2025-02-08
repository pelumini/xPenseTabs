import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/AuthContext";

const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(root)" />
      <Stack.Screen name="(modals)" />
    </Stack>
  );
};

const AppLayout = () => {
  return (
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
