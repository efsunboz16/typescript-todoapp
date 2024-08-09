import Todocreate from "./components/Todocreate"
import Todolist from "./components/TodoList"


function App() {


  return (
    <div className="w-full bg-amber-100 min-h-screen flex  ">
      <div className="w-full  h-fit flex flex-col justify-center items-center relative top-32">
        <Todocreate />
        <Todolist />
      </div>

    </div>
  )
}

export default App
