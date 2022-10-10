import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6.5rem;
  cursor: pointer;
  /* border: solid red; */
  @media (min-width: 400px) {
    width: 7rem;
  }
`;

const Paragraph = styled.p`
  font-weight: 300;
`;

export const stylesButtonDarkMode = {
  Button,
  Paragraph,
};
