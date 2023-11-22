"use client"
import { createContext } from "react";

export const  GlobalContext = createContext(null);


const GlobalState = ({children}) => {
    return (
        <div>
            <GlobalContext.Provider value={{}}>

        {children}
            </GlobalContext.Provider>
        </div>
    );
};

export default GlobalState;