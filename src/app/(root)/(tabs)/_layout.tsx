import CustomTabs from "@/components/CustomTabs";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs tabBar={CustomTabs} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="welcome" />
      <Tabs.Screen name="statistics" />
      <Tabs.Screen name="wallet" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabsLayout;
