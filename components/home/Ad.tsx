import { Fonts } from "@/constants/font";
import { Colors } from "@/constants/theme";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "../common/CustomText";
import IconText from "../ui/IconText";

const Ad = () => {
  return (
    <View style={styles.view}>
      <View style={styles.title}>
        <CustomText
          style={{
            color: Colors.light.textSecondary,
            fontFamily: Fonts.SemiBold,
            fontSize: 22,
          }}
        >
          Upcoming Appointment
        </CustomText>
        <CustomText
          style={{
            color: Colors.light.textSecondary,
            fontFamily: Fonts.Medium,
            fontSize: 16,
          }}
        >
          You have an upcoming appointment
        </CustomText>
      </View>
      <View style={styles.info}>
        <IconText name="Mon, 15 May 2025 · 10:30 AM">
          <Fontisto name="date" size={12} color={Colors.light.textSecondary} />
        </IconText>
        <IconText name="Dr. Sarah Lim, Cardiologist">
          <Fontisto
            name="doctor"
            size={12}
            color={Colors.light.textSecondary}
          />
        </IconText>
        <IconText name=" General Consultation">
          <FontAwesome5
            name="briefcase-medical"
            size={12}
            color={Colors.light.textSecondary}
          />
        </IconText>
      </View>
    </View>
  );
};

export default Ad;

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.light.accent,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,

    gap: 20,
  },
  title: {
    gap: 5,
  },
  info: {
    gap: 2.5,
  },
});
