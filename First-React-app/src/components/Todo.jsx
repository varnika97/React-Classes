import React, { useState } from "react"
import TodoRefactoring from "./TodoRefactoring";
function Todo(){
    var [todos,settodos] = useState(['Books','Games','Toys','Travel'])
    function addNewtodo(){
        var ntodo = document.getElementById('d1').value ;
        settodos([...todos, ntodo]);
    }
    function deletetodo(indx){
        // var temp = [...todos];
        //  temp.splice(indx,1) 
        // settodos(()=>{
        //    return [...temp]
        // });  OR

        // settodos((ctodos)=>{
        //     ctodos.splice(indx,1)
        //      return [...ctodos]
        // })  OR

        // this is best practice
        settodos((ctodos)=>{ctodos.filter((t,i) => i != indx)
        })
         
    }
    return(
        <div className="border border-2 border-success m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" id="d1"/>
        <button onClick={()=>{addNewtodo()}}>Add Todo</button>
        <ul className="list-unstyled">
            {
                todos.map((t,i)=>{
                return (
                <TodoRefactoring t={t} deletetodo={deletetodo} i={i}></TodoRefactoring>
                  )  })
            }
            
        </ul>
        </div>
    )
}
export default Todo