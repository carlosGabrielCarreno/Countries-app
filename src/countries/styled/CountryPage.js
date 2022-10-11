import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CountryDetailContainer = styled.div.attrs({
  className: 'animate__animated animate__pulse',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*  */
  /* border: solid green; */
  width: 85vw;
  margin: 1.5rem auto;
  gap: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
`;

const DetailContainer = styled.div.attrs({
  className: 'animate__animated animate__fadeIn',
})`
  width: 100%;
  height: 100%;
  overflow: hidden;
  /*  @media (min-width: 700px) {
    display: flex;
    gap: 3rem;
    height: 60vh;
  } */
  @media (min-width: 800px) {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
    /* height: 41vh; */
    height: 40vh;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 30%;
  /* display: none; */

  @media (min-width: 800px) {
    width: 415px;
    height: 100%;
  }
  @media (min-width: 1000px) {
    width: 50%;
    height: 100%;
  }
`;

const DataContainer = styled.div`
  /* border: solid red; */

  @media (min-width: 800px) {
    width: 100%;
    /* display: grid;
    grid-template-columns: 50px 50px 50px;
    grid-template-rows: 50px 150px 50px;
    grid-gap: 2rem;
    grid-template-areas:
      'area1  area1 area1'
      'area2 . area3'
      'area4 area4 area4'; */
    /* border: solid greenyellow; */
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1000px) {
    width: 100%;
    display: grid;
    grid-template-columns: 50px 50px 50px;
    grid-template-rows: 50px 150px 50px;
    /* grid-gap: 0.5rem; */
    grid-template-areas:
      'area1  area1 area1'
      'area2  . area3'
      'area4 area4 area4';
    border: solid greenyellow;
    height: 100%;
  }
`;

const RawData1 = styled.div`
  height: 100%;
  /* border: solid green; */
  margin: 1.5rem 0;
  @media (min-width: 800px) {
    font-size: 1rem;
    /* border: solid orange; */
    /* overflow: hidden; */
    height: 23vh;
    width: 100vw;
    /* margin: 0; */
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  @media (min-width: 1000px) {
    border: solid orange;
    grid-area: area2;
    overflow: hidden;
    height: 40vh;
    width: 100vw;
    margin: 0;
    margin-top: 2rem;
  }
`;
const RawData2 = styled.div`
  height: 100%;
  /* border: solid green; */
  margin: 1.5rem 0;
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  @media (min-width: 1000px) {
    display: flex;
    overflow: hidden;
    height: 40vh;
    border: solid blue;
    grid-area: area3;
    margin-left: 9rem;
    margin-top: 2rem;
    width: 68vw;
  }
`;

const RawData3 = styled.div`
  height: 100%;
  /* border: solid green; */
  margin: 1.5rem 0;
  @media (min-width: 800px) {
    height: 100vh;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    width: 100vw;
    margin-top: 0.4rem;
  }
  @media (min-width: 1000px) {
    border: solid violet;
    grid-area: area4;
    height: 100vh;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    width: 100vw;
    height: fit-content;
    margin-top: 2rem;
  }
`;

const Paragraph = styled.p`
  font-weight: 600;
  padding: 0.3rem 0;
  @media (min-width: 1000px) {
    font-size: 0.9rem;
  }
`;
/* const H1 = styled.h1`
  border: solid yellow;
  grid-area: 'area1';
`; */

const Text = styled.span`
  font-weight: 300;
`;

const BorderTitle = styled.h3`
  font-weight: 600;
  @media (min-width: 800px) {
    /* margin: 1rem 0; */
    display: flex;
    margin: 0 0 0.3rem 0;
    text-align: center;
    border: solid green;
  }
`;

const ContainerBordersButtons = styled.div`
  /* border: solid green; */
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 800px) {
    display: flex;
    /* flex-flow: row wrap; */
    justify-content: space-evenly;
    /* width: 32%; */
    flex-wrap: wrap;
  }
  @media (min-width: 1000px) {
    overflow: inherit;
    width: auto;
    border: solid red;
  }
`;

const ButtonBorder = styled(Link).attrs({
  className: 'buttonBorder',
})`
  outline: none;
  background-color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;
  color: hsl(200, 15%, 8%);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  padding: 0.3rem;
  border: 0;
  /* width: 100vw; */
  text-align: center;
  /* width: 2rem;
  height: 2rem; */
  @media (min-width: 1000px) {
    margin: 0 1rem;
  }
`;

const countryPage = {
  CountryDetailContainer,
  ButtonsContainer,
  DetailContainer,
  Img,
  DataContainer,
  RawData1,
  RawData2,
  RawData3,
  Paragraph,
  Text,
  BorderTitle,
  ContainerBordersButtons,
  ButtonBorder,
};

export default countryPage;
