import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext"

export default function Routines(){

    const {routines, createRoutine} = useGlobalContext();  

    const addRoutineTitle = ()=>{
        let newTitle = prompt("Insert a Routine Title")
        while(!newTitle || newTitle.trim() === ""){
            if(newTitle === null){
                return;
            }
          newTitle = prompt("Title not Valid. Insert a new Title")
        }
        createRoutine(newTitle);
    }

    return <>
    <h1>Le Mie Routine</h1>
    <button onClick={addRoutineTitle}>Add New Routine</button>
    {routines.length === 0 ? (
        <div>You dont'have any routine</div>
    ) : <div className="routine-list">
        {routines.map(r =>(
            <Link to={`/routines/${r.id}`} className="routine" key={r.id}>
                <h2>{r.title}</h2>
            </Link>
        ))}
    </div>}
    </>
}