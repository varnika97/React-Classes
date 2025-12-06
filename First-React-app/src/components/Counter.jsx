import React from "react";

function Counter(){
    var c=0;

 var[c,setC] = React.useState(0)

    function inc(){
      setC(c+1);      
    }
    function dec(){
        setC(c-1)
    }
    return(
        <div className="border border-2 border-success p-2 m-3">
          <h1>Counter:{c}</h1>
          <button onClick={()=>{inc()}}>Inc</button>
          <button onClick={()=>{dec()}}>Dec</button>
        </div>
    )
}
export default Counter