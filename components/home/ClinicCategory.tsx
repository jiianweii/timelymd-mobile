import { Fonts } from "@/constants/font";
import { Colors } from "@/constants/theme";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import CustomText from "../common/CustomText";

interface ClinicCategoryProps {
  title: string;
  children: React.ReactNode;
  onPress?: () => void;
}

const ClinicCategory = ({ title, onPress, children }: ClinicCategoryProps) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      {children}
      <CustomText style={styles.text}>{title}</CustomText>
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
    borderWidth: 1,
    gap: 5,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: Colors.light.accent,
    fontFamily: Fonts.Medium,
  },
});
