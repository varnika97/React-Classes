import React from "react"

function TodoRefactoring(props){
    return(
        <div className="border m-2 p-2">
         <li>{props.t} 
             <button onClick={()=>{props.deletetodo(props.i)}}>Delete</button>
         </li>
        
        </div>
    )
}
export default TodoRefactoring