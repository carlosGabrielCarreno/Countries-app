import { useState } from 'react';
import { Countries } from '../components';

export const CountriesPage = () => {
  const [continent, setContinent] = useState('All');
  return (
    <>
      <Countries continent={continent} setContinent={setContinent} />
    </>
  );
};
