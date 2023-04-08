import React, { useReducer, useEffect, useMemo } from "react";

export const GlobalContext = React.createContext({
  theme: "light",
  data: [],
  changeTheme: () => {},
});

const defaultContextState = {
  theme: "light",
  data: [],
};

const contextReducer = (state = defaultContextState, action) => {
  switch (action.type) {
    case "THEME":
      return {
        theme: action.theme === "light" ? "dark" : "light",
        data: state.data,
      };
    case "DATA":
      return {
        theme: defaultContextState.theme,
        data: [...action.data],
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, defaultContextState);

  const switchTheme = (theme) => {
    dispatch({ type: "THEME", theme });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error(`Something went wrong, Error ${response.status}`);
      }

      const data = await response.json();

      dispatch({ type: "DATA", data });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const globalContext = useMemo(
    () => ({
      theme: state.theme,
      data: state.data,
      changeTheme: switchTheme,
    }),
    [state.theme, state.data]
  );

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
};