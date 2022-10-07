import { useState } from 'react';
import { CountryList } from '../components';

export const CountriesPage = () => {
  const [continent, setContinent] = useState('Filter by Region');
  return (
    <>
      <CountryList continent={continent} setContinent={setContinent} />
    </>
  );
};
