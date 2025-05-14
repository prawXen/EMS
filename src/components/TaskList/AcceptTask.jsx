import React from 'react'

const AcceptTask = ({data}) => {  
  return (
    <div className='bg-red-400 flex-shrink-0 h-full w-[300px] p-5 rounded-xl'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 font-semibold text-sm px-3 py-2 rounded'>{data.category}</h3>
            <h4 className='font-semibold'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='mt-2 text-sm'>{data.description}</p>
            <div className='flex justify-around mt-4'>
                <button className='bg-green-700 py-1 px-2 rounded text-sm'>Mark as Completed</button>
                <button className='bg-red-600 py-1 px-2 rounded text-sm'>Mark as Failed</button>
            </div>
    </div>
  )
}

export default AcceptTask