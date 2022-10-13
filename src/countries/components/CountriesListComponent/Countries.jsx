import { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { v4 as uuidv4 } from 'uuid';
import { options } from '../../helpers';
import { useFetchCountris } from '../../hooks/useFetchCountris';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../../GlobalStyles';
import { lightTheme, darkTheme } from '../../../Themes';
import { useDarkMode } from '../../hooks/useDarkMode';
import { RestartAltIconContainer } from './../RestartAltIconContainer';
import { CountriesList, SearchContainerIcon, ButtonDarkMode } from '../index';
import { stylesHeaderComponent } from './stylesHeaderComponent';

// styles
const { HeaderContainer, Title, Button, Paragraph, Header } =
  stylesHeaderComponent;

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

export const Countries = ({ continent, setContinent }) => {
  const [search, setSearch] = useState('');
  const { countries, isLoading, searchFilters } = useFetchCountris(continent);

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onChangeOption = (event) => {
    setContinent(event.target.value);
    setSearch('');
  };

  useEffect(() => {
    searchFilters(search, continent);
  }, [search]);

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Main>
          {isLoading ? (
            <RestartAltIconContainer />
          ) : (
            <>
              <Header>
                <HeaderContainer>
                  <Title>Where in the world?</Title>
                  <div onClick={themeToggler}>
                    <ButtonDarkMode theme={theme} />
                  </div>
                </HeaderContainer>
              </Header>
              <NavegationContainer>
                <SearchContainer>
                  <SearchContainerIcon theme={theme} />
                  <SearchInput
                    type="text"
                    placeholder="Search for a country..."
                    value={search}
                    onChange={onChangeSearch}
                  />
                </SearchContainer>
                <ContainerSelect>
                  <Select value={continent} onChange={onChangeOption}>
                    {options.map((option) => (
                      <Option key={uuidv4()} value={option.value}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>
                  <ExpandMoreIcon
                    color={`${theme !== 'light' ? 'primary' : 'disabled'}`}
                  />
                </ContainerSelect>
              </NavegationContainer>
              <CountriesList countries={countries} />
            </>
          )}
          <h5>Created with very much love ❣️</h5>
        </Main>
      </>
    </ThemeProvider>
  );
};
