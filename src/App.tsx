import Todocreate from "./components/Todocreate"
import Todolist from "./components/Todolist"


function App() {


  return (
    <div className="w-full bg-amber-100 h-screen flex flex-col items-center pt-28">
      <Todocreate />
      <Todolist />
    </div>
  )
}

export default App
