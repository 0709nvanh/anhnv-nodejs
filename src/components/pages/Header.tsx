import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './NavBar'
// import Menu from './Menu'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <Nav />
    </div>
  )
}

export default Header