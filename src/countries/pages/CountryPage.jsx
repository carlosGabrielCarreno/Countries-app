import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useFetchCountryByName } from '../hooks/useFetchCountryByName';
import styled from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';
/*  */
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../GlobalStyles';
import { darkTheme, lightTheme } from '../../Themes';

/*  */
import countryPage from '../styled/CountryPage';
import { ButtonDetailPage } from '../components';
/*  */
const {
  CountryDetailContainer,
  ButtonsContainer,
  DetailContainer,
  Img,
  DataContainer,
  RawData1,
  RawData2,
  RawData3,
  Paragraph,
  Text,
  BorderTitle,
  ContainerBordersButtons,
  ButtonBorder,
} = countryPage;

const TitleName = styled.h1`
  grid-area: area1;
  font-size: 2.6rem;

  @media (min-width: 800px) {
    margin: 0;
    font-size: 2rem;
  }
  @media (min-width: 1000px) {
    width: 100%;
    margin: 0;
    /* font-size: 1.9rem; */
  }
`;

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
                <ButtonDetailPage
                  onNavigate={onNavigateBack}
                  theme={theme}
                  name={'Back'}
                />
                <ButtonDetailPage
                  onNavigate={onNavigateHome}
                  theme={theme}
                  name={'Home'}
                />
              </ButtonsContainer>
              <DetailContainer>
                {/* <ContainerImg> */}
                <Img
                  src={countryDetail.flag}
                  alt={countryDetail.name}
                  width="400"
                />
                {/* </ContainerImg> */}
                <DataContainer>
                  <TitleName>{countryDetail.name}</TitleName>
                  <RawData1>
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
                  </RawData1>
                  <RawData2>
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
                  </RawData2>
                  <RawData3>
                    {!countryDetail.borders ? (
                      <BorderTitle>Not Borders</BorderTitle>
                    ) : (
                      <>
                        <BorderTitle>Borders:</BorderTitle>
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
                  </RawData3>
                </DataContainer>
              </DetailContainer>
            </>
          )}
        </CountryDetailContainer>
      </>
    </ThemeProvider>
  );
};
