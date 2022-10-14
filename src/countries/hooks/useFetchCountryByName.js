import { useEffect, useState } from 'react';
import { getCountryByName } from '../helpers';

export const useFetchCountryByName = (name) => {
  const [countryDetail, setCountryDetail] = useState({});
  const [isLoadingDetail, setIsLoadingDetail] = useState(true);

  const getCountryDetail = async () => {
    const country = await getCountryByName(name);
    setCountryDetail(country);
    setIsLoadingDetail(false);
  };

  useEffect(() => {
    getCountryDetail();
  }, [name]);
  return {
    countryDetail,
    isLoading: isLoadingDetail,
    setIsLoading: setIsLoadingDetail,
  };
};
