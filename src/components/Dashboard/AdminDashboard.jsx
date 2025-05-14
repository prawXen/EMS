import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
const AdminDashboard = ({logOut,data}) => {
  
  return (
    <div className='h-screen w-full p-10'>
        <Header logOut={logOut} data={data} />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard