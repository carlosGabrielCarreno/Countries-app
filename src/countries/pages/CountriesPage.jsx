import { useState } from 'react';
import { CountryList } from '../components';

export const CountriesPage = () => {
  const [continent, setContinent] = useState('All');
  return (
    <>
      <CountryList continent={continent} setContinent={setContinent} />
    </>
  );
};
