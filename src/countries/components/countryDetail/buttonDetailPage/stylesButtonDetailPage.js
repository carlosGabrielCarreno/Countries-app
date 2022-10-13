import styled from 'styled-components';

const Button = styled.button.attrs({
  className: 'button',
})`
  width: 25%;
  height: 100%;
  max-width: 110px;
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
  transition: all 300ms;
  position: relative;
  :hover {
    transform: scale(1.15);
  }
`;

export const stylesButtonDetailPage = {
  Button,
};
