
// src/pages/Homepage.jsx
import React from 'react'
import Herosection from '../Components/Herosection'
import Sliding from '../Components/sliding'
import Cartitem from '../Components/Cartitem'
import Popular from '../Components/Popular'


const Homepage = () => {
  return (
    <div className='bg-black'>
      <Herosection/>
      <Sliding/>
      <Cartitem/>
      <Popular/>
    </div>
  )
}

export default Homepage