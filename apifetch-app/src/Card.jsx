import React from 'react'

const Card = ({ showData }) => {
  return (
    <div className='shadow-md m-1 p-2'>
        <h2 className='text-red-600'> {showData.id} <span className='text-violet-700'> {showData.title} </span> </h2>
        <h3> {showData.body} </h3>
    </div>
  )
}

export default Card;