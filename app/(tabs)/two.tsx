import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { View } from "../../components/Themed";
import { Text, useTheme } from "react-native-paper";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Contact Tagir</Text>

      <View style={{ height: 12 }} />

      <Link href="https://t.me/tagir_a" style={styles.link}>
        <FontAwesome5 name="telegram" size={14} color={theme.colors.primary} />
        <Text variant="titleMedium">Telegram</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
  },
});
