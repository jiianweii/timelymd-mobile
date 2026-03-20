import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

export type IoniconsIconName = keyof typeof Ionicons.glyphMap;

interface CustomTextInputProps extends TextInputProps {
  iconName?: IoniconsIconName;
  iconColor?: string;
}

const CustomSearchInput = ({
  iconName,
  iconColor,
  style,
  ...rest
}: CustomTextInputProps) => {
  return (
    <View style={styles.view}>
      <TextInput
        style={[styles.input, iconName ? { paddingLeft: 35 } : {}, style]}
        {...rest}
      />
      {iconName && (
        <Ionicons
          name={iconName}
          style={{
            position: "absolute",
            left: 10,
            top: 25,
            transform: [{ translateY: -9 }],
          }}
          color={iconColor || Colors.light.text}
          size={18}
        />
      )}
    </View>
  );
};

export default CustomSearchInput;

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
