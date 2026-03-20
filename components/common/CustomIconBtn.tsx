import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { IoniconsIconName } from "./CustomSearchInput";

interface CustomIconBtnProps {
  icon: IoniconsIconName;
}

const CustomIconBtn = ({ icon }: CustomIconBtnProps) => {
  return (
    <Pressable style={styles.btn}>
      <Ionicons name={icon} size={20} color={Colors.light.textSecondary} />
    </Pressable>
  );
};

export default CustomIconBtn;

const styles = StyleSheet.create({
  btn: {
    width: 35,
    borderColor: Colors.light.border,
    borderRadius: 8,
    borderWidth: 1,

    justifyContent: "center",
    alignItems: "center",
  },
});
