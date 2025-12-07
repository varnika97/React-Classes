import React, {useState} from "react"
function Galarypic(){

    var [image,setimage] = React.useState([
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJjF20QvbUFPP3CVUA3WLTMA-yDNR2XOP8A&s ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjUY9TY3mSgHhexTfEDZOn4KQdABK-kegjUA&s" ,
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2aAuA7EJ0lAuY8EdCGfv6h2Eu33mM56SyBw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilU7HQr4o4ScSIC8TnquEU_nnDd3OtmJOXw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVa_aAYX-hX2ZlFFxr2h30LsI9WDgVycooRw&s"
    ])
  var [i,setI]=useState(0);
  function newimg(){
     setI(i+1);
  }
  function preimg(){
    setI(i-1);
  }
  

    return(
        <div className="border border-2 m-2 p-2 w-25">
            <h1>Gallery</h1>
             <img src={image[i]} alt="" className="w-80"/><br></br>
             <button onClick={()=>{preimg()}}>Pre</button>
             <button onClick={()=>{newimg()}}>Next</button>
            
        </div>
    )
}
export default Galarypic







