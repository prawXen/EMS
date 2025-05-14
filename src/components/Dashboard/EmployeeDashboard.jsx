import React from 'react'
import Header from '../other/Header'
import TaskListCount from '../other/TaskListCount'
import TaskList from '../TaskList/TaskList'

export const EmployeeDashboard = ({logOut,data}) => {
  if(!data) return null 
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header logOut={logOut} data={data} />
        <TaskListCount data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
