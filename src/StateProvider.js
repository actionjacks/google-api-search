import React, { createContext, useContext, useReducer } from "react";
//preparing the data layer
export const StateContext = createContext();
//reducer listenen for changes
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* children is reefering <app/>  in index.js*/}
    {children}
  </StateContext.Provider>
);
//hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
