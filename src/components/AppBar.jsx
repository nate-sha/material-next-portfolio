import { useContext } from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { AppContext } from "@/context/AppContext";
import ThemeModeSwitch from "./ThemeModeSwitch";

export default function AppBar() {
  const { state } = useContext(AppContext);
  return (
    <MuiAppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component={MuiLink}
          href="/"
          underline="none"
          color="inherit"
          sx={{
            flexGrow: 1,
            // Transform the text to uppercase
            textTransform: "uppercase",
            // Add letter spacing
            letterSpacing: "0.2em",
          }}
        >
          {state.global.name}
        </Typography>
        <ThemeModeSwitch />
      </Toolbar>
    </MuiAppBar>
  );
}
