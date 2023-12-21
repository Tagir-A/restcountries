import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { Text } from "react-native-paper";
import { Stack, useLocalSearchParams } from "expo-router";

export default function ModalScreen() {
  const { title } = useLocalSearchParams();

  // Makeshift type check
  if (typeof title !== "string") throw new Error("Incorrect param passed");

  return (
    <>
      <Stack.Screen
        options={{
          title,
        }}
      />
      <View style={styles.container}>
        <Text variant="titleLarge">Country Info</Text>
        <Text variant="bodyLarge">
          No cap, you'd be able to read more about the country you clicked on,
          but the developer was short on time 😅
        </Text>

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
});
