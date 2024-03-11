// import React from 'react'

// function Card(props) {
//   return (
//     <>
    
//       <h1>{props.name}</h1>
//       <p>{props.price}</p>
//     </>
//   )
// }


// export default Card

import React from 'react'

function Card(props) {
  return (
   <div className='main'> 
    <div className='image1'>
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      <img src={props.img} />
      <button>{props.btn1}</button>
    </div>
    </div>
  )
}

Card.propTypes = {

}

export default Card



