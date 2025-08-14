import { Routes, Route } from 'react-router-dom'
import './App.css'
import Portfolio from '../components/Portfolio'
import AboutDetails from '../pages/AboutDetails'
import ProjectDetails from '../pages/ProjectDetails'
import AdminLogin from '../pages/AdminLogin'
import ProjectsAdmin from '../pages/Admin'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Portfolio/>} />
      <Route path='/About' element={<AboutDetails/>} />
      <Route path='/Project/:id' element={<ProjectDetails/>} />
      <Route path="admin/login" element={<AdminLogin/>} />
      <Route path="admin/projects" element={<ProjectsAdmin/>} />
    </Routes>
    </>
  )
}

export default App
