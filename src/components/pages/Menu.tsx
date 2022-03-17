import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div>
        <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/product">Product</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Menu