import { Colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomIconBtn from "../common/CustomIconBtn";

import AddressSelection from "./AddressSelection";

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.outerView}>
      <View style={[styles.view, { paddingTop: insets.top }]}>
        <AddressSelection />
        <View style={styles.btnView}>
          <CustomIconBtn icon="search-outline" />
          <CustomIconBtn icon="notifications-outline" />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  outerView: {
    backgroundColor: Colors.light.accent,
    paddingHorizontal: 10,
    paddingBottom: 20,
    gap: 15,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnView: {
    flexDirection: "row",
    gap: 8,
  },
});
