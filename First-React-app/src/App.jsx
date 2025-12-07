import React from 'react'
import Navbar from './components/NavBar'
import Banner from './components/Banner'
import Feedback from './components/Feedback'
import Product from './components/Product'

 function App () {
  return (
    <div className="border border-2 border-danger m-2 p-2 vh-100">
      <Navbar></Navbar>
      <Banner></Banner>
      <Feedback></Feedback>
      <Product></Product>
    </div>
  )
}
export default App
