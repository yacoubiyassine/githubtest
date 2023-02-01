import React from 'react'
import {Data} from './Assets/Data'

const Navigation = ({setSearch}) => {
  return (
    <div>
    <input placeholder='search' onChange={(e)=>setSearch(e.target.value)}></input>
    </div>
  )
}

export default Navigation