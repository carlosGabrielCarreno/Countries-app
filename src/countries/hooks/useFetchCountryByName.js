import { useEffect, useState } from 'react';
import { getCountryByName } from '../helpers';

export const useFetchCountryByName = (name) => {
  const [countryDetail, setCountryDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getCountryDetail = async () => {
    const country = await getCountryByName(name);
    setCountryDetail(country);
    setIsLoading(false);
  };

  useEffect(() => {
    getCountryDetail();
  }, [name]);
  return {
    countryDetail,
    isLoading,
    setIsLoading,
  };
};
