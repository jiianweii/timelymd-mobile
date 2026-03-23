import { Fonts } from "@/constants/font";
import { Colors } from "@/constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "../common/CustomText";

const AddressSelection = () => {
  return (
    <View style={styles.outerView}>
      <Feather name="map-pin" size={25} color={Colors.light.textSecondary} />
      <View>
        <CustomText style={[styles.text, styles.bold]}>Home</CustomText>
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
