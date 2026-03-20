import { Colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface CustomTextInputProps extends TextInputProps {}

const CustomTextInput = ({ style, ...rest }: CustomTextInputProps) => {
  return (
    <View style={styles.view}>
      <TextInput style={[styles.input, style]} {...rest} />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.light.border,
    borderWidth: 2,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    color: Colors.light.text,
    height: "100%",
  },
  view: {
    position: "relative",
    height: 50,
  },
});
