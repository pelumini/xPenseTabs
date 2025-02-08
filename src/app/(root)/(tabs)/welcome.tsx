import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { useAuth } from "@/contexts/AuthContext";
import ScreenWrapper from "@/components/ScreenWrapper";
import { verticalScale } from "@/utils/styling";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HomeCard from "@/components/HomeCard";
import TransactionList from "@/components/TransactionList";
import Button from "@/components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ gap: 4 }}>
            <Typo size={16} color={colors.neutral400}>
              Hello,
            </Typo>
            <Typo size={20} fontWeight={"500"}>
              {user?.name}
            </Typo>
          </View>
          <TouchableOpacity style={styles.searchIcon}>
            <MaterialCommunityIcons
              name="magnify"
              size={verticalScale(22)}
              color={colors.neutral200}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <HomeCard />
          </View>

          <TransactionList
            data={[1, 2, 3, 4, 5, 6, 7]}
            loading={false}
            emptyListMessage="No Transactions added yet!"
            title="Recent Transactions"
          />
        </ScrollView>

        <Button
          style={styles.floatingButton}
          onPress={() => router.push("/(modals)/transactionModal")}
        >
          <AntDesign
            name="plus"
            size={verticalScale(24)}
            color={colors.black}
          />
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
    marginTop: verticalScale(8),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacingY._10,
  },
  searchIcon: {
    backgroundColor: colors.neutral700,
    padding: spacingX._10,
    borderRadius: 50,
  },
  floatingButton: {
    height: verticalScale(50),
    width: verticalScale(50),
    borderRadius: 100,
    position: "absolute",
    bottom: verticalScale(30),
    right: verticalScale(30),
  },
  scrollViewStyle: {
    marginTop: spacingY._10,
    paddingBottom: verticalScale(100),
    gap: spacingY._25,
  },
});
