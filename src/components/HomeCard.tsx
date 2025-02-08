import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale, verticalScale } from "@/utils/styling";
import { colors, spacingX, spacingY } from "@/constants/theme";
import Typo from "./Typo";
import { images } from "@/constants/images";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

const HomeCard = () => {
  return (
    <ImageBackground
      source={images.Card}
      resizeMode="stretch"
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <View>
          <View style={styles.totalBalanceRow}>
            <Typo color={colors.neutral800} size={17} fontWeight={"500"}>
              Total Balance
            </Typo>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={verticalScale(23)}
              color={colors.black}
            />
          </View>
          <Typo color={colors.black} size={30} fontWeight={"bold"}>
            32343.23
          </Typo>
        </View>

        <View style={styles.stats}>
          <View style={{ gap: verticalScale(5) }}>
            <View style={styles.incomeExpense}>
              <View style={styles.statsIcon}>
                <Feather
                  name="arrow-down"
                  size={verticalScale(15)}
                  color={colors.black}
                />
              </View>
              <Typo size={16} color={colors.neutral700} fontWeight={"500"}>
                Income
              </Typo>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Typo size={17} color={colors.green} fontWeight={"600"}>
                £ 2342
              </Typo>
            </View>
          </View>

          <View style={{ gap: verticalScale(5) }}>
            <View style={styles.incomeExpense}>
              <View style={styles.statsIcon}>
                <Feather
                  name="arrow-up"
                  size={verticalScale(15)}
                  color={colors.black}
                />
              </View>
              <Typo size={16} color={colors.neutral700} fontWeight={"500"}>
                Expense
              </Typo>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Typo size={17} color={colors.rose} fontWeight={"600"}>
                £ 23424
              </Typo>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  bgImage: {
    height: scale(210),
    width: "100%",
  },
  container: {
    padding: spacingX._20,
    paddingHorizontal: scale(23),
    height: "87%",
    width: "100%",
    justifyContent: "space-between",
  },
  totalBalanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacingY._5,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsIcon: {
    backgroundColor: colors.neutral350,
    padding: spacingY._5,
    borderRadius: 50,
  },
  incomeExpense: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingY._7,
  },
});
