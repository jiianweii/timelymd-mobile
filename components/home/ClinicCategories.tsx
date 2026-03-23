import { Fonts } from "@/constants/font";
import { Colors } from "@/constants/theme";
import { CategoryList, iconMap } from "@/data/categories";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CustomLink from "../common/CustomLink";
import CustomText from "../common/CustomText";
import ClinicCategory from "./ClinicCategory";

const ClinicCategories = () => {
  const numColumns = 4;
  return (
    <View style={styles.view}>
      <View style={styles.title}>
        <CustomText style={styles.font}>Clinic Categories</CustomText>
        <CustomLink href="/onboarding">See All</CustomLink>
      </View>

      <FlatList
        key={numColumns}
        numColumns={numColumns}
        data={CategoryList.slice(0, 8)}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          const IconComponent = iconMap[item.iconName];
          return (
            <ClinicCategory title={item.name}>
              {IconComponent && <IconComponent width={24} height={24} />}
            </ClinicCategory>
          );
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      />
    </View>
  );
};

export default ClinicCategories;

const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    color: Colors.light.text,
    fontFamily: Fonts.SemiBold,
  },
  categories: {
    flexDirection: "row",
    gap: 10,
  },
  view: {
    gap: 10,
  },
  title: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
});
