import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='bg-emerald-700 flex-shrink-0 h-full w-[300px] p-5 rounded-xl'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-orange-500 font-semibold text-sm px-3 py-2 rounded'>{data.category}</h3>
            <h4 className='font-semibold'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='mt-2 text-sm'>{data.description}</p>
            <div className='mt-2'>
                <button className='w-full bg-red-500 py-1 px-2 rounded text-sm'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask