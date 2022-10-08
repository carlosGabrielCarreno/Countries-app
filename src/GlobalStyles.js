import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

  

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;

  }
  select{
    background: ${({ theme }) => theme.body};
  }
  div .containerSelect{
    background: ${({ theme }) => theme.body};
  }
  div .searchContainer {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .searchContainer input, .buttonBorder,  .button {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .searchContainer input::placeholder {
    color: ${({ theme }) => theme.text};
  }

  .option {
    color: ${({ theme }) => theme.text};
  }
 

/*   .searchIcon {
    color: ${({ theme }) => theme.text};
  } */

  .header {
    background: ${({ theme }) => theme.body};
    
  } 



  span,  h2, h3, p, select {
    color: ${({ theme }) => theme.text};

  }

   

  `;
