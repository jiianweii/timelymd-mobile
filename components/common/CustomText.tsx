import { Colors } from "@/constants/theme";
import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface CustomTextProps {
  styles?: StyleProp<TextStyle>;
  children: string;
}

const CustomText = ({ styles: custom, children }: CustomTextProps) => {
  return <Text style={[styles.text, custom]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    color: Colors.light.text,
  },
});
