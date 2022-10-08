import { Route, Routes } from 'react-router-dom';
import { CountriesRoutes } from '../countries/';

/*  */

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CountriesRoutes />} />
      </Routes>
    </>
  );
};
