import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import TeacherDasboard from './Components/TeacherDasboard'
import UpcommingExams from './Components/UpcommingExams'
import Exams from './Components/Exams'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/> } />
          <Route path='/signup' element={<Signup/> } />
          <Route path='/home' element={<Home/> } />
          <Route path='/teacher-dashboard' element={<TeacherDasboard />} />
          <Route path='/upcoming-exam' element={<UpcommingExams/> } />
          <Route path='/exams' element={<Exams/> } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App