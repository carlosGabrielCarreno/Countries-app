import { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { v4 as uuidv4 } from 'uuid';
import { options } from '../../helpers';
import { useFetchCountris } from '../../hooks/useFetchCountris';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../../GlobalStyles';
import { lightTheme, darkTheme } from '../../../Themes';
import { useDarkMode } from '../../hooks/useDarkMode';
import { RestartAltIconContainer } from '../load/RestartAltIconContainer';
import { CountriesList, SearchContainerIcon, ButtonDarkMode } from '../index';

// styles
import { HeaderContainer, Title, Header } from './HeaderComponent.styles';

import {
  ContainerSelect,
  FouterBounce,
  Main,
  NavegationContainer,
  Option,
  SearchContainer,
  SearchInput,
  Select,
} from './Countries.styled';

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
          <FouterBounce>Created by Gabriel Carreño 🤙</FouterBounce>
        </Main>
      </>
    </ThemeProvider>
  );
};
