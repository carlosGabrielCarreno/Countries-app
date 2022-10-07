import { useEffect, useState } from 'react';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { v4 as uuidv4 } from 'uuid';
import { options } from '../helpers';
import { useFetchCountris } from '../hooks/useFetchCountris';
import styled from 'styled-components';
import { CountryCard } from './CountryCard';

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
  width: 90%;
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
  /* border: solid green; */
  ::placeholder {
    padding-left: 1rem;
    color: hsl(200, 15%, 8%);
  }
`;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const Select = styled.select`
  /* border: solid red; */
  width: 55%;
  height: 30%;
  height: 6vh;
  outline: none;
  border: 0;
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const Option = styled.option`
  /* border: solid green; */
  color: hsl(200, 15%, 8%);
  outline: none;
  border: 0;
`;

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
        <h1>loading</h1>
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
            <Select value={continent} onChange={onChangeOption}>
              <Option hidden selected>
                Filter by Region
              </Option>
              {options.map((option) => {
                if (option.label === 'Filter by Region') {
                  return (
                    <Option
                      hidden
                      disabled
                      selected
                      key={uuidv4()}
                      value={option.value}
                    >
                      {option.label}
                    </Option>
                  );
                } else {
                  return (
                    <Option key={uuidv4()} value={option.value}>
                      {option.label}
                    </Option>
                  );
                }
              })}
            </Select>
          </NavegationContainer>
          {countries?.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
        </>
      )}
    </Main>
  );
};
