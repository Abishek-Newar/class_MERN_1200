
import { useDispatch } from 'react-redux'
import Counter from './components/Counter'

function App() {
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={(e)=>dispatch({type: 'INCREMENT'})}>INCREMENT</button>
      <Counter />
      <button onClick={(e)=>dispatch({type: 'DECREMENT'})}>DECREMENT</button>
    </>
  )
}

export default App
