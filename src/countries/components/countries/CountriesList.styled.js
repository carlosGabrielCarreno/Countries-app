import styled from 'styled-components';

const ContainerCountries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
    width: 85%;
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    width: 85%;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    width: 85%;
  }
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    width: 85%;
  }
`;

export const stylesCountriesList = {
  ContainerCountries,
};
