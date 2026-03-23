import { Fonts } from "@/constants/font";
import { Colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "../common/CustomText";
import { Feather, Ionicons } from "@expo/vector-icons";

interface IconTextProps {
  name: string;
  children: React.ReactNode;
}

const IconText = ({ name, children }: IconTextProps) => {
  return (
    <View style={styles.view}>
      {children}
      <CustomText
        style={{
          fontFamily: Fonts.Regular,
          fontSize: 14,
          color: Colors.light.textSecondary,
        }}
      >
        {name}
      </CustomText>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
