import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCountriesSearch } from "../domains/Country/api";
import CountryListLayout from "./CountryListLayout";

type Props = {
  searchString: string;
};

const SearchView = ({ searchString }: Props) => {
  const countriesSearch = useQuery({
    queryKey: ["countriesSearch", searchString],
    queryFn: () => fetchCountriesSearch(searchString),
  });
  return <CountryListLayout countryList={countriesSearch} />;
};

export default SearchView;
