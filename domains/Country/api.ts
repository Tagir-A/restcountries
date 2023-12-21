import { CountryBasicData } from "./Country";

export async function fetchCountries(): Promise<CountryBasicData[]> {
  return fetch(
    "https://restcountries.com/v3.1/region/europe?fields=name,flag,languages"
  ).then((data) => data.json());
}
export async function fetchCountriesSearch(
  searchString: string
): Promise<CountryBasicData[]> {
  return fetch(
    `https://restcountries.com/v3.1/name/${searchString}?fields=name,flag,languages`
  )
    .then((data) => data.json() as Promise<CountryBasicData[]>)
    .then((data) =>
      data.filter((item) => item.name.common.startsWith(searchString))
    );
}
