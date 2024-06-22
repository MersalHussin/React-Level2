import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  name: "Mersal",
  age: 20,
  count: 0,
  theme: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
    case "CHANGE_AGE":
      return { ...state, age: action.newValue };
    case "COUNTER":
      return { ...state, count: action.newValue };
    case "TOGGLE":
      return { ...state, theme: action.newValue };
    case "TOGGLE_N":
      return { ...state, theme: action.newValue};


    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeName = (newName) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName });
  }
  
  const changeAge = (newAge) => {
    dispatch({ type: "CHANGE_AGE", newValue: newAge });
  }
  
  const changeTheme = (newTheme) => {
    dispatch({ type: "TOGGLE", newValue: newTheme});
  }
  const changeThemeColor = (newTheme) => {
    dispatch({ type: "TOGGLE_N", newValue: newTheme});
  }
  const Counter = (newCount) => {
    dispatch({ type: "COUNTER", newValue: newCount});
  }
  
  return (
    <ThemeContexttt.Provider value={{ ...firstState,changeName,changeAge , changeTheme , changeThemeColor , Counter  }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;


// dispatch({ type: "TOGGLE", newValue: allData.theme == "" ? "dark" : "" });
