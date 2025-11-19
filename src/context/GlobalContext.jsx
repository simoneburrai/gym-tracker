import { useContext, createContext } from "react";
import useRoutines from "../hooks/useRoutines";

const GlobalContext = createContext();



export function GlobalProvider({children}){

    const {...useRoutineData}= useRoutines()

    console.log(useRoutineData)

    return <GlobalContext.Provider value={{...useRoutineData}}>
        {children}
    </GlobalContext.Provider>
}

export function useGlobalContext(){
    return useContext(GlobalContext);
}
