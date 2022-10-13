import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const NavegationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 85%;
  height: 17vh;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const SearchContainer = styled.div.attrs({
  className: 'searchContainer',
})`
  display: flex;
  width: 100%;
  height: 6vh;

  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  @media (min-width: 600px) {
    width: 60%;
  }
  @media (min-width: 800px) {
    width: 410px;
  }
`;

const SearchInput = styled.input`
  outline: none;
  border: 0;
  width: 100%;
  cursor: pointer;
  ::placeholder {
    padding-left: 1rem;
  }
`;

const ContainerSelect = styled.div.attrs({
  className: 'containerSelect',
})`
  display: flex;
  align-items: center;
  width: 55%;
  background-color: #fff;
  height: 6vh;

  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  padding-right: 1rem;
  @media (min-width: 600px) {
    width: 30%;
  }
  @media (min-width: 800px) {
    width: 192px;
  }
`;

const Select = styled.select`
  height: 100%;
  outline: none;
  border: 0;
  cursor: pointer;
  appearance: none;
  padding-left: 1rem;
  width: 100%;
  outline: 0;
  border: 0;
  position: relative;
  transition: all 0.25s ease;
`;

const Option = styled.option.attrs({
  className: 'option',
})`
  outline: none;
  border: transparent;
`;

const FouterBounce = styled.h5`
  padding: 1rem;
`;

export {
  Main,
  NavegationContainer,
  FouterBounce,
  Option,
  SearchContainer,
  Select,
  ContainerSelect,
  SearchInput,
};
