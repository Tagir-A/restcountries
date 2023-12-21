import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { TextInput, useTheme } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import CountryListLayout from "../../components/CountryListLayout";
import { fetchCountries } from "../../domains/Country/api";
import { useState } from "react";
import SearchView from "../../components/SearchView";

type State =
  | {
      type: "default";
    }
  | {
      type: "search";
      text: string;
    };

export default function TabOneScreen() {
  const [state, setState] = useState<State>({ type: "default" });
  const countries = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  // debounce would be nice
  const handleTextChange = (text: string) => {
    if (text === "") {
      setState({ type: "default" });
      return;
    }
    setState({ type: "search", text });
  };
  return (
    <View style={styles.container}>
      <TextInput onChangeText={handleTextChange} />
      {(() => {
        switch (state.type) {
          case "default":
            return <CountryListLayout countryList={countries} />;
          case "search":
            return <SearchView searchString={state.text} />;

          default:
            throw new Error("not reachable");
        }
      })()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
