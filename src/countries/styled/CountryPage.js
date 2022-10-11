import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CountryDetailContainer = styled.div.attrs({
  className: 'animate__animated animate__pulse',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  @media (min-width: 800px) {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
    height: 60vh;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 30%;

  @media (min-width: 800px) {
    width: 415px;
    height: 60%;
  }
  @media (min-width: 1000px) {
    width: 50%;
    height: 60%;
  }
`;

const DataContainer = styled.div`
  @media (min-width: 800px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1000px) {
    width: 100%;
    display: grid;
    grid-template-columns: 50px 50px 50px;
    grid-template-rows: 50px 150px 50px;
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
  margin: 1.5rem 0;
  @media (min-width: 800px) {
    font-size: 1rem;
    height: 23vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  @media (min-width: 1000px) {
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
    grid-area: area3;
    margin-left: 7rem;
    margin-top: 2rem;
    width: 16vw;
  }
`;

const RawData3 = styled.div`
  height: 100%;
  margin: 1.5rem 0;
  @media (min-width: 800px) {
    height: 100vh;
    width: 100%;
    width: 30vw;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (min-width: 1000px) {
    border: solid violet;
    grid-area: area4;
    margin: 1rem 0 0 0;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    width: 100vw;
    height: 20vh;
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

const Text = styled.span`
  font-weight: 300;
`;

const BorderTitle = styled.h3`
  font-weight: 600;
  @media (min-width: 800px) {
    display: flex;
    margin: 0 0 0.3rem 0;
    text-align: center;
    border: solid green;
  }
`;

const ContainerBordersButtons = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  @media (min-width: 1000px) {
    overflow-wrap: break-word;
    width: 50%;
    border: solid gray;
    height: 50%;
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
  text-align: center;
  height: 2rem;
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
