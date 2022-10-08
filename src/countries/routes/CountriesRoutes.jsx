import { Navigate, Route, Routes } from 'react-router-dom';

import { CountriesPage, CountryPage } from '../pages';

export const CountriesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="countries" element={<CountriesPage />} />

        <Route path="country/:name" element={<CountryPage />} />

        <Route path="/" element={<Navigate to="/countries" />} />
      </Routes>
    </>
  );
};
