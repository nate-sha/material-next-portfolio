import { useContext } from "react";
import PropTypes from "prop-types";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { SettingsContext } from "@/context/settingsContext";

export default function ThemeProvider({ children }) {
  const { settings } = useContext(SettingsContext);
  let theme = createTheme({
    palette: {
      mode: settings.darkMode ? "dark" : "light",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
    typography: {
      h1: {
        fontSize: "3rem",
      },
    },
  });
  // Make the font size responsive
  theme = responsiveFontSizes(theme);
  return (
    <MuiThemeProvider theme={theme}>
      {/* The CssBaseline component helps to kickstart an elegant, consistent, and simple baseline to build upon.
        https://mui.com/material-ui/react-css-baseline/
      */}
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
