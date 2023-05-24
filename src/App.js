import { useEffect, useState } from 'react';

import './App.css';
import { Paths } from './Components/Routes';

function App() {
  const [ message, setMessage ] = useState('');

  function callBackend(){
    fetch('/topics', {
      method : 'GET',
    })
    .then(r => r.json())
    .then(d => {
      console.log(d)
      setMessage(d.message)
    })
    .catch(e => console.log(e.message))
  }

  useEffect(() => {
    callBackend();
  },[]);

  return (
    <div
      className
      ="text-center text-2xl bg-[#0B0C10] font-main text-[#D1E8E2] h-screen w-screen bg-cover">

       <h1 className='text-4xl p-2 mb-2'>{message}</h1>
       <Paths  />
    </div>
  );
}

export default App;
