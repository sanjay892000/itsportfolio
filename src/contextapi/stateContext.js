import { createContext, useContext } from "react";


export const stateContext = createContext();

export const useStateContext = ()=>{
    return useContext(stateContext);
}