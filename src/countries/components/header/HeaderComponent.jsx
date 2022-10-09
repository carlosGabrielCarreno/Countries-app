import { useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import styled from 'styled-components';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

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

export const HeaderComponent = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const [isDark, setIsDark] = useState(false);

  const onDarkAnimation = () => {
    setIsDark((oldIsDark) => !oldIsDark);
  };

  if (!mountedComponent) return <div />;

  return (
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
                color={`${theme !== 'light' ? 'primary' : 'disabled'}`}
              />
            </div>
            <Paragraph>Dark Mode</Paragraph>
          </Button>
        </div>
      </HeaderContainer>
    </Header>
  );
};
