import { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { SettingsContext } from "@/context/settingsContext";

export default function ThemeModeSwitch() {
  const { settings, setSettings } = useContext(SettingsContext);
  const toggleDarkMode = () => {
    setSettings({ ...settings, darkMode: !settings.darkMode });
  };
  return (
    <Box>
      <IconButton
        onClick={toggleDarkMode}
        disableRipple
        sx={{
          color: "white",
        }}
      >
        {settings.darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Box>
  );
}
