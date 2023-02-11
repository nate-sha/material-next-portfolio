import { useContext } from "react";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import { SettingsContext } from "@/context/settingsContext";
import ThemeModeSwitch from "./ThemeModeSwitch";

export default function AppBar() {
  const { settings } = useContext(SettingsContext);
  return (
    <MuiAppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            // Transform the text to uppercase
            textTransform: "uppercase",
            // Add letter spacing
            letterSpacing: "0.2em",
          }}
        >
          {settings.name}
        </Typography>
        <ThemeModeSwitch />
      </Toolbar>
    </MuiAppBar>
  );
}
