import { useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { stylesHeaderComponent } from './stylesHeaderComponent';

// styles
const { HeaderContainer, Title, Button, Paragraph, Header } =
  stylesHeaderComponent;

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
          <Button>
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
