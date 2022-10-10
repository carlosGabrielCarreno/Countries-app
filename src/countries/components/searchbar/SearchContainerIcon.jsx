import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { stylesSearchContainerIcon } from './stylesSearchContainerIcon';

// styles
const { SearchIcon } = stylesSearchContainerIcon;

export const SearchContainerIcon = ({ theme }) => {
  return (
    <SearchIcon>
      <SearchTwoToneIcon
        color={`${theme !== 'light' ? 'primary' : 'disabled'}`}
      />
    </SearchIcon>
  );
};
