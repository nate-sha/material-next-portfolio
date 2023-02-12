import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
// The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  let budget = 0;
  switch (action.type) {
    // Handle Theme Change
    case "TOGGLE_DARK_MODE":
      action.type = "DONE";
      state.darkMode = !state.darkMode;
      return {
        ...state,
      };
    // Handle Budget Project
    // 1. Add Expense
    case "ADD_EXPENSE":
      let total_budget = 0;
      total_budget = state.budgetProject.expenses.reduce(
        (previousExp, currentExp) => {
          return previousExp + currentExp.cost;
        },
        0
      );
      total_budget = total_budget + action.payload.cost;
      action.type = "DONE";
      if (total_budget <= state.budgetProject.budget) {
        total_budget = 0;
        state.budgetProject.expenses.map((currentExp) => {
          if (currentExp.name === action.payload.name) {
            currentExp.cost = action.payload.cost + currentExp.cost;
          }
          return currentExp;
        });
        return {
          ...state,
        };
      } else {
        alert("Cannot increase the allocation! Out of funds");
        return {
          ...state,
        };
      }
    case "RED_EXPENSE":
      const red_expenses = state.budgetProject.expenses.map((currentExp) => {
        if (
          currentExp.name === action.payload.name &&
          currentExp.cost - action.payload.cost >= 0
        ) {
          currentExp.cost = currentExp.cost - action.payload.cost;
          budget = state.budgetProject.budget + action.payload.cost;
        }
        return currentExp;
      });
      action.type = "DONE";
      return {
        ...state,
        ...state.budgetProject,
        expenses: [...red_expenses],
      };
    case "DELETE_EXPENSE":
      action.type = "DONE";
      state.budgetProject.expenses.map((currentExp) => {
        if (currentExp.name === action.payload) {
          budget = state.budgetProject.budget + currentExp.cost;
          currentExp.cost = 0;
        }
        return currentExp;
      });
      action.type = "DONE";
      return {
        ...state,
        ...state.budgetProject,
        budget,
      };
    case "SET_BUDGET":
      action.type = "DONE";
      state.budgetProject.budget = action.payload;
      return {
        ...state,
      };

    case "CHG_CURRENCY":
      action.type = "DONE";
      state.budgetProject.currency = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};

// Sets the initial state when the app loads
const initialState = {
  darkMode: false,
  global: {
    name: process.env.NEXT_PUBLIC_NAME,
    title: process.env.NEXT_PUBLIC_PORTFOLIO_TITLE,
    description: process.env.NEXT_PUBLIC_PORTFOLIO_DESCRIPTION,
  },
  budgetProject: {
    budget: 100000,
    expenses: [
      { id: "Marketing", name: "Marketing", cost: 50 },
      { id: "Finance", name: "Finance", cost: 300 },
      { id: "Sales", name: "Sales", cost: 70 },
      { id: "Human Resource", name: "Human Resource", cost: 40 },
      { id: "IT", name: "IT", cost: 500 },
    ],
    currency: "$",
  },
};

// Create the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// Context Provider - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
const AppProvider = ({ children }) => {
  //  Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);
  let remaining = 0;

  if (state.budgetProject.expenses) {
    const totalExpenses = state.budgetProject.expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
    remaining = state.budgetProject.budget - totalExpenses;
  }

  return (
    <AppContext.Provider
      value={{
        state,
        remaining: remaining,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
