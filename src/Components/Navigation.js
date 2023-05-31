import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const Navigation = () => {
	const [ message, setMessage ] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(r => r.json())
    .then(d => setMessage(d.message))
    .catch(e => console.log(e.message))
  },[])

	return (
		<div>
			<Link className='text-6xl p-4 m-4 font-headings font-extrabold' to='/'>
				{message}
			</Link>
		</div>
	)
}