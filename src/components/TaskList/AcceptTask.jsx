import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const AcceptTask = ({data}) => {
  const { refreshUserData } = useContext(AuthContext)

  const currentEmployee = JSON.parse(localStorage.getItem('loggedInUser'))
  const employeeData = JSON.parse(localStorage.getItem('employees'))

  const [status, setStatus] = useState(null)

   const statusKey = `taskStatus-${currentEmployee.data.email}-${data.title}`

  // On mount, load status from localStorage
  useEffect(() => {
    const savedStatus = localStorage.getItem(statusKey)
    if (savedStatus) {
      setStatus(savedStatus)
    }
  }, [statusKey])



  const finished=()=>{
    setStatus('finished')
    localStorage.setItem(statusKey, 'finished')
    employeeData.forEach((elem)=>{
      if ( elem.firstName === currentEmployee.data.firstName){
        elem.taskCount.completed += 1
        localStorage.setItem('employees', JSON.stringify(employeeData))
        refreshUserData()
      }   
    })
  }
  
  const failed=()=>{
    setStatus('failed')
    localStorage.setItem(statusKey, 'failed')
    employeeData.forEach((elem)=>{
      if ( elem.firstName === currentEmployee.data.firstName){
        elem.taskCount.failed += 1
        localStorage.setItem('employees', JSON.stringify(employeeData))
        refreshUserData()
      }   
    })
  }



  return (
    <div className='bg-emerald-700 shadow-md flex-shrink-0 h-full w-[300px] p-5 rounded-xl'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-orange-500 font-semibold text-sm px-3 py-2 rounded'>{data.category}</h3>
            <h4 className='font-semibold'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='mt-2 text-sm'>{data.description}</p>
            {status===null ? (
                <div className='flex justify-around mt-4'>
                  <button onClick={finished} className='bg-emerald-500 py-1 px-2 rounded text-sm'>Mark as Completed</button>
                  <button onClick={failed} className='bg-rose-500 py-1 px-2 rounded text-sm'>Mark as Failed</button>
                </div>
              ) : (
                <div className='mt-2'>
                  {status==='finished' ?
                    <button className='w-full bg-green-500 py-1 px-2 rounded text-sm'>Completed</button>
                  : <button className='w-full bg-red-500 py-1 px-2 rounded text-sm'>Failed</button>
                  }
                </div>
              )
            }
    </div>  
  )
}

export default AcceptTask