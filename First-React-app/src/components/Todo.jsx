import React, { useState } from "react"
import TodoRefactoring from "./TodoRefactoring";
function Todo(){
    var [todos,settodos] = useState(['Books','Games','Toys','Travel'])
    function addNewtodo(){
        var ntodo = document.getElementById('d1').value ;
        settodos([...todos, ntodo]);
    }
    return(
        <div className="border border-2 border-success m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" id="d1"/>
        <button onClick={()=>{addNewtodo()}}>Add Todo</button>
        <ul className="list-unstyled">
            {
                todos.map((t)=>{
                return (
                <TodoRefactoring t={t}></TodoRefactoring>
                  )  })
            }
        </ul>
        </div>
    )
}
export default Todo