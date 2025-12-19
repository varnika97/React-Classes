import React from "react"
import OnlyTodolist from "./components/OnlyTodolist"
function App(){
  return(
    <div className="border border-2 border-success m-2 p-2">
      <h1>App</h1>
      <OnlyTodolist></OnlyTodolist>
    </div>
  )
}
export default App