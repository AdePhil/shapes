import Home from "./pages/Home/Home";
import { ThemeProvider } from "emotion-theming";
import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";
import * as React from "react";
import { useLocalStorage } from "./Hooks/useLocalStorage";

function App() {
  const [isDark, setDark] = useLocalStorage("isDark", false);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Home isDark={isDark} setDark={setDark} />
    </ThemeProvider>
  );
}

export default App;
