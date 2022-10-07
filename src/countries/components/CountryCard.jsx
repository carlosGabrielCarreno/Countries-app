import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CountryCard = (props) => {
  const { name, capital, region, population, flag } = props;

  const CardContainer = styled(Link)`
    width: 70vw;
    height: 100%;
    border-radius: 0.4rem;
    color: hsl(200, 15%, 8%);
    text-decoration: none;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  `;

  const Img = styled.img`
    width: 100%;
  `;

  const DataContainer = styled.div`
    width: 100%;
    overflow: hidden;
    padding: 0.5rem;
  `;

  const CountryName = styled.h2`
    margin: 10px 0;
  `;

  const CountryData = styled.h3`
    margin: 0.2rem 0;
    font-weight: 600;
  `;

  const SpanText = styled.span`
    font-weight: 300;
    color: hsl(0, 0%, 52%);
  `;

  return (
    <CardContainer to={`/country/${name}`}>
      <Img src={flag} alt={name} width="150" />

      <DataContainer>
        <CountryName>{name}</CountryName>
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
