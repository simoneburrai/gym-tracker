import { useEffect, useState } from "react"


const useExercises = ()=>{

const [exercises, setExercises] = useState(()=>{
    const localExercises = JSON.parse(localStorage.getItem("exercises"));
    return localExercises ? localExercises : []
})

useEffect(()=>{
    localStorage.setItem("exercises", JSON.stringify(exercises ));
}, [exercises])

const createExercise = (content)=>{
    const currentIds = exercises.map(e=> e.id);
    const biggestId = Math.max(0, ...currentIds);
    const newExercise = {
        unitType: "Kg",
        setType: "reps",
        restTime: null,
        ...content,
        id: biggestId + 1
    };

    setExercises(exercises=>[...exercises, newExercise]);
}

const deleteExercise = (id)=>{
    setExercises(prev => prev.filter(e=>e.id !== Number(id)));
}

const modifyExercise = (id, content)=>{
    let currentExercise = exercises.find(e => e.id === Number(id));
    currentExercise = {
        ...currentExercise,
        ...content
    }
    setExercises(prev => prev.map(e=> {
            if(e.id === Number(id)){
                return currentExercise
            }
            return e;
        })
    )
    
}

return {
    exercises,
    createExercise,
    modifyExercise,
    deleteExercise
}

}

export default useExercises;