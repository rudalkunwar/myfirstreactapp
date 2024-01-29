import React from 'react'

export default function Auth(props) {
  return (
    <div className='h-screen bg-gray-200 flex justify-center items-center'>
        <form className='bg-gray-300 p-2 w-96 shadow-md' onSubmit={props.authenticate}>
            <h2 className='text-center text-2xl'>Enter the detalis</h2>
            <input name='username' className='block px-5 py-3 mt-3 w-full shadow-md rounded-md ' type="text" placeholder='username' />
            <input name='email' className='block px-5 py-3 mt-3 w-full shadow-md rounded-md' type="email" placeholder='Email' />
            <input name='password' className='block px-5 py-3 mt-3 w-full shadow-md rounded-md' type="password" placeholder='************' />
            <button type='submit' className='bg-blue-600 mt-3 py-4 w-full shadow-md rounded-md text-white hover:bg-blue-500'>Submit</button>
        </form>
    </div>
  )
}
