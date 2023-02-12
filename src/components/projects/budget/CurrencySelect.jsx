import { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { AppContext } from "@/context/AppContext";

import { currencies } from "@/config/constants";

export default function CurrencySelect() {
  const { state, dispatch } = useContext(AppContext);
  const handleChangeCurrency = (event) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
  };
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="outlined-select-currency"
        select
        label="CURRENCY"
        value={state.budgetProject.currency}
        onChange={handleChangeCurrency}
      >
        {currencies.map((option) => (
          <MenuItem
            key={`${option.value}-${option.label}`}
            value={option.label}
          >
            {option.label} - {option.value}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
