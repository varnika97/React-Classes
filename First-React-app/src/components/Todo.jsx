import React, { useState } from "react"
function Todo(){
    var [todos,settodos] = useState(['books','games','toys','travel'])
    function addNewtodo(){
        var ntodo = document.getElementById('d1').value ;
        settodos([...todos, ntodo]);
    }
    return(
        <div className="border border-2 border-success m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" id="d1"/>
        <button onClick={()=>{addNewtodo()}}>Add Todo</button>
        <ul>
            {
                todos.map((t)=>{
                return  <li>{t}</li>
                })
            }
        </ul>
        </div>
    )
}
export default Todo