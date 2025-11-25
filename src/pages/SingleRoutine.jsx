import { Navigate, useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";
import EditTitleButtonInput from "../components/EditTileButtonInput";

export default function SingleRoutine(){

    const {routines, deleteRoutine, modifyRoutine, exercises, modifyExercises, deleteExercise, createExercise} = useGlobalContext();
    const {id} = useParams();
    const currentRoutine = routines.find(r => r.id === Number(id));


    console.log(currentRoutine);

    const confirmElimination = ()=>{
        const isConfirmed = window.confirm(`Are you sure you want to delete the routine ${currentRoutine.title}`);
        if(!isConfirmed){
            return;
        }
        deleteRoutine(currentRoutine.id);
    }

    const modifyTitle = (e)=>{
        const newTitle = e.target.value;
        while(!newTitle || newTitle.trim() === ""){
            if(newTitle === null){
                return;
            }
        }
        modifyRoutine(id, {title: newTitle});
    }

    const createExTitle = ()=>{
        let exTitle = prompt("Inserisci un Nuovo Titolo");
        while(!exTitle || !exTitle.trim()){
            if(exTitle===null){
                return;
            }
            exTitle = prompt("Titolo non valido, inserisci un Nuovo titolo");                                    
        }
        createExercise({title: exTitle})
    }

    if(!currentRoutine){
        return <Navigate to="/routines"/>
    }

    return <>
    <div>
        <div className="routine-title">
            <EditTitleButtonInput 
                title={currentRoutine.title} 
                onChange={(e)=>{
                        modifyTitle(e);
                }}
            />
            <button onClick={confirmElimination}>Delete</button>
        </div>
        <div>
        <button onClick={createExTitle}>Add Exercise</button>
        {exercises.length > 0 ?
            <div>
                {exercises.map(e => <div key={e.id}>
                    {e.title}
                </div>)}
            </div>   
            : <p>There are not created Exercises</p> 
        }
        </div>
    </div>
    
    </>
}