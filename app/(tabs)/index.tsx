import CustomView from "@/components/common/CustomView";
import ClinicCategories from "@/components/home/ClinicCategories";
import Header from "@/components/home/Header";

import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <CustomView>
      <Header />
      <View style={styles.view}>
        <ClinicCategories />
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
