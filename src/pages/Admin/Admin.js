import React from 'react'
import { Outlet } from 'react-router-dom'
import MainLayout from '../../components/MainLayout/MainLayout'

const Admin = () => {
  return (
    <div>
     
          <MainLayout>
              <Outlet />
          </MainLayout>
    </div>
  )
}

export default Admin