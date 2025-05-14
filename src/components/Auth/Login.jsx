import React from 'react'
import { useState } from 'react'
const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }


  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className=' border-2 rounded-xl p-20 border-emerald-600'>
            <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <div className='relative'>
                <i className="bi bi-person-fill absolute left-3.5 top-2.5"></i>
                <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className='w-80 border-2 border-emerald-600 rounded-full px-8 py-2 placeholder:text-gray-500' type="email" placeholder='Email'/>
                </div>
                <div className='relative'>
                <i className="bi bi-unlock2-fill absolute left-3.5 top-7.5 "></i>
                <input value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} required className='w-80 border-2 border-emerald-600 rounded-full px-8 py-2 mt-5 placeholder:text-gray-500' type="password" placeholder='Password' />
                </div>
                <button className='w-60 bg-emerald-600 rounded-full hover:cursor-pointer px-6 py-2 mt-10 font-bold text-xl'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login