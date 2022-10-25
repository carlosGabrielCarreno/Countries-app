import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

// styles
import { SearchIcon } from './SearchContainerIcon.styled';

export const SearchContainerIcon = ({ theme }) => {
  return (
    <SearchIcon>
      <SearchTwoToneIcon
        color={`${theme !== 'light' ? 'primary' : 'disabled'}`}
      />
    </SearchIcon>
  );
};
