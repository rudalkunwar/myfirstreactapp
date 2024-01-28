import React, { useState } from 'react'

export default function App() {
  const [text,setText] = useState('');
  const textFun =  () => {

  }
  return (
    <div>
    <textarea onKeyUp={textFun} cols="30" rows="10"></textarea>
    </div>
  )
}
