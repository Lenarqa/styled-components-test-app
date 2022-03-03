import Container from "./Components/styles/Container.styled";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/styles/Global";

const theme = {
  colors: {
    header: "#EBFBFF",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
          <Header />
          <Container>
            <h1>Hello world!</h1>
          </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
