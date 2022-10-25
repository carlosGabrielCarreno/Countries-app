import {
  CardContainer,
  CountryData,
  CountryName,
  DataContainer,
  Img,
  SpanText,
} from './CountryCard.styled';

export const CountryCard = (props) => {
  const { name, capital, region, population, flag } = props;

  return (
    <CardContainer to={`/country/${name}`}>
      <Img src={flag} alt={name} width="150" />

      <CountryName>{name}</CountryName>
      <DataContainer>
        <CountryData>
          Population: <SpanText>{population}</SpanText>
        </CountryData>
        <CountryData>
          Region: <SpanText>{region}</SpanText>
        </CountryData>
        <CountryData>
          Capital: <SpanText>{capital}</SpanText>
        </CountryData>
      </DataContainer>
    </CardContainer>
  );
};
