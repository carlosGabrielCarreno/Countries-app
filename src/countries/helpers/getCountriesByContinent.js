const { REACT_APP_URL_ALL_COUNTRY } = process.env;

export const getCountriesByContinent = async (continent) => {
  const validateContinent = [
    'All',
    'Asia',
    'Africa',
    'Americas',
    'Antarctic',
    'Europe',
    'Oceania',
  ];
  if (!validateContinent.includes(continent)) {
    throw new Error(`${continent} is not a valid continent`);
  }
  try {
    const data = await fetch(REACT_APP_URL_ALL_COUNTRY);
    const countries = await data.json();
    const newCountries = countries.map((country) => {
      const {
        name: { common },
        flags: { svg },
      } = country;
      return {
        name: common,
        capital: country.capital
          ? country.capital.join(' ')
          : 'capital not found',
        region: country.region,
        population: country.population,
        flag: svg,
      };
    });
    return continent === 'All'
      ? newCountries
      : newCountries.filter(
          (country) => country.region.toLowerCase() === continent.toLowerCase()
        );
  } catch (error) {
    return new Error(error.message);
  }
};
