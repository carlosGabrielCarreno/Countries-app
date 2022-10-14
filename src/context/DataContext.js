import React, { createContext, useState } from 'react';
import { useDarkMode } from '../countries/hooks/useDarkMode';
import { useFetchCountris } from '../countries/hooks/useFetchCountris';
import { useFetchCountryByName } from '../countries/hooks/useFetchCountryByName';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [continent, setContinent] = useState('All');
  const [search, setSearch] = useState('');
  const { countries, isLoading, searchFilters } = useFetchCountris(continent);
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const { countryDetail, isLoadingDetail, setIsLoadingDetail } =
    useFetchCountryByName('');

  return <DataContext.Provider>{children}</DataContext.Provider>;
};
