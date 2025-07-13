import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import {ToastContainer} from 'react-toastify'
import Skills from '../components/Skills'

const Portfolio = () => {
  return (
    <>
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <ToastContainer position="top-right" autoClose={10000} toastClassName="custom-toast" bodyClassName="custom-toast-body" />
    </>
  )
}

export default Portfolio