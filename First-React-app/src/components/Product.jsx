import React, {useEffect, useState} from "react"
function Product(){
    //api call chesi data thechukoni display cheyali
    var [products,setProduct]=useState();
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
       setProduct(data.products);       
    })
    return(
        <div className="border border-2 border-info p-2 m-2">
           <h2>Products</h2>
           <ul className="d-flex flex-wrap list-unstyle">
          { products?.map((prod)=>{
             return (
                <li>
             <div class="card text-bg-dark p-2 m-2" style={{ width: "240px" }}>
  <img src={prod.thumbnail} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title">{prod.title}</h5>
    <p className="card-text">{prod.description.slice(0,60)}</p>
    <p className="card-text">
      <b>${prod.price}</b></p>
  </div>
</div>
               </li> )
           })}
        </ul>
 </div>
    )
}
export default Product