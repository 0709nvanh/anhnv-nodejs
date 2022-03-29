import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <Header />
        <main><Outlet/></main>
        <Footer />
    </div>
  )
}

export default WebsiteLayout