import countryPage from '../../styled/CountryPage';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import HomeIcon from '@mui/icons-material/Home';

export const ButtonDetailPage = ({ onNavigate, theme, name }) => {
  const { Button } = countryPage;
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
      {name}
    </Button>
  );
};
