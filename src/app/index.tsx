import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";
import { images } from "@/constants/images";

const AppScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} resizeMode="contain" style={styles.logo} />
    </View>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: "20%",
    aspectRatio: 1,
  },
});
