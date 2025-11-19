import { BrowserRouter, Routes, Route } from "react-router-dom"
import Routines from "./pages/Routines"
import SingleRoutine from "./pages/SingleRoutine"
import { Navigate } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/routines"/>}/>
        <Route path="/routines" element={<Routines/>}/>
        <Route path="/routines/:id" element={<SingleRoutine/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
