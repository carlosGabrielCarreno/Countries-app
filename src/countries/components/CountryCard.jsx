import { Link } from 'react-router-dom';
import styled from 'styled-components';
/*  */

const CardContainer = styled(Link).attrs({
  className: 'animate__animated animate__fadeIn',
})`
  width: 70vw;
  height: 100%;
  border-radius: 0.4rem;
  color: hsl(200, 15%, 8%);
  text-decoration: none;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  transition: all 300ms;
  position: relative;
  :hover {
    transform: scale(1.15);
  }
  @media (min-width: 500px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 100%;
  }
  @media (min-width: 800px) {
    display: grid;
    width: 100%;
  }
  @media (min-width: 1000px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const DataContainer = styled.div`
  width: 100%;
  overflow: hidden;
  align-items: center;
  margin: 0 0.2rem;
`;

const CountryName = styled.h2`
  margin: 0.2rem 0 0 0.2rem;
`;

const CountryData = styled.h3`
  /* border: solid red; */
  margin: 0.2rem 0;
  font-weight: 600;
`;

const SpanText = styled.span`
  font-weight: 300;
  font-size: 0.9rem;
`;

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
