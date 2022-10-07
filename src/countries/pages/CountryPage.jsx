import HomeIcon from '@mui/icons-material/Home';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useFetchCountryByName } from '../hooks/useFetchCountryByName';
import styled from 'styled-components';

const CountryDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid red;
  width: 90vw;
  margin: 1.5rem auto;
  gap: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
`;

const Button = styled.button`
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
`;

const DetailContainer = styled.div`
  /* border: solid red; */
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 40vh;
`;

const DataContainer = styled.div`
  border: solid red;
`;

export const CountryPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const { countryDetail, isLoading } = useFetchCountryByName(name);

  if (!countryDetail) {
    return <Navigate to={'/countries'} />;
  }

  const onNavigateHome = () => {
    navigate('/');
  };

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <CountryDetailContainer>
      {isLoading ? (
        <h1>loading detail</h1>
      ) : (
        <>
          <ButtonsContainer>
            <Button onClick={onNavigateBack}>
              <KeyboardBackspaceIcon fontSize="small" /> Back
            </Button>

            <Button onClick={onNavigateHome}>
              <HomeIcon fontSize="small" /> Home
            </Button>
          </ButtonsContainer>
          <DetailContainer>
            <Img
              src={countryDetail.flag}
              alt={countryDetail.name}
              width="400"
            />
            <h1>{countryDetail.name}</h1>
            <DataContainer>
              <ul>
                <li>
                  nativeName: <span> {countryDetail.nativeName}</span>
                </li>
                <li>
                  population: <span> {countryDetail.population}</span>
                </li>
                <li>
                  region: <span> {countryDetail.region}</span>
                </li>
                <li>
                  subregion: <span> {countryDetail.subregion}</span>
                </li>
                <li>
                  capital: <span> {countryDetail.capital}</span>
                </li>
                <li>
                  topLevelDomain: <span> {countryDetail.topLevelDomain}</span>
                </li>
                <li>
                  currencies: <span> {countryDetail.currencies}</span>
                </li>
                <li>
                  languages: <span> {countryDetail.languages}</span>
                </li>
              </ul>
            </DataContainer>
            <div>
              {!countryDetail.borders ? (
                <h2>Not Borders</h2>
              ) : (
                <>
                  <h2>Border Countries</h2>
                  {countryDetail.borders?.map((borde, i) => (
                    <Link
                      to={`/country/${borde.toLowerCase()}`}
                      key={borde + i}
                    >
                      {borde}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </DetailContainer>
        </>
      )}
    </CountryDetailContainer>
  );
};
