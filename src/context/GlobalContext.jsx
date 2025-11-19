import { useContext, createContext } from "react";

const GlobalContext = createContext();

export function GlobalProvider({children}){
    return <GlobalContext.Provider value={{}}>
        {children}
    </GlobalContext.Provider>
}

export function useGlobalContext(){
    return useContext(GlobalContext);
}
