import { Navigate, useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";

export default function SingleRoutine(){

    const {routines, deleteRoutine, modifyRoutine} = useGlobalContext();
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

    const modifyTitle = ()=>{
        let newTitle = prompt("Modifica il titolo della Routine")
        while(!newTitle || newTitle.trim() === ""){
            if(newTitle === null){
                return;
            }
            newTitle = prompt("Inserisci un titolo Valido per Modificare la routine");
        }
        modifyRoutine(id, newTitle);
    }

    if(!currentRoutine){
        return <Navigate to="/routines"/>
    }

    return <>
    <div>
        <h1>Routine con id {id}</h1>
        <div>
            <button onClick={modifyTitle}>Modifica</button>
            <button onClick={confirmElimination}>Elimina</button>
        </div>
    </div>
    
    </>
}