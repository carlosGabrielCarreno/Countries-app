import { CountryCard } from '../index';
import { stylesCountriesList } from './CountriesList.styled';

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
