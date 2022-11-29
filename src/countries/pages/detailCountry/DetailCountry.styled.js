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
    gap: 5rem;
    height: 80vh;
  }
  @media (min-width: 1000px) {
    gap: 8rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 50%;

  @media (min-width: 800px) {
    width: 21.875rem;
    height: 45%;
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
    grid-template-columns: 3.125rem 3.125rem 3.125rem;
    grid-template-rows: 3.125rem 17.313rem 3.125rem;
    grid-template-areas:
      'area1  area1 area1'
      'area2  . area3'
      'area4 area4 area4';
    height: 100%;
  }
`;

const RawData1 = styled.div`
  height: 100%;
  margin: 1.5rem 0;
  @media (min-width: 800px) {
    font-size: 1rem;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  @media (min-width: 1000px) {
    grid-area: area2;
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
    height: 6%;
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
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (min-width: 1000px) {
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
  width: 90%;
  height: 100%;
  @media (min-width: 1000px) {
    font-size: 0.9rem;
    overflow-wrap: break-word;
    height: 20%;
  }
`;

const Text = styled.span`
  font-weight: 300;

  @media (min-width: 1000px) {
    margin: 0 auto;
    display: block;
  }
`;

const BorderTitle = styled.h3`
  font-weight: 600;
  @media (min-width: 800px) {
    display: flex;
    margin: 0 0 0.3rem 0;
    text-align: center;
    margin-top: 1.5rem;
  }
  @media (min-width: 800px) {
    display: flex;
    margin: 0 0 0.3rem 0;
    text-align: center;
    margin-top: 0;
  }
`;

const ContainerBordersButtons = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 800px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  @media (min-width: 1000px) {
    height: 100%;
    width: 40%;
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
  transition: all 300ms;
  position: relative;
  :hover {
    transform: scale(1.15);
  }
  @media (min-width: 800px) {
    margin: 0.5rem;
    padding: 0.2rem;
    height: 1.8rem;
  }
  @media (min-width: 1000px) {
    margin: 0 0.5rem 0;
  }
`;

export const TitleName = styled.h1`
  grid-area: area1;
  font-size: 2.6rem;
  @media (min-width: 800px) {
    margin: 0;
    font-size: 2rem;
  }
  @media (min-width: 1000px) {
    width: 37vw;
    overflow-wrap: break-word;
    margin: 0;
  }
`;

export {
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
