import {Routes,Route} from "react-router-dom"
import Lobby from "./Screens/Lobby"
import Room from "./Screens/Room"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<Room />}/>
      </Routes>
    </>
  )
}

export default App
