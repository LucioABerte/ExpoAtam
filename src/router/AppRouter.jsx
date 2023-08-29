import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Faatra, Atam } from "../pages"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path={"/faatra"} element={ <Faatra /> } />
            <Route path={"/atam"} element={ <Atam /> } />

            <Route path={"/*"} element={ <Faatra /> } />
        </Routes>
        <Footer/>
    </>
  )
}

export default AppRouter