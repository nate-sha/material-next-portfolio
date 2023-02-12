import { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { AppContext } from "@/context/AppContext";

export default function ThemeModeSwitch() {
  const { state, dispatch } = useContext(AppContext);
  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
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
        {state.darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Box>
  );
}
