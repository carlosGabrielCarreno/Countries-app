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

const TitleName = styled.h1`
  /* border: solid purple; */
  grid-area: area1;
  @media (min-width: 800px) {
    width: 100%;
    height: 8vh;
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
        <countryPage.CountryDetailContainer>
          {isLoading ? (
            <RestartAltIcon
              className="animate__animated animate__rotateOut"
              fontSize="large" /* color="disabled" */
            />
          ) : (
            <>
              <countryPage.ButtonsContainer>
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
              </countryPage.ButtonsContainer>
              <countryPage.DetailContainer>
                {/* <CountryPage.ContainerImg> */}
                <countryPage.Img
                  src={countryDetail.flag}
                  alt={countryDetail.name}
                  width="400"
                />
                {/* </CountryPage.ContainerImg> */}
                <countryPage.DataContainer>
                  <TitleName>{countryDetail.name}</TitleName>
                  <countryPage.RawData1>
                    <countryPage.Paragraph>
                      NativeName:{' '}
                      <countryPage.Text>
                        {' '}
                        {countryDetail.nativeName}
                      </countryPage.Text>
                    </countryPage.Paragraph>
                    <countryPage.Paragraph>
                      Population:{' '}
                      <countryPage.Text>
                        {' '}
                        {countryDetail.population}
                      </countryPage.Text>
                    </countryPage.Paragraph>
                    <countryPage.Paragraph>
                      Region:{' '}
                      <countryPage.Text>
                        {' '}
                        {countryDetail.region}
                      </countryPage.Text>
                    </countryPage.Paragraph>
                    <countryPage.Paragraph>
                      Subregion:{' '}
                      <countryPage.Text>
                        {' '}
                        {countryDetail.subregion}
                      </countryPage.Text>
                    </countryPage.Paragraph>
                    <countryPage.Paragraph>
                      Capital:{' '}
                      <countryPage.Text>
                        {' '}
                        {countryDetail.capital}
                      </countryPage.Text>
                    </countryPage.Paragraph>
                  </countryPage.RawData1>
                  <countryPage.RawData2>
                    <countryPage.Paragraph>
                      TopLevelDomain:{' '}
                      <countryPage.Text>
                        {' '}
                        {countryDetail.topLevelDomain}
                      </countryPage.Text>
                    </countryPage.Paragraph>
                    <countryPage.Paragraph>
                      Currencies:{' '}
                      <countryPage.Text>
                        {' '}
                        {countryDetail.currencies}
                      </countryPage.Text>
                    </countryPage.Paragraph>
                    <countryPage.Paragraph>
                      Languages:{' '}
                      <countryPage.Text>
                        {' '}
                        {countryDetail.languages}
                      </countryPage.Text>
                    </countryPage.Paragraph>
                  </countryPage.RawData2>
                  <countryPage.RawData3>
                    {!countryDetail.borders ? (
                      <countryPage.BorderTitle>
                        Not Borders
                      </countryPage.BorderTitle>
                    ) : (
                      <>
                        <countryPage.BorderTitle>
                          Border Countries
                        </countryPage.BorderTitle>
                        <countryPage.ContainerBordersButtons>
                          {countryDetail.borders?.map((borde, i) => (
                            <countryPage.ButtonBorder
                              onClick={() => setIsLoading(true)}
                              to={`/country/${borde.toLowerCase()}`}
                              key={borde + i}
                            >
                              {borde}
                            </countryPage.ButtonBorder>
                          ))}
                        </countryPage.ContainerBordersButtons>
                      </>
                    )}
                  </countryPage.RawData3>
                </countryPage.DataContainer>
              </countryPage.DetailContainer>
            </>
          )}
        </countryPage.CountryDetailContainer>
      </>
    </ThemeProvider>
  );
};
