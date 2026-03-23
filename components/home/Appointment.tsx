import { Fonts } from "@/constants/font";
import { Colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomLink from "../common/CustomLink";
import CustomText from "../common/CustomText";
import Ad from "./Ad";

const Appointment = () => {
  return (
    <View style={styles.view}>
      <View style={styles.info}>
        <CustomText style={styles.font}>Appointment</CustomText>
        <CustomLink href="/onboarding">See All</CustomLink>
      </View>
      <Ad />
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  info: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  font: {
    fontSize: 16,
    color: Colors.light.text,
    fontFamily: Fonts.SemiBold,
  },
  view: {
    gap: 15,
  },
});
