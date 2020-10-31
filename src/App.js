import Home from "./pages/Home";
import { ThemeProvider } from "emotion-theming";
import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";
import * as React from "react";

function App() {
  const [isDark, setDark] = React.useState(false);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Home isDark={isDark} setDark={setDark} />
    </ThemeProvider>
  );
}

export default App;
