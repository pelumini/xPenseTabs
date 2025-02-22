import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ModalsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, presentation: "modal" }}>
      <Stack.Screen name="profileModal" />
      <Stack.Screen name="walletModal" />
      <Stack.Screen name="transactionModal" />
      <Stack.Screen name="searchModal" />
    </Stack>
  );
};

export default ModalsLayout;

const styles = StyleSheet.create({});
