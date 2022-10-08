import HomeIcon from '@mui/icons-material/Home';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useFetchCountryByName } from '../hooks/useFetchCountryByName';
import styled from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';
/*  */
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../GlobalStyles';
import { darkTheme, lightTheme } from '../../Themes';

//
const CountryDetailContainer = styled.div.attrs({
  className: 'animate__animated animate__pulse',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: solid red; */
  width: 85vw;
  margin: 1.5rem auto;
  gap: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
`;

const Button = styled.button.attrs({
  className: 'button',
})`
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
  cursor: pointer;
`;

const DetailContainer = styled.div.attrs({
  className: 'animate__animated animate__fadeIn',
})`
  /* border: solid red; */
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 30%;
`;

const DataContainer = styled.div`
  /* border: solid red; */
`;

const RawData = styled.div`
  height: 100%;
  /* border: solid green; */
  margin: 1.5rem 0;
`;

const Paragraph = styled.p`
  font-weight: 600;
  padding: 0.3rem 0;
`;

const Text = styled.span`
  font-weight: 300;
`;

const BorderTitle = styled.h3`
  font-weight: 600;
`;

const ContainerBordersButtons = styled.div`
  /* border: solid green; */
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const ButtonBorder = styled(Link).attrs({
  className: 'buttonBorder',
})`
  outline: none;
  background-color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;
  color: hsl(200, 15%, 8%);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  margin: 0.1rem;
  padding: 0.3rem;
  border: 0;
  /* width: 100vw; */
  text-align: center;
`;
//

export const CountryPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const { countryDetail, isLoading, setIsLoading } =
    useFetchCountryByName(name);

  if (!countryDetail) {
    return <Navigate to={'/countries'} />;
  }

  const onNavigateHome = () => {
    navigate('/');
  };

  const onNavigateBack = () => {
    setIsLoading(true);
    navigate(-1);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <CountryDetailContainer>
          {isLoading ? (
            <RestartAltIcon
              className="animate__animated animate__rotateOut"
              fontSize="large" /* color="disabled" */
            />
          ) : (
            <>
              <ButtonsContainer>
                <Button onClick={onNavigateBack}>
                  <KeyboardBackspaceIcon
                    color={`${theme !== 'light' ? 'primary' : 'disabled'}`}
                    fontSize="small"
                  />{' '}
                  Back
                </Button>

                <Button onClick={onNavigateHome}>
                  <HomeIcon
                    fontSize="small"
                    color={`${theme !== 'light' ? 'primary' : 'disabled'}`}
                  />
                  Home
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
                  <RawData>
                    <Paragraph>
                      NativeName: <Text> {countryDetail.nativeName}</Text>
                    </Paragraph>
                    <Paragraph>
                      Population: <Text> {countryDetail.population}</Text>
                    </Paragraph>
                    <Paragraph>
                      Region: <Text> {countryDetail.region}</Text>
                    </Paragraph>
                    <Paragraph>
                      Subregion: <Text> {countryDetail.subregion}</Text>
                    </Paragraph>
                    <Paragraph>
                      Capital: <Text> {countryDetail.capital}</Text>
                    </Paragraph>
                  </RawData>
                  <RawData>
                    <Paragraph>
                      TopLevelDomain:{' '}
                      <Text> {countryDetail.topLevelDomain}</Text>
                    </Paragraph>
                    <Paragraph>
                      Currencies: <Text> {countryDetail.currencies}</Text>
                    </Paragraph>
                    <Paragraph>
                      Languages: <Text> {countryDetail.languages}</Text>
                    </Paragraph>
                  </RawData>
                  <RawData>
                    {!countryDetail.borders ? (
                      <BorderTitle>Not Borders</BorderTitle>
                    ) : (
                      <>
                        <BorderTitle>Border Countries</BorderTitle>
                        <ContainerBordersButtons>
                          {countryDetail.borders?.map((borde, i) => (
                            <ButtonBorder
                              onClick={() => setIsLoading(true)}
                              to={`/country/${borde.toLowerCase()}`}
                              key={borde + i}
                            >
                              {borde}
                            </ButtonBorder>
                          ))}
                        </ContainerBordersButtons>
                      </>
                    )}
                  </RawData>
                </DataContainer>
              </DetailContainer>
            </>
          )}
        </CountryDetailContainer>
      </>
    </ThemeProvider>
  );
};
