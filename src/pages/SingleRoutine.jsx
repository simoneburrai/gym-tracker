import { useParams } from "react-router-dom"

export default function SingleRoutine(){

    const {id} = useParams();
    return <>
    <h1>Routine con id {id}</h1>
    </>
}