import React from 'react'
import { Link } from 'react-router-dom'

export default function UpcommingExams() {
  return (
    <>
      <div className=' bg-[url("./public/assets/dasboardBackground.jpeg")] bg-no-repeat bg-cover w-full h-screen overflow-y-auto'>
      <nav className='flex w-full  h-22 py-4 sticky' >
                  <div className=' h-full flex justify-center  align-middle m-auto'>
                      <ul className='flex m-auto gap-11'>
                          <li className=' bg-gray-500 px-2 py-4  rounded-full text-white' >dashboard</li>
                          <Link to={"/upcomming-exam"}><li className=' bg-gray-500 px-2 py-4  rounded-full text-white' >  upcoming exams </li></Link> 
                          <li className=' bg-gray-500 px-2 py-4  rounded-full text-white' >Leaderboard</li>
                          <li className=' bg-gray-500 px-2 py-4  rounded-full text-white' >Logout</li>
                      </ul>
                  </div>
              </nav>
        <div>
          
            
        <div className=' w-[80%] m-auto   bg-black bg-opacity-75  shadow-lg shadow-gray-700 rounded flex justify-center mt-11 '>
            <ul role="list" class=" w-5/6 divide-gray-100 my-8 ">
              <h1 className='text-center text-3xl text-gray-500 font-bold mt-9'> Upcomming Exams</h1>
  <li class="flex justify-between gap-x-6 py-5 border-b-2 border-gray-300">
    <div class="flex min-w-0 gap-x-4">
      <div class="min-w-0 flex-auto">
        <p class="text-lg font-semibold leading-6 text-gray-900">Exam Name</p>
        <p class="mt-1 truncate text-sm leading-5 text-gray-500 ml-4">start at : </p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col justify-start items-center">
     <button className=' px-8 rounded-md cursor-pointer h-8 text-white bg-slate-500 hover:bg-slate-700'> go to exam</button>
      <div className='mt-1 truncate text-sm leading-5 text-gray-500 flex gap-2 i '><span> 12 </span> | <span>3h</span> </div>
    </div>
  </li>
  <li class="flex justify-between gap-x-6 py-5 border-b-2 border-gray-300">
    <div class="flex min-w-0 gap-x-4">
      <div class="min-w-0 flex-auto">
        <p class="text-lg font-semibold leading-6 text-gray-900">Exam Name</p>
        <p class="mt-1 truncate text-sm leading-5 text-gray-500 ml-4">start at : </p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col justify-start items-center">
     <button className=' px-8 rounded-md cursor-pointer h-8 text-white bg-slate-500 hover:bg-slate-700'> go to exam</button>
      <div className='mt-1 truncate text-sm leading-5 text-gray-500 flex gap-2 i '><span> 12 </span> | <span>3h</span> </div>
    </div>
  </li>
  <li class="flex justify-between gap-x-6 py-5 border-b-2 border-gray-300">
    <div class="flex min-w-0 gap-x-4">
      <div class="min-w-0 flex-auto">
        <p class="text-lg font-semibold leading-6 text-gray-900">Exam Name</p>
        <p class="mt-1 truncate text-sm leading-5 text-gray-500 ml-4">start at : </p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col justify-start items-center">
     <button className=' px-8 rounded-md cursor-pointer h-8 text-white bg-slate-500 hover:bg-slate-700'> go to exam</button>
      <div className='mt-1 truncate text-sm leading-5 text-gray-500 flex gap-2 i '><span> 12 </span> | <span>3h</span> </div>
    </div>
  </li>
  <li class="flex justify-between gap-x-6 py-5 border-b-2 border-gray-300">
    <div class="flex min-w-0 gap-x-4">
      <div class="min-w-0 flex-auto">
        <p class="text-lg font-semibold leading-6 text-gray-900">Exam Name</p>
        <p class="mt-1 truncate text-sm leading-5 text-gray-500 ml-4">start at : </p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col justify-start items-center">
     <button className=' px-8 rounded-md cursor-pointer h-8 text-white bg-slate-500 hover:bg-slate-700'> go to exam</button>
      <div className='mt-1 truncate text-sm leading-5 text-gray-500 flex gap-2 i '><span> 12 </span> | <span>3h</span> </div>
    </div>
  </li>
  
 


 
  
  
</ul>

        </div>
        </div>
      </div>
    </>
  )
}
