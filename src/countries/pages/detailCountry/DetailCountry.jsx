import { ThemeProvider } from "styled-components";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useFetchCountryByName, useDarkMode } from "../../hooks";
import { RestartAltIconContainer } from "../../components";
import { GlobalStyles } from "../../../GlobalStyles";
import { darkTheme, lightTheme } from "../../../Themes";

import {
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
  TitleName,
} from "./DetailCountry.styled";
import { ButtonDetailPage } from "../../components";

export const DetailCountry = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const { countryDetail, isLoading, setIsLoading } =
    useFetchCountryByName(name);

  if (!countryDetail) {
    return <Navigate to={"/countries"} />;
  }

  const onNavigateHome = () => {
    navigate("/");
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
            <RestartAltIconContainer />
          ) : (
            <>
              {countryDetail.name && countryDetail.flag ? (
                <>
                  <ButtonsContainer>
                    <ButtonDetailPage
                      onNavigate={onNavigateBack}
                      theme={theme}
                      name={"Back"}
                    />
                    <ButtonDetailPage
                      onNavigate={onNavigateHome}
                      theme={theme}
                      name={"Home"}
                    />
                  </ButtonsContainer>
                  <DetailContainer>
                    <Img
                      src={countryDetail.flag}
                      alt={countryDetail.name}
                      width="400"
                    />
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
                          TopLevelDomain:{" "}
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
              ) : (
                <>
                  <ButtonsContainer>
                    <ButtonDetailPage
                      onNavigate={onNavigateBack}
                      theme={theme}
                      name={"Back"}
                    />
                    <ButtonDetailPage
                      onNavigate={onNavigateHome}
                      theme={theme}
                      name={"Home"}
                    />
                  </ButtonsContainer>
                  <DetailContainer>
                    <TitleName>
                      Country Not Found <SentimentVeryDissatisfiedIcon />
                    </TitleName>
                  </DetailContainer>
                </>
              )}
            </>
          )}
        </CountryDetailContainer>
      </>
    </ThemeProvider>
  );
};
