import React, {useContext , createContext , useReducer} from "react";
import { Children , reducer , initialState } from "react";

export const StateContext = createContext();

const StateProvider = ({reducer , initialState , Children}) => {
    <StateContext.Provider value={useReducer(reducer , initialState)}>
        {Children}
    </StateContext.Provider>
}

export default StateProvider;