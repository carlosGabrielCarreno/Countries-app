const { REACT_APP_URL_COUNTRY_BY_NAME, REACT_APP_URL_COUNTRY_BY_ALPHA_CODE } =
  process.env;

export const getCountryByName = async (name = '') => {
  try {
    const url =
      name.length === 3
        ? REACT_APP_URL_COUNTRY_BY_ALPHA_CODE
        : REACT_APP_URL_COUNTRY_BY_NAME;
    const response = await fetch(url + name);
    const data = await response.json();
    const [country] = data;

    const {
      name: { common, nativeName },
      flags: { svg },
    } = country;

    return {
      name: common,
      nativeName: Object.values(nativeName).find((e) => e.common).common,
      capital: country.capital.join(' '),
      region: country.region,
      subregion: country.subregion,
      languages: Object.values(country.languages),
      population: country.population,
      currencies: Object.values(country.currencies)[0].name,
      borders: country.borders,
      flag: svg,
      topLevelDomain: country.tld.join(' '),
    };
  } catch (error) {
    return error;
  }
};
