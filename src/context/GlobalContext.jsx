import { useContext, createContext } from "react";
import useRoutines from "../hooks/useRoutines";
import useExercises from "../hooks/useExercises";

const GlobalContext = createContext();



export function GlobalProvider({children}){

    const {...useRoutineData}= useRoutines()
    const {...useExercisesData} = useExercises()

    console.log(useRoutineData)

    return <GlobalContext.Provider value={{...useRoutineData, ...useExercisesData}}>
        {children}
    </GlobalContext.Provider>
}

export function useGlobalContext(){
    return useContext(GlobalContext);
}
