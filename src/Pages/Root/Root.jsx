import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'
import GlobalLoading from '../../components/GloabalLoading/GlobalLoading'

const Root = () => {
  return (
    <div>
      <GlobalLoading></GlobalLoading>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
