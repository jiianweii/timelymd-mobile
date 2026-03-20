/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const primaryBlue = "#086888";
const brightBlue = "#1E90FF";

export const Colors = {
  light: {
    // Core text - keep dark but slightly softer
    text: "#1A2B3C",
    textSecondary: "#f1f1f1",
    // Background - pure white for maximum brightness
    background: "#FFFFFF",
    // Surface/elevated backgrounds (for cards, modals)
    surface: "#F8FBFF",
    // Primary brand color
    tint: primaryBlue,
    primary: primaryBlue,
    // Accent colors
    accent: brightBlue,
    success: "#28A745",
    warning: "#FFC107",
    error: "#DC3545",
    // Icons
    icon: "#4A6572",
    iconSecondary: "#7F8C8D",
    // Tab bar
    tabIconDefault: "#8A9BA5",
    tabIconSelected: primaryBlue,
    // Borders and dividers
    border: "#E1E8ED",
    // Card backgrounds
    cardBackground: "#FFFFFF",
    cardBorder: "#E1E8F0",
    // Status/Info colors
    info: "#17A2B8",
    infoLight: "#D1ECF1",
    // Appointment status colors
    scheduled: "#0077BE",
    completed: "#28A745",
    cancelled: "#DC3545",
    pending: "#FFC107",
    // Input fields
    inputBackground: "#F5F9FF",
    inputBorder: "#C5D0DE",
    inputText: "#1A2B3C",
    placeholder: "#9AA9B7",
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
