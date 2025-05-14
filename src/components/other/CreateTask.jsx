import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const CreateTask = () => {
    
    const { refreshUserData }  = useContext(AuthContext)
    const [title, setTitle ] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [assignto, setAssignto] = useState('')
    const [category, setCategory] = useState('')


    const submitHandler=(e)=>{
        e.preventDefault()
       
        const newTask = {title,description,date,category,active:false,newTask:true,completed:false,failed:false}
        
        const data = JSON.parse(localStorage.getItem('employees'))
        data.forEach((elem)=>{
            if( assignto == elem.firstName ){
                elem.tasks.push(newTask)
                elem.taskCount.newTask = elem.taskCount.newTask + 1;
            }
        })
        
        localStorage.setItem('employees', JSON.stringify(data))
        refreshUserData()
        
        
        setTitle('')
        setDescription('')
        setDate('')
        setAssignto('')
        setCategory('')
    }

  return (
    <div className='bg-[#1c1c1c] p-5 mt-10 rounded'>
        <form onSubmit={submitHandler} className='flex items-start justify-between w-full'>
            <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
                <input value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                }} className='w-4/5 text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'/>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-1'>date</h3>
                <input value={date} onChange={(e)=>{
                    setDate(e.target.value)
                }} className='w-4/5 text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
                <input value={assignto} onChange={(e)=>{
                    setAssignto(e.target.value)
                }} className='w-4/5 text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name'/>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
                <input value={category} onChange={(e)=>{
                    setCategory(e.target.value)
                }} className='w-4/5 text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design,Dev,etc'/>
            </div>
            </div>
            <div className='flex flex-col items-start w-2/5'>
                <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
                <textarea value={description} onChange={(e)=>{
                    setDescription(e.target.value)
                }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 resize-none' name="" id="" cols='30'></textarea>
                <button className='bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
        </form>
        </div>
  )
}

export default CreateTask