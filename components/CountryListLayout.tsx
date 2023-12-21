import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { CountryBasicData } from "../domains/Country/Country";
import {
  ActivityIndicator,
  Button,
  Card,
  Text,
  useTheme,
} from "react-native-paper";
import { useRouter } from "expo-router";

type Props = {
  countryList: UseQueryResult<CountryBasicData[], Error>;
};

const CountryListLayout = ({ countryList }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const { status, error, data } = countryList;

  const onLearnMoreClick = (countryInfo: CountryBasicData) => {
    router.push({
      pathname: "/modal",
      params: { title: `${countryInfo.name.common} ${countryInfo.flag}` },
    });
  };
  switch (status) {
    case "pending":
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={true} />
        </View>
      );
    case "error":
      return (
        <View style={styles.container}>
          <Text variant="displayLarge">Error: {error.name}</Text>
          <Text variant="bodyMedium" style={{ color: theme.colors.error }}>
            {error.message}
          </Text>
        </View>
      );
    case "success":
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={({ item, index }) => {
              const language = Object.keys(item.name.nativeName)[0];
              const ogName = item.name.nativeName[language]?.official;
              return (
                <Card>
                  <Card.Cover
                    source={{ uri: `https://picsum.photos/700?random${index}` }}
                  />
                  <Card.Content>
                    <Text variant="titleLarge">
                      {item.name.common} {item.flag}
                    </Text>
                    <Text variant="titleSmall">
                      Officially called: {item.name.official}
                    </Text>
                    <Text variant="titleSmall">Original name: {ogName}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button onPress={() => onLearnMoreClick(item)}>
                      Learn More
                    </Button>
                  </Card.Actions>
                </Card>
              );
            }}
          />
        </View>
      );

    default:
      throw new Error("not reachable");
  }
};

export default CountryListLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
