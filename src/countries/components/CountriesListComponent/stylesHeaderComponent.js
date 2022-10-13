import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1em;
  @media (min-width: 600px) {
    font-size: 1.4em;
  }
`;

const Header = styled.div.attrs({
  className: 'header',
})`
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6.5rem;
  cursor: pointer;
  @media (min-width: 400px) {
    width: 7rem;
  }
`;

const Paragraph = styled.p`
  font-weight: 300;
`;

export const stylesHeaderComponent = {
  Title,
  Header,
  HeaderContainer,
  Button,
  Paragraph,
};
