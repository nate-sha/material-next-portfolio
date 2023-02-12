import { useContext, useState } from "react";
import { Box, Grid, Divider, Popover, Typography } from "@mui/material";
import { AppContext } from "@/context/AppContext";
import Card from "@/components/projects/budget/BudgetCard";
import CurrencySelect from "./CurrencySelect";
import AllocationTable from "./AllocationTable";

export default function Budget() {
  const { state, remaining, dispatch } = useContext(AppContext);
  const { budget, expenses, currency } = state.budgetProject;
  const [newBudget, setNewBudget] = useState(budget);
  // Popover
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverMessage, setPopoverMessage] = useState("");
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // Calculate the total expenses
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetInput = (event) => {
    event.preventDefault();
    const value = parseInt(event.target.value);
    setNewBudget(value);
    if (newBudget > remaining + totalExpenses) {
      // Open the popover and set the message
      setAnchorEl(event.currentTarget);
      setPopoverMessage(
        `The value cannot exceed remaining funds ${currency} + ${remaining}`
      );
      setNewBudget(budget);
      return;
    } else if (newBudget < totalExpenses) {
      // Open the popover and set the message
      setAnchorEl(event.currentTarget);
      setPopoverMessage(`The value cannot be less than the spending`);
      setNewBudget(budget);
      return;
    }
    // Dispatch the action to update the budget
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item xs={6} sm={3}>
          <Card
            itemName="Budget"
            itemAmount={budget}
            handleChange={handleBudgetInput}
            currency={currency}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography
              sx={{
                padding: 1,
              }}
            >
              {popoverMessage}
            </Typography>
          </Popover>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card
            itemName="Expenses"
            itemAmount={totalExpenses}
            isReadOnly
            currency={currency}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card
            itemName="Remaining"
            itemAmount={remaining}
            isReadOnly
            currency={currency}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CurrencySelect />
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <AllocationTable rows={expenses} />
    </Box>
  );
}
