import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarAdmin from '../admin/layout/NavBarAdmin'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <NavBarAdmin />
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout