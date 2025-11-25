import { Navigate, useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";

export default function SingleRoutine(){

    const {routines, deleteRoutine, modifyRoutine} = useGlobalContext();
    const {id} = useParams();
    const currentRoutine = routines.find(r => r.id === Number(id));

    const [editTitleMode, setEditTitleMode] = useState(false)

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

    if(!currentRoutine){
        return <Navigate to="/routines"/>
    }

    return <>
    <div>
        {!editTitleMode ? 
             <button onClick={()=>setEditTitleMode(true)} className="modify-title-button">{currentRoutine.title}</button> 
             : <input
                className="modify-title-button"
                defaultValue={currentRoutine.title}
                onBlur={(e)=>{
                    modifyTitle(e);
                    setEditTitleMode(false)}}
                onKeyDown={(e)=>{
                    const currentKey = e.key
                    if(currentKey === "Enter"){
                        modifyTitle(e)
                    }
                }}/>}
        
        <div>
            <button onClick={confirmElimination}>Elimina</button>
        </div>
    </div>
    
    </>
}