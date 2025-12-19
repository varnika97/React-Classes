import React, { useState } from "react"
function OnlyTodolist(){
    var [todos, setTodo] =useState(['books','Games',"Movies",'Travel'])
    function addNewtodo(){
        var ntodo = document.getElementById('d1').value;
        setTodo((todo)=>{  // todo is current todo its normal array
             return([...todo,ntodo])
        })
    }
    return(
        <div className="border border-2 border-success m-2 p-2">
           <h1>Todolist</h1>
           <input type="text" id="d1" />
        <button onClick={()=>{addNewtodo()}}>Add Todo</button>
           <ul className="list-unstyled">{
              todos.map((t)=>{
                return <li className=" border border-2 m-2 p-2">{t}</li>
              })
            }</ul>
        </div>
    )
}
export default OnlyTodolist