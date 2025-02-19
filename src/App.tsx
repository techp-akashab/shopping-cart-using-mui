import { Container, Box } from "@mui/material";
import "./App.css";
import { useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar.tsx";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Container>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
export default App;
