import { Colors } from "@/constants/theme";
import { Href, Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

interface CustomLinkProps {
  href: Href;
  children: string;
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
  return (
    <Link href={href} style={styles.link}>
      {children}
    </Link>
  );
};

export default CustomLink;

const styles = StyleSheet.create({
  link: {
    color: Colors.light.accent,
  },
});
