import { Routes, Route } from 'react-router-dom'
import './App.css'
import Portfolio from '../components/Portfolio'
import AboutDetails from '../components/AboutDetails'
import ProjectDetails from '../components/ProjectDetails'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Portfolio/>} />
      <Route path='/About' element={<AboutDetails/>} />
      <Route path='/Project/:id' element={<ProjectDetails/>} />
    </Routes>
    </>
  )
}

export default App
