import styled from "styled-components";
import Container from "./styles/Container.styled";
import Button from "./styles/Button.styled";
import Flex from "./styles/Flex.styled";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.header};
  padding: 40px 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  
  @media(max-width: ${({theme}) => theme.mobile}) {
    margin: 40px 0 30px 0;
  }
`;

const Logo = styled.img`
    
  @media(max-width: ${({theme}) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="img" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
