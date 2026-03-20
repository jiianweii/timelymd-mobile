import { Colors } from "@/constants/theme";
import React from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface CustomViewProps {
  style?: object;
  children: React.ReactNode;
}

const CustomView = ({ style, children }: CustomViewProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={[styles.view, style]}>{children}</SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
});
