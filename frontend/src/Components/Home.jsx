import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
    function logout() {
        navigate("/")
    }
  return (
      <>
          <div className='w-full h-screen flex justify-center align-middle'>
              <div className='m-auto w-56 '>
      <button className='m-auto bg-cyan-800 p-4 rounded-full text-white' onClick={logout}> Logout </button>
                  
              </div>
          </div>
    </>
  )
}
