import React from 'react'
import Header from '../../Components/Ui/Header/Header'
import Footer from '../../Components/Ui/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout