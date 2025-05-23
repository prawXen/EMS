import React, { useContext } from 'react'

const TaskListCount = ({data}) => {
    if (!data) return null;
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl py-6 px-9 bg-sky-600 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className='rounded-xl py-6 px-9 bg-green-700 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h2 className='text-xl font-medium'>Completed Task</h2>
        </div>
        <div className='rounded-xl py-6 px-9 bg-pink-500 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h2 className='text-xl font-medium'>Accepted Task</h2>
        </div>
        <div className='rounded-xl py-6 px-9 bg-red-500 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h2 className='text-xl font-medium'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskListCount