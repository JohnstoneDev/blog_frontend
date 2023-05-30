import { useEffect, useState } from 'react';

import './App.css';
import { Paths }  from '../src/Components/Routes'; 

function App() {
  const [ message, setMessage ] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(r => r.json())
    .then(d => setMessage(d.message))
    .catch(e => console.log(e.message))
  },[])

  return (
    <div
      className
      ="text-center text-2xl bg-[#0B0C10] font-content text-[#D1E8E2] min-h-screen w-screen bg-cover">
      <div>
       <h1 className='text-4xl p-2 mb-2 font-headings'>{message}</h1>
       <Paths  />
      </div>
    </div>
  );
}

export default App;
