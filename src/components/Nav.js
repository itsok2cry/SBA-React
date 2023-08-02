import React from 'react'
import { useDispatch } from 'react-redux'
import { darkMode, lightMode } from '../features/theme'
import { Link } from 'react-router-dom'


export default function Nav() {
    const dispatch = useDispatch()
    
  return (
    <div className='navbar'>
       <Link to="/">Home</Link>
      <div> <Link to="/my-list">Go to My List</Link></div>
<div className='theme-button'>
<button onClick={()=> {dispatch(darkMode())}}>dark</button>
<button onClick={()=> {dispatch(lightMode())}}>light</button>


</div>
    </div>
  )
}

