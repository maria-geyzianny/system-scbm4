import { createTheme } from "@mui/material/styles";
import { yellow, cyan, red } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#90a4ae",
      dark: "#90a4ae",
      light: "#90a4ae",
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
});
