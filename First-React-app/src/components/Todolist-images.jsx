import React, {useState} from "react" ;
function Todolist(){
  var[todos,settodos] = React.useState([])   // this two are default values for understanding
    function add(){
     // get the value from textbox
     //insert value in to state variable
     var ntodo = document.getElementById('d1').value;
     settodos([...todos,ntodo]);

    }

    return(
        <div className="border border-2 border-success m-2 p-2">
          <h1>Todolist</h1>
          <input type="text" id="d1"/>
          <button onClick={()=>{add()}}>Add Task</button>
          <ul>
             {
                todos.map((t)=>{
                    return <li>{t}</li>
                })
             }
          </ul>
        </div>
    )
}
export default Todolist