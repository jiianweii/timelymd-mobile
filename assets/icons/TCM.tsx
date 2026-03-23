import Svg, { G, Path } from "react-native-svg";

export default function TCM() {
  return (
    <Svg width="24" height="24" viewBox="0 0 48 48">
      <G fill="#fff">
        <Path d="M38.014 7.265a3 3 0 0 0-4.02.97L27.685 18h8.248l3.42-6.671a3 3 0 0 0-1.17-3.967z" />
        <Path
          fill-rule="evenodd"
          d="M43 22h-2v3c0 5.784-3.778 10.686-9 12.373V41a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-3.627C10.778 35.686 7 30.784 7 25v-3H5v-2h38zM18 38v2h12v-2z"
          clip-rule="evenodd"
        />
      </G>
    </Svg>
  );
}
