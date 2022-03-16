import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>Header Client</header>
        <main><Outlet/></main>
        <footer>Footer Client</footer>
    </div>
  )
}

export default WebsiteLayout