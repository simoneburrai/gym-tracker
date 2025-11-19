import { useEffect, useState } from "react"


const useRoutines = ()=>{

const [routines, setRoutines] = useState(()=>{
    const localRoutines = JSON.parse(localStorage.getItem("routines"));
    return localRoutines ? localRoutines : []
})

useEffect(()=>{
    localStorage.setItem("routines", JSON.stringify(routines));
}, [routines])

const createRoutine = (title)=>{
    const currentIds = routines.map(r=> r.id);
    const biggestId = Math.max(0, ...currentIds);
    const newRoutine = {
        title: title,
        id: biggestId + 1
    };

    setRoutines(routines=>[...routines, newRoutine]);
}

const deleteRoutine = (id)=>{
    setRoutines(routines => routines.filter(r=>r.id !== Number(id)));
}

const modifyRoutine = (id, title)=>{
    let currentRoutine = routines.find(r => r.id === Number(id));
    currentRoutine = {
        ...currentRoutine,
        title: title
    }
    setRoutines(prev => prev.map(r=> {
            if(r.id === Number(id)){
                return currentRoutine
            }
            return r;
        })
    )
    
}

return {
    routines, 
    createRoutine,
    modifyRoutine,
    deleteRoutine
}

}

export default useRoutines;