import react from "react";
import Counter from "./Component/Counter";

//hooks :perform special functinality
//types
//useState
//useEffect
//useMemo
//useCallback
//useContext
//custom Hook
function App() {
  let [count,setCount] = react.useState(10)
  
  react.useEffect(()=>{
    console.log(20)
  },[count])
  function CounterAdd(){
    setCount(count + 1)
  }
  function CountSub(){
    //code
  }
  return (
    <>
    <Counter count={count} CounterAdd={CounterAdd} CountSub={CountSub} />
    </>
  )
}

export default App
