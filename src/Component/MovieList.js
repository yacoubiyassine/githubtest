import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data,search}) => {
  return (
    <div>{data.filter(item =>item.name.toLowerCase().includes(search.toLowerCase().trim()) ).map(el =><MovieCard key={Math.random()}el={el}/>)}</div>
  )
}

export default MovieList