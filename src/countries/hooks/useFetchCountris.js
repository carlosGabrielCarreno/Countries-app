import { useEffect, useState } from 'react';
import { getCountriesByContinent } from '../helpers';

export const useFetchCountris = (continent) => {
  const [countries, setCountries] = useState([]);
  const [countriesAux, setCountriesAux] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const AllCountries = async () => {
    const countriesOfApi = await getCountriesByContinent(continent);
    setCountries(countriesOfApi);
    setCountriesAux(countriesOfApi);
    setIsLoading(false);
  };

  const searchFilters = (search, region) => {
    if (region !== 'All' && search.length) {
      const filters = countriesAux.filter((contry) => {
        const hasContry = contry.name
          .toLowerCase()
          .includes(search.toLocaleLowerCase());
        const isRegion =
          contry.region.toLocaleLowerCase() === region.toLocaleLowerCase();
        if (hasContry && isRegion) {
          return true;
        } else {
          return false;
        }
      });
      setCountries(filters);
    } else if (search.length) {
      const filters = countriesAux.filter((contry) =>
        contry.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setCountries(filters);
    }
  };

  useEffect(() => {
    AllCountries();
  }, [continent]);

  return {
    countries,
    isLoading,
    searchFilters,
  };
};
