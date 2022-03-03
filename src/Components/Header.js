import styled from "styled-components";
import Container from "./styles/Container.styled";
import Button from "./styles/Button.styled";

const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.header};
    padding: 40px 0;
` 

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`

const Logo = styled.img`

`

const Header = () => {
    return <StyledHeader>
        <Container>
            <Nav>
                <Logo src="./images/logo.svg" alt="logo"/>
                <Button>Try it free</Button>
            </Nav>
        </Container>
    </StyledHeader>;
}

export default Header ;