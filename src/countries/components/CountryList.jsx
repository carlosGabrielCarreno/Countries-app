import { useEffect, useState } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { v4 as uuidv4 } from 'uuid';
import { options } from '../helpers';
import { useFetchCountris } from '../hooks/useFetchCountris';
import styled from 'styled-components';
import { CountryCard } from './CountryCard';

/*  */
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: solid red; */
  gap: 4rem;
  margin: 1.5rem 0 0 0;
`;

const NavegationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 85%;
  height: 17vh;
  /* border: solid red; */
`;

const SearchContainer = styled.div`
  display: flex;
  /* border: solid blue; */
  width: 100%;
  height: 6vh;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const SearchInput = styled.input`
  outline: none;
  border: 0;
  width: 100%;
  cursor: pointer;
  /* border: solid green; */
  ::placeholder {
    padding-left: 1rem;
    color: #7b7b7b;
  }
`;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: #7b7b7b;
`;

const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  background-color: #fff;
  height: 6vh;

  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  padding-right: 1rem;
`;

const Select = styled.select`
  /* border: solid red; */
  background-color: #fff;
  height: 100%;
  outline: none;
  border: 0;
  cursor: pointer;
  appearance: none;
  padding-left: 1rem;
  width: 100%;
  outline: 0;
  border: 0;
  color: #7b7b7b;
  /* font-size: 1em; */
  position: relative;
  transition: all 0.25s ease;
`;

const Option = styled.option`
  /* border: solid green; */
  color: #7b7b7b;
  /* padding: 1rem; */
  outline: none;
  border: transparent;
  /* font-size: 1rem; */
`;
/*  */

export const CountryList = ({ continent, setContinent }) => {
  const [search, setSearch] = useState('');
  const { countries, isLoading, searchFilters } = useFetchCountris(continent);

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

  return (
    <Main>
      {isLoading ? (
        <RestartAltIcon
          className="animate__animated animate__rotateOut"
          fontSize="large" /* color="disabled" */
        />
      ) : (
        <>
          <NavegationContainer>
            <SearchContainer>
              <SearchIcon>
                <SearchTwoToneIcon />
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
              <ExpandMoreIcon />
            </ContainerSelect>
          </NavegationContainer>
          {countries?.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
        </>
      )}
    </Main>
  );
};
