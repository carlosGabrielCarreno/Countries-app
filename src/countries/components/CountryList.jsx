import { useEffect, useState } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { v4 as uuidv4 } from 'uuid';
import { options } from '../helpers';
import { useFetchCountris } from '../hooks/useFetchCountris';
import styled from 'styled-components';
import { CountryCard } from './CountryCard';
/*  */
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../GlobalStyles';
import {
  lightTheme,
  darkTheme,
  segundoBakcgroundDark,
  segundoBakcgroundLight,
} from '../../Themes';
/*  */
import { useDarkMode } from '../hooks/useDarkMode';
import { RestartAltIconContainer } from './RestartAltIconContainer';
//import Toggle from '../../Toggler';

/*  */
let themeMode;
/*  */

/* navBar */
const Title = styled.h1`
  font-size: 1em;
  @media (min-width: 600px) {
    font-size: 1.4em;
  }
`;

const Header = styled.div.attrs({
  className: 'header',
})`
  /* padding: 0.2rem; */
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 10vh;
  /* border: solid green; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #fff; */
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  /* border: solid red; */
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
  /* border: solid red; */
  @media (min-width: 400px) {
    width: 7rem;
  }
`;

const Paragraph = styled.p`
  font-weight: 300;
`;

/*  */
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  /* border: solid red; */
  /* margin: 1.5rem 0 0 0; */
`;

const ContainerCountries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  /* margin-bottom: 1rem; */
  /* border: solid red; */
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
    width: 85%;
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    width: 85%;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    width: 85%;
  }
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    width: 85%;
  }
`;

const NavegationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 85%;
  height: 17vh;
  /* border: solid red; */
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const SearchContainer = styled.div.attrs({
  className: 'searchContainer',
})`
  display: flex;
  /* border: solid blue; */
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
  /* border: solid green; */
  ::placeholder {
    padding-left: 1rem;
    /* color: #7b7b7b; */
  }
`;

const SearchIcon = styled.div.attrs({
  className: 'searchIcon',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  /* color: #7b7b7b; */
  /* border: solid red; */
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
  /* border: solid red; */
  height: 100%;
  outline: none;
  border: 0;
  cursor: pointer;
  appearance: none;
  padding-left: 1rem;
  width: 100%;
  outline: 0;
  border: 0;
  /* color: #7b7b7b; */
  /* font-size: 1em; */
  position: relative;
  transition: all 0.25s ease;
`;

const Option = styled.option.attrs({
  className: 'option',
})`
  /* border: solid green; */
  /* color: #7b7b7b; */
  /* padding: 1rem; */
  outline: none;
  border: transparent;
  /* font-size: 1rem; */
`;

const FouterBounce = styled.h5`
  padding: 1rem;
`;
/*  */

export const CountryList = ({ continent, setContinent }) => {
  const [search, setSearch] = useState('');
  const [isDark, setIsDark] = useState(false);
  const { countries, isLoading, searchFilters } = useFetchCountris(continent);
  /*  */
  /*   const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }; */
  /*  */

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  themeMode = theme === 'light' ? lightTheme : darkTheme;

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

  const onDarkAnimation = () => {
    setIsDark((oldIsDark) => !oldIsDark);
  };

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
                    <Button /* onClick={themeToggler} */>
                      <div
                        className={`${
                          isDark ? 'animate__animated animate__rotateIn' : ''
                        }`}
                        onClick={onDarkAnimation}
                      >
                        <DarkModeOutlinedIcon
                          color={`${
                            theme !== 'light' ? 'primary' : 'disabled'
                          }`}
                        />
                      </div>
                      <Paragraph>Dark Mode</Paragraph>
                    </Button>
                  </div>
                </HeaderContainer>
              </Header>
              <NavegationContainer>
                <SearchContainer>
                  <SearchIcon>
                    <SearchTwoToneIcon
                      color={`${theme !== 'light' ? 'primary' : 'disabled'}`}
                    />
                  </SearchIcon>
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
              <ContainerCountries>
                {countries?.map((country) => (
                  <CountryCard key={country.name} {...country} />
                ))}
              </ContainerCountries>
            </>
          )}
          <h5>Created by very much love ❣️</h5>
        </Main>
      </>
    </ThemeProvider>
  );
};
