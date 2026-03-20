import { Colors } from "@/constants/theme";
import React from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface CustomViewProps {
  style?: object;
  children: React.ReactNode;
}

const CustomView = ({ style, children }: CustomViewProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[styles.view, style]}>{children}</View>
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
