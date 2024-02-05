import React from 'react'

function Home() {
  return (
    <div className='bg-cyan-300 h-screen flex justify-center items-center'>
      <div className='flex'>
        <div><button className='px-5 py-2 bg-blue-400 rounded-full'>+</button></div>
        <div className='px-5'>0</div>
        <div><button className='bg-red-400 px-5 py-2 rounded-full'>-</button></div>
      </div>
    </div>
  )
}

export default Home