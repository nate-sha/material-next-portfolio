import React, { useContext } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import { AppContext } from "@/context/AppContext";

export default function Card({
  itemName,
  itemAmount,
  currency,
  isReadOnly,
  handleChange,
}) {
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor={`label-for-${itemName}`}>
        {itemName.toUpperCase()}
      </InputLabel>
      <OutlinedInput
        id={`label-for-${itemName}`}
        name={itemName}
        value={itemAmount}
        variant="filled"
        type="number"
        disabled={isReadOnly ? true : false}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">{currency}</InputAdornment>
        }
        //   Set the step to 1
        inputProps={{ step: 5000 }}
        label={itemName}
      />
    </FormControl>
  );
}

Card.propTypes = {
  itemName: PropTypes.string,
  itemAmount: PropTypes.number,
  isReadOnly: PropTypes.bool,
  handleChange: PropTypes.func,
};
