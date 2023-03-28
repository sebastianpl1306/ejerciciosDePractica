import React from 'react'

export const PokemonCard = ({name}) => {
  return (
    <div className='card my-2'>
        <div class="card-body">{name}</div>
    </div>
  )
}
