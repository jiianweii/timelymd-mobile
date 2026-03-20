import { Fonts } from "@/constants/font";
import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import CustomText from "../common/CustomText";
import ClinicCategory from "./ClinicCategory";

const ClinicCategories = () => {
  return (
    <View style={styles.view}>
      <CustomText style={styles.font}>Clinic Categories</CustomText>
      <View style={styles.categories}>
        <ClinicCategory title="GP">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="-2 -2 24 24"
          >
            <Path
              fill="#1E90FF"
              d="M7 12.917v.583a4.5 4.5 0 1 0 9 0v-1.67a3.001 3.001 0 1 1 2 0v1.67a6.5 6.5 0 1 1-13 0v-.583A6 6 0 0 1 0 7V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v5a4 4 0 1 0 8 0V2H9a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v5a6 6 0 0 1-5 5.917M17 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
            />
          </Svg>
        </ClinicCategory>
        <ClinicCategory title="Dental">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <Path
              fill="none"
              stroke="#1E90FF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5.5C10.926 4.914 9.417 4 8 4C5.9 4 4 5.247 4 9c0 4.899 1.056 8.41 2.671 10.537c.573.756 1.97.521 2.567-.236q.597-.758 1.262-2.801c.292-.771.892-1.504 1.5-1.5c.602 0 1.21.737 1.5 1.5q.665 2.043 1.262 2.8c.597.759 2 .993 2.567.237C18.944 17.41 20 13.9 20 9c0-3.74-1.908-5-4-5c-1.423 0-2.92.911-4 1.5m0 0L15 7"
            />
          </Svg>
        </ClinicCategory>
        <ClinicCategory title="Neurology">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <Path
              fill="#1E90FF"
              d="M9.75 21q-1.275 0-2.2-.888T6.5 17.976Q5 17.775 4 16.65T3 14q0-.525.138-1.037T3.55 12q-.275-.45-.412-.95T3 10q0-1.525 1-2.637T6.475 6.05Q6.55 4.775 7.5 3.888T9.75 3q.65 0 1.213.25T12 3.925q.45-.425 1.025-.675T14.25 3q1.3 0 2.238.875t1.012 2.15q1.475.2 2.488 1.325T21 10q0 .55-.137 1.05t-.413.95q.275.45.413.963T21 14q0 1.55-1.012 2.663t-2.513 1.312q-.125 1.25-1.037 2.138T14.25 21q-.625 0-1.213-.238T12 20.1q-.475.425-1.05.663T9.75 21M13 6.25v11.5q0 .525.363.888t.887.362q.5 0 .863-.4t.387-.9q-.525-.2-.962-.537t-.788-.813q-.25-.35-.187-.75t.412-.65t.75-.187t.65.412q.275.4.7.613T17 16q.825 0 1.413-.587T19 14q0-.125-.012-.25t-.063-.25q-.425.25-.913.375T17 14q-.425 0-.712-.288T16 13t.288-.712T17 12q.825 0 1.413-.587T19 10t-.587-1.4T17 8q-.275.45-.712.788t-.963.537q-.4.15-.775-.025t-.5-.575t.038-.775t.562-.5q.375-.125.613-.45t.237-.75q0-.525-.362-.887T14.25 5t-.888.363T13 6.25m-2 11.5V6.25q0-.525-.363-.888T9.75 5t-.888.363t-.362.887q0 .4.225.738t.6.462q.4.125.575.5t.05.775q-.15.4-.525.575t-.775.025q-.525-.2-.963-.537T6.975 8q-.8.025-1.387.613T5 10q0 .825.588 1.413T7 12q.425 0 .713.288T8 13t-.288.713T7 14q-.525 0-1.012-.125t-.913-.375q-.05.125-.062.25T5 14q0 .825.588 1.413T7 16q.5 0 .925-.213t.7-.612q.25-.35.65-.413t.75.188t.413.65t-.188.75q-.35.475-.8.825t-.975.55q.025.5.4.888T9.75 19q.525 0 .888-.363T11 17.75M12 12"
            />
          </Svg>
        </ClinicCategory>
        <ClinicCategory title="Dermatology">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <Path
              fill="#1E90FF"
              d="M2 21v-9q0-.825.588-1.412T4 10h5v2q0 1.25.875 2.125T12 15t2.125-.875T15 12v-2h5q.825 0 1.413.588T22 12v9zm10-8q-.425 0-.712-.288T11 12q0-2.725.625-5.375T14.35 2.25q.325-.275.725-.238t.675.363t.238.725t-.363.675q-1.75 1.475-2.187 3.7T13 12q0 .425-.288.713T12 13m-5.712 2.288q.212-.213.212-.538t-.213-.537T5.75 14t-.537.213T5 14.75t.213.538t.537.212t.538-.213m1 2.5q.212-.212.212-.537t-.213-.537t-.537-.213t-.537.213T6 17.25t.213.538t.537.212t.538-.213m11.5-2.5q.212-.212.212-.537t-.213-.537T18.25 14t-.537.213t-.213.537t.213.538t.537.212t.538-.213"
            />
          </Svg>
        </ClinicCategory>
      </View>
    </View>
  );
};

export default ClinicCategories;

const styles = StyleSheet.create({
  font: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
  },
  categories: {
    flexDirection: "row",
    gap: 10,
  },
  view: {
    gap: 10,
  },
});
