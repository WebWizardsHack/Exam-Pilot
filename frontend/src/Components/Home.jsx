import React from 'react'
import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD

export default function Home() {
    const navigate=useNavigate()
    function logout() {
        navigate("/")
=======
import axios from "axios"

export default function Home() {
    const navigate=useNavigate()
    async function logout() {
        try {
            const response = await axios.get('http://localhost:3001/logout');

            if (response.status === 200) {
                alert(response.data.message);
                navigate('/');
            } else {
                alert('Unexpected status code: ' + response.status);
            }
        } catch (error) {
            console.error('Error logging out:', error);
            if (error.response) {
                alert('Error from server: ' + error.response.status + ' - ' + error.response.data.message);
            } else if (error.request) {
                alert('No response from the server');
            } else {
                alert('Error setting up the request: ' + error.message);
            }
        }
>>>>>>> Usaid
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
