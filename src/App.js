import React, { useState } from 'react'

export default function App() {
  const [text,setText] = useState('');
  const textFun =  (e) => {
    setText(text=>e.target.value);
  }
  return (
    <div className='flex h-screen flex-col justify-center items-center bg-gray-400'>
    <textarea className='bg-cyan-100 outline-none p-2 border border-yellow-500' onKeyUp={textFun} cols="100" rows="10"></textarea>
    <textarea className='mt-5 bg-yellow-100 outline-none p-2 border'cols="100" rows="10" value={text} ></textarea>
    <iframe src="https://www.hamropatro.com/widgets/dateconverter.php" frameborder="0" scrolling="no" marginwidth="0" marginheight="0"  allowtransparency="true"></iframe>
    </div>
  )
}
