import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Menu />
                    <Search />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header