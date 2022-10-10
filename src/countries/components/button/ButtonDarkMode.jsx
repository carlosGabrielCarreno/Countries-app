import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState } from 'react';
import { stylesButtonDarkMode } from './stylesButtonDarkMode';

// styles
const { Button, Paragraph } = stylesButtonDarkMode;

export const ButtonDarkMode = ({ theme }) => {
  const [isDark, setIsDark] = useState(false);

  const onDarkAnimation = () => {
    console.log('hola');
    setIsDark((oldIsDark) => !oldIsDark);
  };
  return (
    <Button>
      <div
        className={`${isDark ? 'animate__animated animate__rotateIn' : ''}`}
        onClick={onDarkAnimation}
      >
        <DarkModeOutlinedIcon
          color={`${theme !== 'light' ? 'primary' : 'disabled'}`}
        />
      </div>
      <Paragraph>Dark Mode</Paragraph>
    </Button>
  );
};
