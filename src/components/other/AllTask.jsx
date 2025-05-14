import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const { authData } = useContext(AuthContext)
  return (


    <div className='bg-[rgb(28,28,28)] p-5 mt-5 overflow-auto rounded'>
        <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2 className='text-lg font-semibold w-1/8'>Employee Name</h2>
            <h2 className='text-lg font-semibold w-1/8'>New Tasks</h2>
            <h2 className='text-lg font-semibold w-1/8'>Active Task</h2>
            <h2 className='text-lg font-semibold w-1/8'>Completed</h2>
            <h2 className='text-lg font-semibold w-1/8'>Failed</h2>
            
        </div>
        <div>
        {authData.employees.map((elem,idx)=>{
            return <div key={idx} className='border-2 border-emerald-400 py-2 px-4 mb-2 flex justify-between rounded'>
                        <h2 className='text-lg font-medium w-1/8'>{elem.firstName}</h2>
                        <h3 className='text-lg font-medium w-1/8 text-blue-400'>{elem.taskCount.newTask}</h3>
                        <h5 className='text-lg font-medium w-1/8 text-yellow-300'>{elem.taskCount.active}</h5>
                        <h5 className='text-lg font-medium w-1/8 text-green-400'>{elem.taskCount.completed}</h5>
                        <h5 className='text-lg font-medium w-1/8 text-red-400'>{elem.taskCount.failed}</h5>
                    </div>
        })}
        </div>

    </div>
  )
}

export default AllTask