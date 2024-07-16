import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getexam } from '../Store/ActionCreators/ExamActionCreator'
import { getquestion } from '../Store/ActionCreators/QuestionsActionCreator'
// import { getexamquestion } from '../Store/ActionCreators/QuestionsActionCreator'

export default function Exams() {
    let [question,setQuestion]=useState([])
    let dispatch=useDispatch()
    let questions = useSelector((state) => state.QuestionStateData)
    
    // console.log("state",question[0].optA)
    const items = {
        Name: localStorage.getItem("Name"),
        requestId: localStorage.getItem("requestId"),
        timeAllotted: localStorage.getItem("timeAllotted"),
        scheduledTime: localStorage.getItem("scheduledTime"),
        numQuestions: localStorage.getItem("numQuestions")
    };
    async function getdata() {
        
        // Fetch data from localStorage
    
        
        // Dispatch action to fetch questions based on localStorage data
        dispatch(getquestion(items));
    }
    // console.log("question", question)
    useEffect(() => {
        if (questions && questions.questions && questions.questions.questions) {
            console.log("set chla")
            setQuestion(questions.questions.questions)
        }
        
    },[items])

    useEffect(() => {
        
        getdata()
        
    },[questions.length,items.Name])
   
  return (
    <>
    <div className=' bg-[url("./public/assets/dasboardBackground.jpeg")] bg-no-repeat bg-cover w-full h-screen overflow-y-auto' >
        <nav className='flex w-full  h-22 py-4'>
            <div className=' h-full flex justify-center  align-middle m-auto'>
                <ul className='flex m-auto gap-11'>
                    <li className=' bg-gray-500 px-2 py-4  rounded-full text-white' >dashboard</li>
                    <Link to={"/upcomming-exam"}><li className=' bg-gray-500 px-2 py-4  rounded-full text-white' >  upcoming exams </li></Link> 
                    <li className=' bg-gray-500 px-2 py-4  rounded-full text-white' >Leaderboard</li>
                    <li className=' bg-gray-500 px-2 py-4  rounded-full text-white' >Logout</li>
                </ul>
            </div>
        </nav>

        <div className=' mx-16 mt-12 flex '>
            <div className='w-33%'>
                <div className='flex'> 
                    
            <img className="inline-block h-16 w-16 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                <div className=' mx-3'>
                    <h1>name</h1>
                    <p>AMish</p>
              </div>
                </div>
                <div className='my-4'>
                    <div className=' text-lg font-bold'>
                        Department
                    </div>
                    <div>
                        computer Science
                    </div>
                </div>
                <div className='my-4'>
                    <div  className=' text-lg font-bold'>
                        DOB
                    </div>
                    <div>
                        12/04/1992
                    </div>
                </div>
                <div className='my-4'>
                    <div  className=' text-lg font-bold'>
                        contact
                    </div>
                    <div>
                      31412413123
                    </div>
                </div>
                <div className='my-4'>
                    <div  className=' text-lg font-bold'>
                        Email
                    </div>
                    <div >
                      abc@gmail.com
                    </div>
                </div>
            </div>

                  <div>
                      <h1>questions</h1>
                      <div>
                          
                      </div>
           </div>
             
              <div className=' w-[70%] m-auto   bg-black bg-opacity-75  shadow-lg shadow-gray-700 rounded flex justify-center mt-11 '>
            <ul role="list" className=" w-5/6 divide-gray-100 my-8 ">
              <h1 className='text-center text-3xl text-gray-500 font-bold mt-9'> Paper</h1>
              {question.length>0 && question.map((item, index) => {
                return(
               <li key={index} className="flex flex-col justify-between gap-x-6 py-5 border-b-2 border-gray-300">
               <div className="flex min-w-0 gap-x-4">
                 <div className="min-w-0 flex-auto">
                     <p className=" text-xl font-semibold leading-6 text-gray-300">{ item.question}</p>
                     
                            </div>
               </div>
                            <div className='  px-5'>
                                <ul className=' text-gray-300 font-semibold'>
                                <li className=' mt-4'> <input type="radio" name="answer" value={`${item.optA}`} id="answer" /> {item.optA }</li>
                                <li className=' mt-4'> <input type="radio" name="answer" value={`${item.optB}`} id="answer" /> {item.optB }</li>
                                <li className=' mt-4'> <input type="radio" name="answer" value={`${item.optC}`} id="answer" /> {item.optC }</li>
                                <li className=' mt-4'> <input type="radio" name="answer" value={`${item.optD}`} id="answer" /> {item.optD }</li>
                                </ul>
                            </div>
               
                  </li>
                )
            })}
</ul>
</div>
        </div>
</div>
</>
  )
}
