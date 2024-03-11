import React from 'react'
import '../index.css'
import Card from './Card'

const MainPage = () => {
  return (
    <div>
        <div className='image'>
    <img src="/images/ecommerce.png"/>
    </div>




    <div className='main'>
    <Card name="Fridge" price="$899" img="/images/download1.jpeg" btn1="Add to cart"/>
    <Card name="Fridge" price="$899" img="/images/download1.jpeg" btn1="Add to cart"/>
    <Card name="Fridge" price="$899" img="/images/download1.jpeg" btn1="Add to cart"/>
    <Card name="Fridge" price="$899" img="/images/download1.jpeg" btn1="Add to cart"/>
    </div>
      
    </div>
  )
}

export default MainPage
