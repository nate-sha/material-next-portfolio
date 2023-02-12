import { useContext } from "react";
import PropTypes from "prop-types";
import { TableRow, TableCell, IconButton, Stack, Tooltip } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import { AppContext } from "@/context/AppContext";

const AllocationTextField = ({ name, id }) => {
  const { dispatch } = useContext(AppContext);
  const incrementAllocation = (name) => {
    const expense = {
      name: name,
      cost: 1000,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decrementAllocation = (name) => {
    const expense = {
      name: name,
      cost: 1000,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  return (
    <Stack direction="row">
      <Tooltip title="Increase by 1,000" arrow>
        <IconButton
          aria-label="add"
          onClick={() => incrementAllocation(name)}
          size="small"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Decrease by 1,000" arrow>
        <IconButton
          aria-label="remove"
          onClick={() => decrementAllocation(name)}
          size="small"
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Reset to 0" arrow>
        <IconButton
          aria-label="close"
          onClick={() => handleDeleteExpense(id)}
          size="small"
        >
          <RestartAltIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

const ExpenseItem = ({ id, name, cost }) => {
  const { state } = useContext(AppContext);

  return (
    <TableRow key={`${id}-${name}`}>
      <TableCell>{name}</TableCell>
      <TableCell>
        {state.budgetProject.currency} {cost}
      </TableCell>
      <TableCell
        align="right"
        sx={{
          display: "flex",
        }}
      >
        <AllocationTextField name={name} value={cost} id={id} />
      </TableCell>
    </TableRow>
  );
};

ExpenseItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  cost: PropTypes.number,
};

export default ExpenseItem;
