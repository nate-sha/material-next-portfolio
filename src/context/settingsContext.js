import { createContext, useState } from "react";

export const SettingsContext = createContext();

export default function SettingsProvider({ children }) {
  // [TODO]: add the ability to detect the user's preferred color scheme
  // Check the user's preferred color scheme is dark and retrun true, otherwise return false
  // const preferesDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // Set the initial state of the settings context
  const [settings, setSettings] = useState({
    name: process.env.NEXT_PUBLIC_NAME,
    title: process.env.NEXT_PUBLIC_PORTFOLIO_TITLE,
    description: process.env.NEXT_PUBLIC_PORTFOLIO_DESCRIPTION,
    darkMode: false,
  });
  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
