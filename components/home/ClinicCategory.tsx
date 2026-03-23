import { Fonts } from "@/constants/font";
import { Colors } from "@/constants/theme";
import { truncateTextSmart } from "@/utils/helper";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import CustomText from "../common/CustomText";

interface ClinicCategoryProps {
  title: string;
  children: React.ReactNode;
  onPress?: () => void;
}

const ClinicCategory = ({ title, onPress, children }: ClinicCategoryProps) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <View style={styles.iconView}>{children}</View>
      <CustomText style={styles.text}>{truncateTextSmart(title)}</CustomText>
    </Pressable>
  );
};

export default ClinicCategory;

const styles = StyleSheet.create({
  btn: {
    width: 80,
    height: 80,
    borderColor: Colors.light.accent,
    borderRadius: 10,
    borderWidth: 0.5,
    gap: 5,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: Colors.light.text,
    fontFamily: Fonts.SemiBold,
  },
  iconView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light.accent,

    justifyContent: "center",
    alignItems: "center",
  },
});
