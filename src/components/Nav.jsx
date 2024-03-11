import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className='container'>
      <div className='text'>
       <Link to='/'><h1>eSHOP</h1></Link> 
      </div>
      <div className='inp'>
        <input placeholder='Search'/> 
      </div>
      <div className='text1'>
        <p>Hello</p>
        <Link to='/login'><h1>sign</h1></Link> 
      </div>
      <div className='text1'>
        <p>Your</p>
        <h1>Shop</h1>
      </div>
      <div className='btn'>
        <button>Next Page</button>
      </div>
    </div>
    
    </>
  )
}

export default Nav
