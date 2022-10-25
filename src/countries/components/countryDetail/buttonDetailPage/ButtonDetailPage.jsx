import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import HomeIcon from '@mui/icons-material/Home';
/* styles */
import { Button } from './ButtonDetailPage.styled';

export const ButtonDetailPage = ({ onNavigate, theme, name }) => {
  return (
    <Button onClick={onNavigate}>
      {name === 'Back' ? (
        <>
          <KeyboardBackspaceIcon
            color={`${theme !== 'light' ? 'primary' : 'disabled'}`}
            fontSize="small"
          />
        </>
      ) : (
        <>
          <HomeIcon
            color={`${theme !== 'light' ? 'primary' : 'disabled'}`}
            fontSize="small"
          />
        </>
      )}
    </Button>
  );
};
