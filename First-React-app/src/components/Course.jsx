function Course(props){
    console.log(props)
    return(
        <div className='d-flex flex-column w-25 border border-1 border-secondary text-center p-2 m-2 rounded shadow'style={{ width:"200px", height:"150px"}}>
      <h4>{props.children}</h4>
      <b>price-{props.price}$</b>
      <p>Trainer:{props.trainer}</p>
        </div>
    )
}
export default Course