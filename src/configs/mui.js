// muiTheme.js
import { createTheme } from "@mui/material/styles";

// Define your custom MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#FE7A36", // Example primary color
    },
    secondary: {
      main: "#3652AD", // Example secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
