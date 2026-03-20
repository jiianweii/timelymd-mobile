import { Fonts } from "@/constants/font";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "../common/CustomText";

const AddressSelection = () => {
  return (
    <View style={styles.outerView}>
      <Ionicons
        name="navigate-circle-outline"
        color={Colors.light.textSecondary}
        size={25}
      />
      <View>
        <CustomText style={[styles.text, styles.bold]}>
          30 Woodlands Ring Rd
        </CustomText>
        <View style={styles.innerAddressView}>
          <CustomText style={styles.text}>Singapore, 737883</CustomText>
          <Ionicons
            name="chevron-down-outline"
            color={Colors.light.textSecondary}
            size={15}
            style={{ alignSelf: "flex-end" }}
          />
        </View>
      </View>
    </View>
  );
};

export default AddressSelection;

const styles = StyleSheet.create({
  outerView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  innerAddressView: {
    flexDirection: "row",
    gap: 3,
  },
  text: {
    color: Colors.light.textSecondary,
    fontFamily: Fonts.Medium,
  },
  bold: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
  },
});
