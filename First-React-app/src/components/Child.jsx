import React from "react";

function Child(props){
    console.log(props)
    var a=50;
    
    return(
        <div className="border border-2 border-info m-2 p-2">
            Child
            <input type="text" id="d1"/>
        <button onClick={()=>{props.abc(document.getElementById('d1').value)}}>call parent</button>
        </div>
        
    )
}
export default Child