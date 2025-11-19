import { BrowserRouter, Routes, Route } from "react-router-dom"
import Routines from "./pages/Routines"
import SingleRoutine from "./pages/SingleRoutine"
import { Navigate } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"

function App() {


  return (
    <GlobalProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/routines"/>}/>
          <Route path="/routines" element={<Routines/>}/>
          <Route path="/routines/:id" element={<SingleRoutine/>}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    )
}

export default App
