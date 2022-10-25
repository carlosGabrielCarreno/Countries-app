import { Navigate, Route, Routes } from 'react-router-dom';

import { CountriesPage, DetailCountry } from '../pages';

export const CountriesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="countries" element={<CountriesPage />} />

        <Route path="country/:name" element={<DetailCountry />} />

        <Route path="/" element={<Navigate to="/countries" />} />
      </Routes>
    </>
  );
};
