import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1em;
`;

const Header = styled.div`
  /* padding: 0.2rem; */
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 10vh;
  /* border: solid green; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  /* border: solid red; */
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 28vw;
`;

const Paragraph = styled.p`
  font-weight: 300;
`;

export const NavBar = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Title>Where in the world?</Title>
          <Button>
            <DarkModeOutlinedIcon />
            <Paragraph>Dark Mode</Paragraph>
          </Button>
        </HeaderContainer>
      </Header>
    </>
  );
};
