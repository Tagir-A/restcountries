export type CountryBasicData = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
  };
  languages: {
    [key: string]: string;
  };
  flag: string;
};
