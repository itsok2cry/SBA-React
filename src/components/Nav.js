import React from 'react'
import { useDispatch } from 'react-redux'
import { darkMode, lightMode } from '../features/theme'
import { Link } from 'react-router-dom'



export default function Nav() {
    const dispatch = useDispatch()
    
  return (
    <div className='navbar'>
    <ul>
      <li>
    <a href='/'>Home</a>
    </li>
    <li>
      <a href='/my-list'>My List</a>
    </li>
    </ul>
<div className='theme-button'>
<span>Themes:</span>
<button onClick={()=> {dispatch(darkMode())}}>Night</button>
<button onClick={()=> {dispatch(lightMode())}}>Day</button>

</div>
    </div>
  )
}

