import React from 'react'

const Header = ({logOut,data}) => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-xl font-medium'>Hello <br /> <span className='text-3xl'>{data.firstName} 👋</span></h1>
        <button onClick={logOut} className='text-lg font-medium bg-emerald-500 py-2 px-5 rounded hover:bg-red-500 transition'>Log out</button>
    </div>
  )
}

export default Header