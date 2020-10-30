import Home from "./pages/Home";
import { ThemeProvider } from "emotion-theming";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
