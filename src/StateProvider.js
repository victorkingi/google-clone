import React,
{ createContext,
    useContext,
    useReducer
} from "react";

//THIS IS THE DATA LAYER
export const StateContext = createContext();

//THE PROVIDER
export const StateProvider = ({ initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//How we will get values from the data layer in other components
export const useStateValue = () => useContext(StateContext);