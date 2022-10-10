import { CountryCard } from '../CountryCard';
import { stylesCountriesList } from './stylesCountriesList';

//styles
const { ContainerCountries } = stylesCountriesList;

export const CountriesList = ({ countries }) => {
  return (
    <ContainerCountries>
      {countries?.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </ContainerCountries>
  );
};
