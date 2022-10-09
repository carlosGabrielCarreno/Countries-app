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

const Button = styled.button.attrs({
  className: 'button',
})`
  width: 25%;
  height: 100%;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  outline: none;
  background-color: #fff;
  border: 0;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 300;
  cursor: pointer;
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
    border: solid green;
    /* height: 45vh; */
  }
`;

const Img = styled.img`
  width: 100%;
  height: 30%;
  @media (min-width: 800px) {
    width: 50%;
    height: 100%;
  }
`;

const DataContainer = styled.div`
  /* border: solid red; */
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 21rem;
    grid-template-rows: 2rem 13rem 7rem;
    border: solid pink;
  }
`;

const RawData = styled.div`
  height: 100%;
  /* border: solid green; */
  margin: 1.5rem 0;
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 80vh;
  }
`;

const Paragraph = styled.p`
  font-weight: 600;
  padding: 0.3rem 0;
`;

const Text = styled.span`
  font-weight: 300;
`;

const BorderTitle = styled.h3`
  font-weight: 600;
`;

const ContainerBordersButtons = styled.div`
  /* border: solid green; */
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  flex-wrap: nowrap;
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
  margin: 0.1rem;
  padding: 0.3rem;
  border: 0;
  /* width: 100vw; */
  text-align: center;
`;

const countryPage = {
  CountryDetailContainer,
  ButtonsContainer,
  Button,
  DetailContainer,
  Img,
  DataContainer,
  RawData,
  Paragraph,
  Text,
  BorderTitle,
  ContainerBordersButtons,
  ButtonBorder,
};

export default countryPage;
